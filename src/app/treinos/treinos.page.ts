import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-treinos',
  templateUrl: 'treinos.page.html',
  styleUrls: ['treinos.page.scss']
})
export class TreinosPage implements OnInit {
  userId: string | null = null;
  treinos: any[] = []; // Array para armazenar os treinos

  constructor(
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth,
    private alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userId = user.uid;
        this.loadTreinos();
      } else {
        console.error('Usuário não está logado');
      }
    });
  }

  loadTreinos() {
    if (this.userId) {
      this.firestore.collection('Users').doc(this.userId).collection('Treinos').valueChanges().subscribe(treinos => {
        this.treinos = treinos;
      });
    }
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


