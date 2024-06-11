// login.page.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
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
    this.auth.logar(email, senha).then((res) => {
      console.log("Logged in with email and password");
    }).catch((error) => {
      console.log(error);
    });
  }
}










/*
// login.page.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
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

  iniciar() {
    this.auth.logarComGoogle().then((res) => {
      console.log("Logged in with Google");
    }).catch((error) => {
      console.log(error);
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
    this.auth.logar(email, senha).then((res) => {
      console.log("Logged in with email and password");
    }).catch((error) => {
      console.log(error);
    });
  }
}
*/