import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.page.html',
  styleUrls: ['./alunos.page.scss'],
})
export class AlunosPage implements OnInit {
  users!: Observable<any[]>;

  constructor(
    private firestore: AngularFirestore, 
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.users = this.firestore.collection('Users', ref => ref.where('role', '==', 'user')).valueChanges({ idField: 'id' });
  }

  goToDetails(user: any) {
    this.router.navigate(['/exercicios', user.id]);
  }
  async showLogoutAlert() {
    const alert = await this.alertController.create({
      header: 'Você deseja sair?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel'
        },
        {
          text: 'Sim',
          handler: () => {
            this.router.navigate(['/login-acad']);
          }
        }
      ]
    });

    await alert.present();
  }
}




/*
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.page.html',
  styleUrls: ['./alunos.page.scss'],
})
export class AlunosPage implements OnInit {
  users!: Observable<any[]>;

  constructor(private firestore: AngularFirestore, private router: Router) { }

  ngOnInit() {
    this.users = this.firestore.collection('Users', ref => ref.where('role', '==', 'user')).valueChanges();
  }

  goToDetails() {
    // Navegar para a página de exercícios
    this.router.navigate(['/exercicios']);
  }
}
  */





