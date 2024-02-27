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

    signUpUser(user : any) : Observable<IsignUp>{
       return this._http.post<IsignUp>(this.signUpapi, user)
    }

    addProducts(product : Iproduct) : Observable<Iproduct> {
        return this._http.post<Iproduct>(this.api, product)
    }

    editProduct(id : string, data : Iproduct) : Observable<Iproduct>{
        return this._http.patch<Iproduct>(`${this.api}/${id}`, data)
    }

    deleteProduct(id:string):Observable<Iproduct>{
        return this._http.delete<Iproduct>(`${this.api}/${id}`)
    }

    getSignUpUsers():Observable<IsignUp[]>{
        return this._http.get<IsignUp[]>(this.signUpapi);
    }

}