import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/RX';

import { AuthService } from './auth.service';

//a guard is basically a service, that will be injected in another service
//method called right before accessing a route to check if user can access
// 1 is user log in
@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private authService: AuthService){
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        return this.authService.isAuthenticated();
    }
}
