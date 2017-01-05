import { User } from './user.interface';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

declare var firebase: any;

@Injectable()
export class AuthService{
    constructor(private router: Router){
    }

    signupUser(user: User){
        //call the Auth method on the firebase sdk 
        //on the object we get back we call createUserWithEmail..
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function(error) {
            // Handle Errors here.
            console.log(error);
            });
    }

    signinUser(user: User){
        firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function(error) {
            // Handle Errors here.
            console.log(error);
            });
    }

    isAuthenticated(){
        //check if user is logged in
        //fetch the user, uses the firebase auth object ->
        //currentuser property 
        //firebase sdk will manage the user's state for us 
        // if we are signed in, give back the signed up user
        // behind the scene, token to store the user
        var user = firebase.auth().currentUser;
        if (user) {
        // User is signed in returns true
            return true;
        } else {
        // No user is signed in returns null
            return false;
        }
    }  

    logOut(){
        //delete the user on the front-end on my local machine 
        //not on the cloud database on firebase
        firebase.auth().signOut();
        //other solution to redirect instead of routerLink, can use the router navigate method
        //this.router.navigate(['/signin']);
    }
}