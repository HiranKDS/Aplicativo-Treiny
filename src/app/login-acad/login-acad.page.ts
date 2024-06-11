/*// login-admin.page.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.page.html',
  styleUrls: ['./login-admin.page.scss'],
})
export class LoginAdminPage implements OnInit {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private auth: AuthService,
    private afa: AngularFireAuth,
    private afs: AngularFirestore,
    private fb: FormBuilder,
    private alertController: AlertController
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {}

  async loginAdmin() {
    const email = this.loginForm.value.email;
    const senha = this.loginForm.value.senha;

    try {
      const userCredential = await this.afa.signInWithEmailAndPassword(email, senha);
      const userId = userCredential.user?.uid;

      if (userId) {
        const academiaRef = await this.afs.collectionGroup("Users", ref => ref.where("uid", "==", userId)).get().toPromise();
        let academiaId = "";

        academiaRef.forEach(doc => {
          if (doc.exists) {
            academiaId = doc.ref.parent.parent?.id || "";
          }
        });

        if (academiaId) {
          console.log("Administrador encontrado na academia:", academiaId);
          this.router.navigate([`/academia/${academiaId}/admin`]);
        } else {
          this.showAlert("Erro", "Academia não encontrada para este administrador.");
        }
      }
    } catch (error) {
      console.error("Erro ao fazer login: ", error);
      this.showAlert("Erro", "Email ou senha incorretos.");
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
*/







// login-acad.page.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-acad',
  templateUrl: './login-acad.page.html',
  styleUrls: ['./login-acad.page.scss'],
})
export class LoginAcadPage implements OnInit {

  logar!: FormGroup;

  constructor(private auth: AuthService, private router: Router, private builder: FormBuilder) { 
    this.logar = new FormGroup({
      email: new FormControl(''),
      senha: new FormControl('')
    });
  }

  ngOnInit() {
    this.logar = this.builder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }



  submitForm() {
    if (!this.logar.valid) {
      return;
    } else {
      this.login();
    }
  }

  private login() {
    const email = this.logar.value['email'];
    const senha = this.logar.value['senha'];
    this.auth.logarAdmin(email, senha).then((res) => {
      console.log("Logged in as admin");
    }).catch((error) => {
      console.log(error);
    });
  }
}

