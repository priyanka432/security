import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {
  data: any = [];
  index: number;
  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService,
              private activatedRoute: ActivatedRoute) { }
  secure = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    cnfrm: ['', Validators.required],
    phone: ['', [Validators.required]]
  })
  ngOnInit() {
    this.patchData();
  }
  sign() {
    this.router.navigateByUrl('login');
  }
  submit() {
    const p = this.userService.findIndex(this.index);
    if (p === undefined) {
      if ((this.secure.get('password').value === this.secure.get('cnfrm').value)) {
        this.userService.sendUserData(this.secure.value);
      }
      else {
        alert('password or confirm password are not match');
      }

    }
    else {
      this.userService.sendUserData(this.secure.value, this.index);
      this.router.navigateByUrl('list');
    }
  }
  reset() {
    this.secure.reset();
  }
  list() {
    this.router.navigateByUrl('list');
  }
  patchData() {
    this.data = this.userService.getData();
    this.activatedRoute.params.subscribe(params => {
      this.index = params['id'];
      const p = this.userService.editData(this.index);
      this.secure.patchValue(p ? p : {});
    });
  }

}
