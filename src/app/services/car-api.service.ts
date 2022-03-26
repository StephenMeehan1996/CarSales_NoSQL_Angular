
import { Injectable } from '@angular/core';
import{HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Observable, observable } from 'rxjs';
import{catchError, tap} from 'rxjs/operators'

import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/compat/firestore';

import{ICar} from "../interfaces/car" 
import { jsonEval } from '@firebase/util';

@Injectable({
  providedIn: 'root'
})
export class CarApiService {

  carsDataCollection:AngularFirestoreCollection<ICar>;
  carsData:Observable<ICar[]> | undefined;
  allCarsData:ICar[] |undefined;
  errorMessages:string |undefined;


  constructor(private _http:HttpClient, private _afs:AngularFirestore) {

    this.carsDataCollection = _afs.collection<ICar>("carSales")
   }

   getCarData():Observable<ICar[]>{
     this.carsData = this.carsDataCollection.valueChanges( { idField:'id'});
     this.carsData.subscribe(
       data => console.log("GetCarData:" + JSON.stringify(data))
     )
     return this.carsData;
   }

   addCar(car: ICar):void{

    this.carsDataCollection.add(JSON.parse(JSON.stringify(car)));

  }

  delCarData(carID ?: string): void{
    this.carsDataCollection.doc(carID).delete();

  }

  editCarData(tempCar: ICar, carID ?: string): void{
    this.carsDataCollection.doc(carID).update({make: tempCar.make, model: tempCar.model, year: tempCar.year, imageURL: tempCar.imageURL});
    

  }

  // private handleError(err: HttpErrorResponse){

  //   console.log('carAPIService:' + err.message);
  //  // return Observable.throw(err.message);

  // }
}










