import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { MainService } from './mainservice.service';
import { Book } from './models/book.model';

@Injectable({
  providedIn: 'root'
})
export class RolesService implements CanActivate {

  constructor(public mservice:MainService,public router:Router) {


}

  canActivate(route: ActivatedRouteSnapshot): any {
   if (route.data.roles == this.mservice.current('role')){
     if (this.mservice.current('id') ==route.params.idU) {
      return true;
}
} else{
  this.router.navigate(['/admin']);
  return false;
}

}
}
