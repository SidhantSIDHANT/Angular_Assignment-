import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth-service";


@Injectable({
    providedIn : 'root'
})
export class AuthGurdService implements CanActivate{
    constructor(private authService : AuthService){}

    canActivate(route : ActivatedRouteSnapshot,
            state : RouterStateSnapshot
        ) : Observable<boolean> | Promise<boolean> | boolean  {
         
            return this.authService.isAuthentication().then((signIn)=>{
               if(signIn){
                return true;
               }else{
                return false
               }
            })
    }
}