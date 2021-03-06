import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from '@firebase/app-compat';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class AuthFirebaseService {

  constructor(private auth: AngularFireAuth, private toastCtrl: ToastController) {}

  async presentToast( message: string) {
    const toast = await this.toastCtrl.create({
    message,
    duration: 2000
    });
    toast.present();
  }

  async login(email: string, password: string) {
    try {
      return await this.auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert('No se ha podido realizar esta operación');
      console.log('No se ha podido realizar esta operación. Error: ' + error);
      return null;
    }
  }

  async loginGoogle() {
    try {
      return await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch (error) {
      alert('No se ha podido realizar esta operación con Google. Error: ' + error);
      console.log('No se ha podido realizar esta operación con Google. Error: ' + error);
      return null;
    }
  }

  async registro(email: string, password: string) {
    try {
      return await this.auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      alert('No se ha podido realizar el registro de usuario.');
      console.log('No se ha podido realizar el registro de usuario. Error: ' + error);
      return null;
    }
  }

  async logOut(){
    this.auth.signOut();
  }

  getInfoUsuarioLoggeado(){
    return this.auth.authState;
  }

  async updateUsuario(nombre: string){
    try {
      this.auth.onAuthStateChanged(user => {
        if (user != null) {
          user.updateProfile({
            displayName: nombre
          });
        }
      });
      this.presentToast('Update correctly, ' + nombre + '.');
    } catch (error) {
      this.presentToast('Failed updating new name.');
    }

  }
}
