import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { AuthGuardService } from 'src/app/auth-guard.service';
import { MainService } from 'src/app/mainservice.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent implements OnInit {

  constructor(public mservice:MainService) { }

  ngOnInit(): void {
  }

}
