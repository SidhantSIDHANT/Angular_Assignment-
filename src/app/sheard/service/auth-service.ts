import { Injectable } from "@angular/core";
import { ProductService } from "./product-service";
import { IsignUp } from "../model/product";
import { Router } from "@angular/router";


@Injectable({
    providedIn : 'root'
})
export class AuthService{
    isUserSignIn : boolean = false;

    constructor(private _productService : ProductService,
            private router : Router
        ){}

    isAuthentication() : Promise<boolean>{
        return new Promise((resolve,rejects)=>{
            if(this.isUserSignIn){
                resolve(this.isUserSignIn)
            }
        })
    }

    signUpUserStatus():void{
        this.isUserSignIn = true;
    }

    signInUser(userName : string, password : string) : void{
        this._productService.getSignUpUsers().subscribe((users : IsignUp[])=>{
            console.log(users)
            const signUpUser = users.find((item)=>{
                return item.userName === userName && item.password === password
            })
            console.log(signUpUser);
            if(signUpUser){
                localStorage.setItem('userName', JSON.stringify(userName));
                this.router.navigate(["navbar"]);
                this.isUserSignIn = true;
            }
        })
    }

    isLogOutUser() : void{

    }
}


