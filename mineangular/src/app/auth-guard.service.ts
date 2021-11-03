import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { MainService } from './mainservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public mservice:MainService,public router:Router) {

}

canActivate(route: ActivatedRouteSnapshot): any {
  if (route.data.roles != this.mservice.role) {
    return false;
  }
  return true;
}
}
