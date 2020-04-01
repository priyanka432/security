import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder) { }
login = this.formBuilder.group({
  email: ['', Validators.required]
})
  ngOnInit() {
  }
  secure()
  {
    this.router.navigateByUrl('secure');
  }

}
