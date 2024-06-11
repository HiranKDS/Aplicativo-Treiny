import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private auth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) { }

  public async logarComGoogle() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if (user) {
        const userRole = await this.verificarRoleUsuario(user.uid);
        if (userRole === 'user') {
          this.router.navigate(['/tabs/home']);
        } else {
          await auth.signOut();
          alert('Você não tem permissão para acessar esta aplicação.');
        }
      }
    } catch (error) {
      console.error('Erro ao fazer login com Google:', error);
      alert('Erro ao fazer login com Google.');
    }
  }

  public async logar(email: string, password: string) {
    try {
      const result = await this.auth.signInWithEmailAndPassword(email, password);
      const user = result.user;
      if (user) {
        const userRole = await this.verificarRoleUsuario(user.uid);
        if (userRole === 'user') {
          this.router.navigate(['/tabs/home']);
        } else {
          await this.auth.signOut();
          alert('Você não tem permissão para acessar esta aplicação.');
        }
      }
    } catch (error) {
      console.error('Erro ao fazer login com email e senha:', error);
      alert('Erro ao fazer login. Verifique suas credenciais.');
    }
  }

  public async logarAdmin(email: string, password: string) {
    try {
      const result = await this.auth.signInWithEmailAndPassword(email, password);
      const user = result.user;
      if (user) {
        const userRole = await this.verificarRoleUsuario(user.uid);
        if (userRole === 'admin') {
          this.router.navigate(['/tabstr/hometr']);
        } else {
          await this.auth.signOut();
          alert('Você não tem permissão para acessar esta aplicação.');
        }
      }
    } catch (error) {
      console.error('Erro ao fazer login com email e senha:', error);
      alert('Erro ao fazer login. Verifique suas credenciais.');
    }
  }

  private async verificarRoleUsuario(uid: string): Promise<string | null> {
    try {
      const userDoc = await this.afs.collection('Users').doc(uid).get().toPromise();
      if (userDoc?.exists) {
        const userData = userDoc.data() as { role: string };
        return userData?.role || null;
      }
      return null;
    } catch (error) {
      console.error('Erro ao verificar role do usuário:', error);
      return null;
    }
  }
}



/*
// AuthService.ts
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private auth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) { }

  public async logarComGoogle() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if (user) {
        const userRole = await this.verificarRoleUsuario(user.uid);
        if (userRole === 'user') {
          this.router.navigate(['/tabs/home']);
        } else {
          await auth.signOut();
          alert('Você não tem permissão para acessar esta aplicação.');
        }
      }
    } catch (error) {
      console.error('Erro ao fazer login com Google:', error);
      alert('Erro ao fazer login com Google.');
    }
  }

  public async logar(email: string, password: string) {
    try {
      const result = await this.auth.signInWithEmailAndPassword(email, password);
      const user = result.user;
      if (user) {
        const userRole = await this.verificarRoleUsuario(user.uid);
        if (userRole === 'user') {
          this.router.navigate(['/tabs/home']);
        } else {
          await this.auth.signOut();
          alert('Você não tem permissão para acessar esta aplicação.');
        }
      }
    } catch (error) {
      console.error('Erro ao fazer login com email e senha:', error);
      alert('Erro ao fazer login. Verifique suas credenciais.');
    }
  }

  public async logarAdmin(email: string, password: string) {
    try {
      const result = await this.auth.signInWithEmailAndPassword(email, password);
      const user = result.user;
      if (user) {
        const userRole = await this.verificarRoleUsuario(user.uid);
        if (userRole === 'admin') {
          this.router.navigate(['/tabstr/hometr']);
        } else {
          await this.auth.signOut();
          alert('Você não tem permissão para acessar esta aplicação.');
        }
      }
    } catch (error) {
      console.error('Erro ao fazer login com email e senha:', error);
      alert('Erro ao fazer login. Verifique suas credenciais.');
    }
  }

  private async verificarRoleUsuario(uid: string): Promise<string | null> {
    try {
      const userDoc = await this.afs.collection('Users').doc(uid).get().toPromise();
      if (userDoc?.exists) {
        const userData = userDoc.data() as { role: string };
        return userData?.role || null;
      }
      return null;
    } catch (error) {
      console.error('Erro ao verificar role do usuário:', error);
      return null;
    }
  }
}
*/