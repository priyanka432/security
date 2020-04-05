import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
userData = [];
profileData = [];
  constructor(private router: Router) { }
  sendUserData(userData) {
    const a = this.userData.find(res => (res.email === userData.email ))
    const p = this.userData.find(res => ( res.phone === userData.phone))
    if (a ) {
      alert('this email id is already exist');
   }
  else if (p ) {
    alert('this Phone Number is already exist');
 }
  else {
    this.userData.push(userData);
    this.router.navigateByUrl('login');
   }
  }
  getData() {
    return this.userData;
  }
  getProfileData()
  {
    return this.profileData;
  }
  deleteData(index) {
    this.userData.splice(index, 1);
  }
  login(userData)
  {
  this.profileData.splice(0);
  const a = this.userData.find(res => (res.email === userData.email))
  this.profileData.push(a);
  if (a) {
    this.router.navigateByUrl('dashboard');
  }
  else{
    alert('this email Id doesn not exist');
  }
}
passwordData(userData) {
  const pswd = this.userData.find(res => (res.password === userData.oldpswd));
  const a = this.userData.findIndex(res => (res.password === userData.oldpswd));
  if (a !== -1) {
    pswd.password = userData.newpswd;
  }
}
}
