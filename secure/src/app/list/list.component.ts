import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  public data: any;
  ngOnInit() {
    this.getUserData();
  }
  getUserData()
  {
    this.data = this.userService.getData();
    console.log(this.data);
  }
  signIn()
  {
   this.router.navigateByUrl('login');
  }
  signUp()
  {
    this.router.navigateByUrl('secure');
  }

}
