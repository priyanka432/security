import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
userData = [];
  constructor() { }
  sendUserData(userData)
  {
    this.userData.push(userData);
  }
  getData()
  {
    return this.userData;
  }
}
