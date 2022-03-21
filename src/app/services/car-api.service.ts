import { Injectable } from '@angular/core';
import{HttpClient, HttpErrorResponse} from '@angular/common/http'
import { observable } from 'rxjs';
import{catchError, tap} from 'rxjs/operators'

import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/compat/firestore';

import{ICar} from "../interfaces/car"

@Injectable({
  providedIn: 'root'
})
export class CarApiService {

  constructor() { }
}
