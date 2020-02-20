import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Route, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AdminGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if(this.authService.isAdministrator()) {
            console.log('admin');
            return true;
        }
        console.log('not admin');
        this.router.navigate([''])
        return false;
    }

}