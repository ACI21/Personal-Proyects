import { Component, OnInit } from '@angular/core';
import { AuthFirebaseService } from './services/firebase/auth-firebase.service';
import { PhotoService } from './services/photo/photo.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Search', url: '/home', icon: 'home'},
    { title: 'Series', url: '/series', icon: 'tv' },
    { title: 'Comics', url: '/comics', icon: 'book' },
    { title: 'Characters', url: '/characters', icon: 'accessibility' },
    { title: 'Events', url: '/events', icon: 'calendar' },
    { title: 'Stories', url: '/stories', icon: 'tablet-portrait' },
    { title: 'Creators', url: '/creators', icon: 'create' },
  ];

  public appOutLog = [
    { title: 'Login', url: '/login', icon: 'log-in'},
    { title: 'Registration', url: '/registration', icon: 'person-add'}
  ];

  public appInLog = [
    { title: 'Profile', url: '/profile', icon: 'person'},
    { title: 'Logout', url: '/logout', icon: 'log-out'}
  ];

  public logueado: boolean;
  public user: any;
  public uid = 'Invitado';
  public userName = 'Unkown';
  public userName2 = 'Unkown';
  public userName3: string[] = [];
  public userPhoto = 'Unkown';

  constructor(private auth: AuthFirebaseService, public picture: PhotoService) {
    this.logueado = false;
  }

  ngOnInit(): void {
    this.usuarioLogueado();
  }

  usuarioLogueado() {
    this.auth.getInfoUsuarioLoggeado().subscribe((res) => {
      if (res != null) {
        this.logueado = true;
        this.user = res;
        this.uid = res.uid;
        this.userName = res.displayName;
        if(!res.displayName){
          this.userName3 = res.email.split('@');
          this.userName2 = this.userName3[0];
        }
        this.userPhoto = res.photoURL;
        this.picture.getUserPhoto(this.uid);
      } else {
        this.logueado = false;
      }
    });
  }
}
