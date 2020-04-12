import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  selectedUsers: any = [];
  constructor(private userService: UserService, private router: Router) { }
  public data: any = [];
  public change;
 isSelect: boolean = false;
 selectedIndex = [];
  ngOnInit() {
    this.getUserData();
    this.getSelectUsers();
    this.getSelectIndex();
  }
  getUserData() {
    this.data = this.userService.getData();
  }
  signIn() {
    this.router.navigateByUrl('login');
  }
  signUp() {
    this.router.navigateByUrl('secure');
  }
  delete(index) {
    this.userService.deleteData(index);
  }
  edit(index) {
    this.userService.editData(index);
    this.router.navigate(['/edit', index]);
  }
  selectUsers( index) {
     // this.selectedIndex.push(index);
      const a = this.selectedUsers.findIndex(res =>
         (res.phone === this.data[index].phone));
      if ( a === -1) {
      this.userService.pushSelectUsers(index);
     // this.userService.pushSelectIndex(index);
     // this.change = 'green';
      this.isSelect = true;
    }
      else {
      this.selectedUsers.splice(a, 1);
      this.selectedIndex.splice(a, 1);
      // this.change = 'red';
      this.isSelect = false;
    }
  }
  getSelectUsers() {
    this.selectedUsers = this.userService.getSelectUsers();
    console.log('select=' + this.selectedUsers);
  }
  getSelectIndex() {
    this.selectedIndex = Array(this.userService.getSelectIndex());
    console.log(this.selectedIndex);
  }
}