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

  constructor(private router: Router,private formBuilder: FormBuilder, private userService: UserService) { }
  secure = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    cnfrm: ['', Validators.required]
  })
  ngOnInit() {
    this.submit();
  }
  sign()
  {
this.router.navigateByUrl('login');
  }
  submit() {
    if ((this.secure.get('password').value === this.secure.get('cnfrm').value) ) {
        this.userService.sendUserData(this.secure.value);
        //this.router.navigateByUrl('login')
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
