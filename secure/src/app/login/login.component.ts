import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
datas = [];
  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService ) { }
login = this.formBuilder.group({
  email: ['', Validators.required]
})
  ngOnInit() {
  }
  secure()
  {
    this.router.navigateByUrl('secure');
  }
  signIn()
  {
    this.userService.login(this.login.value);
  }

}
