import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
pswd = this.formBuilder.group({
  oldpswd: ['', Validators.required],
  newpswd: ['', Validators.required],
  confirmpswd: ['', Validators.required]
});
  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
  }
  submit() {
    if (this.pswd.get('newpswd').value === this.pswd.get('confirmpswd').value) {
      this.userService.passwordData(this.pswd.value);
    }
    else {
      alert('new password or confirm password are not match');
    }
  }

}
