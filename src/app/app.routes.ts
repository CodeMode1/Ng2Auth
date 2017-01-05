import { Routes, RouterModule, RouterConfig } from '@angular/router';
import { SignupComponent } from './unprotected/signup.component';
import { SigninComponent } from './unprotected/signin.component';
import { ProtectedComponent } from './protected/protected.component';

// the guard can be attached to any Routes
//in this case if the user is signed in, he can access the protected route 
//be careful not to add this guard to a sign up / sign in path because 
// it wouldnt make sense to block a sign up or a sign in if the user is not logged in...
import { AuthGuard } from './shared/auth.guard';

const APP_ROUTES : RouterConfig = [
    { path:'' , redirectTo: '/signup', pathMatch: 'full'},
    { path: 'signup', component: SignupComponent},
    { path: 'signin', component: SigninComponent},
    //the guard is applied to the protected route so that unlogged users cant access it 
    { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard]}
];

export const routing = RouterModule.forRoot(APP_ROUTES);