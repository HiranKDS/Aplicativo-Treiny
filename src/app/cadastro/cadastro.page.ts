import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  cadastro!: FormGroup;
  userRole: string = 'user';

  constructor(
    private router: Router,
    private auth: AuthService,
    private builder: FormBuilder,
    private afa: AngularFireAuth,
    private afs: AngularFirestore,
    private alertController: AlertController
  ) {
    this.cadastro = this.builder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      idade: ['', [Validators.required, Validators.min(1)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confSenha: ['', [Validators.required, Validators.minLength(6)]],
      isPersonal: [false]
    });
  }

  ngOnInit() {}

  toggleRole(event: any) {
    this.userRole = event.detail.checked ? 'admin' : 'user';
  }

  async submitForm() {
    if (!this.cadastro.valid) {
      return;
    }

    const email = this.cadastro.value.email;
    const emailExists = await this.checkIfEmailExists(email);

    if (emailExists) {
      this.showAlert('Erro', 'Este email já está cadastrado.');
      return;
    }

    try {
      const newUser = await this.afa.createUserWithEmailAndPassword(email, this.cadastro.value.senha);
      const newUserObject = {
        name: this.cadastro.value.name,
        idade: this.cadastro.value.idade,
        email: email,
        role: this.userRole
      };
      await this.afs.collection("Users").doc(newUser.user?.uid).set(newUserObject);
      console.log('Cadastro efetuado com sucesso!');
      this.router.navigate(['/login']);
    } catch (error) {
      console.error(error);
      this.showAlert('Erro', 'Ocorreu um erro ao efetuar o cadastro.');
    }
  }

  async checkIfEmailExists(email: string): Promise<boolean> {
    try {
      const usersSnapshot = await this.afs.collection("Users", ref => ref.where('email', '==', email)).get().toPromise();
      return usersSnapshot ? !usersSnapshot.empty : false;
    } catch (error) {
      console.error("Erro ao verificar se o email já está cadastrado: ", error);
      return false;
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }
}





