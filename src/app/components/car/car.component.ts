import { compileDeclareClassMetadata } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ICar, Car } from 'src/app/interfaces/car';
import { CarApiService } from 'src/app/services/car-api.service';
import { CarlistComponent } from '../carlist/carlist.component';

// add are you sure for delete and edit

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers: [CarApiService]
})
export class CarComponent implements OnInit {

  @Input() carsData!:ICar;

  carImageWidth: number = 300;

  constructor(private _carAPIService: CarApiService) { 
    
  }

  ngOnInit(): void {
    console.log('From car:::' + this.carsData);
     

  }

  deleteCar(carDataID? : string): void{

    this._carAPIService.delCarData(carDataID);
  }
  editCar(make:string, model:string,year:string,imageURL:string, carDataID?: string): void{
    let tempCar: ICar;
    tempCar = new Car(make, model,year,imageURL);
    this._carAPIService.editCarData(tempCar,carDataID, );
    this.carsData.id
  }

  isShown: boolean = false;

  toggleShow() {

    this.isShown = ! this.isShown;
    
    }

}


