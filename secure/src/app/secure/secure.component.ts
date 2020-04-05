import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {
data: any = [];
  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService) { }
  secure = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    cnfrm: ['', Validators.required],
   phone: ['', [Validators.required]]
  })
  ngOnInit() {
  this.data = this.userService.getData(); 
  }
  sign()
  {
this.router.navigateByUrl('login');
  }
  submit() {
    if ((this.secure.get('password').value === this.secure.get('cnfrm').value) ) {
        this.userService.sendUserData(this.secure.value);
        
   }
    else {
     alert('password or confirm password are not match');
   }
  }
  reset()
  {
    this.secure.reset();
  }
  list()
  {
    this.router.navigateByUrl('list');
  }

}
