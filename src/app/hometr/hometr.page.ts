import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-hometr',
  templateUrl: './hometr.page.html',
  styleUrls: ['./hometr.page.scss'],
})
export class HometrPage implements OnInit {

  constructor(
    private alertController: AlertController,
    private router: Router
  ) {}

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

  ngOnInit() {
  }

}
