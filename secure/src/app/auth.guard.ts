import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  userData = [];
  constructor(private userService: UserService, private router: Router) {}
  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot
  ): boolean {
    this.userData = this.userService.getData();
    const a = this.userData.find(res => (res));
    if (a) {
      return true;
    }
    else {
      this.router.navigateByUrl('login');
    }
  }
}
