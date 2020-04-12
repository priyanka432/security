import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData = [];
  profileData = [];
  selectUser = [];
  pushSelectIndex = [];
  constructor(private router: Router) { }
  sendUserData(userData, index?) {
    const a = this.userData.find(res => (res.email === userData.email))
    const p = this.userData.find(res => (res.phone === userData.phone))
    if (index === undefined) {
      if (a) {
        alert('this email id is already exist');
      }
      else if (p) {
        alert('this Phone Number is already exist');
      }
      else {
        this.userData.push(userData);
        this.router.navigateByUrl('login');
      }
    }
    else {
      this.userData[index] = userData;
    }
  }
  getData() {
    return this.userData;
  }
  getProfileData() {
    return this.profileData;
  }
  deleteData(index) {
    this.userData.splice(index, 1);
  }
  login(userData) {
    this.profileData.splice(0);
    const a = this.userData.find(res => (res.email === userData.email))
    this.profileData.push(a);
    if (a) {
      this.router.navigateByUrl('dashboard');
    }
    else {
      alert('this email Id doesn not exist');
    }
  }
  passwordData(userData) {
    const pswd = this.profileData.find(res => (res.password === userData.oldpswd));
    const a = this.userData.findIndex(res => (res.password === userData.oldpswd));
    if (a !== -1) {
      pswd.password = userData.newpswd;
    }
  }
  editData(index) {
    return this.userData[index];
  }
  findIndex(index) {
    return index;
  }
  pushSelectUsers( index) {
    this.selectUser.push(this.userData[index]);
    this.pushSelectIndex.push(index);
  }
  getSelectUsers() {
    return this.selectUser;
  }
  deleteSelectUser(index) {
    this.userData.splice(index, 1);
  }
  getSelectIndex() {
    return this.pushSelectIndex;
  }
}
