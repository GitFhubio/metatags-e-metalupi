import { Component, OnInit } from '@angular/core';
import { MainService } from '../mainservice.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private authService:MainService) {  }

  ngOnInit(): void {
    this.authService.logout();
  }

}
