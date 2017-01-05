import { Component } from "@angular/core";

import { AuthService } from './auth.service';

@Component({
    selector: 'my-header',
    template: `
       
        <header>
            <nav class="navbar navbar-default">
                <div class="container-fluid">
        
                    <ul class="nav navbar-nav">
        
                        <li><a [routerLink]="['signup']">Sign Up</a></li>
                        <li><a [routerLink]="['signin']">Sign In</a></li>
                        <li><a [routerLink]="['protected']">Protected</a></li>
        
                    </ul>
                    <ul class="nav navbar-nav navbar-right" *ngIf="isAuth()">
        
                        <li><a (click)="onLogOut()" style="cursor: pointer;" [routerLink]="['']">Logout</a></li>
                    </ul>
                </div><!-- /.container-fluid -->
        
            </nav>
        
        </header>
    `
})
export class HeaderComponent {
    constructor(private authService: AuthService){
    }

    isAuth(){
        return this.authService.isAuthenticated();
    }

    // when clicking the logout, the user won't be able to access the protected route 
    // but the protected page is still displaying when logging out : 
    // the changes take effect upon refreshing the page by clicking other buttons or F5 
    // to force that redirection, a path '' forces that redirection by taking to the /signup page
    onLogOut(){
        this.authService.logOut();
    }
}
