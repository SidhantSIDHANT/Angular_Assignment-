import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Iproduct } from "../model/product";


@Injectable({
    providedIn : "root"
})
export class DataService{
    products : Subject<any> = new Subject<any>()

    sendToSubscriber(data : any){
        this.products.next(data)
    }

    getProducts() : Observable<any>{
        return this.products.asObservable()
    }
}