import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faGithub,faFacebook, faTwitter,faLinkedin,faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title='mineangular';

  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faInstagram= faInstagram;
  faLinkedin= faLinkedin;
  faGithub=faGithub;
  constructor(public router:Router){
    this.router.events.subscribe((e) => {
    if(e instanceof NavigationEnd){
      window.scrollTo(0,0);
    }
    }
    )

  }}
