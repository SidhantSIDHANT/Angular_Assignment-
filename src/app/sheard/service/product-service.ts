import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Iproduct, IsignUp } from "../model/product";
import { Observable } from "rxjs";


@Injectable({
    providedIn : "root"
})
export class ProductService{
    api : string = `http://localhost:3000/posts`;
    signUpapi : string = 'http://localhost:3000/signUpUsers';

    constructor(private _http : HttpClient){}

    getProducts() : Observable<Iproduct[]>{
        return this._http.get<Iproduct[]>(this.api)
    }

    addUser(user : any) : Observable<IsignUp>{
       return this._http.post<IsignUp>(this.signUpapi, user)
    }

    getSignUpUsers():Observable<IsignUp[]>{
        return this._http.get<IsignUp[]>(this.signUpapi);
    }

}