import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/mainservice.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {
users:User[]=[];
  constructor( public mservice:MainService) {
    this.mservice.getUsers()
      .subscribe(res => {
        this.users = res;
        console.log(this.users);
      });
   }
  //  getUser(): any {
  //  return this.mservice.getUsers()
  // .subscribe(res => {
  //   this.users = res;
  //   console.log(this.users);
  // });
  // }
    ngOnInit(): void {
      // this.getUser();
    }

}
