import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { MainService } from './mainservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(public mservice:MainService,public router:Router) {
 }

canActivate(route: ActivatedRouteSnapshot): any {

  if (route.data.roles != this.mservice.current('role')) {
    this.router.navigate(['/admin']);
    return false;
  }
  return true;
}
}
