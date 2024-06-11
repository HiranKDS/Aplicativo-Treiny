import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evolucao',
  templateUrl: 'evolucao.page.html',
  styleUrls: ['evolucao.page.scss']
})
export class EvolucaoPage implements OnInit {
  userName: string | null = null;
  userAge: number | null = null;

  constructor(
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth,
    private alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        const userId = user.uid;
        this.loadUserData(userId);
      }
    });
  }

  loadUserData(userId: string) {
    this.firestore.collection('Users').doc(userId).valueChanges().subscribe((user: any) => {
      if (user) {
        this.userName = user.name;
        this.userAge = user.idade;
      }
    });
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
            this.router.navigate(['/login']);
          }
        }
      ]
    });

    await alert.present();
  }
}
