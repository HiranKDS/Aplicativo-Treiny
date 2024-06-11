import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginAcadPageRoutingModule } from './login-acad-routing.module';

import { LoginAcadPage } from './login-acad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginAcadPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LoginAcadPage]
})
export class LoginAcadPageModule {}
