import { compileDeclareClassMetadata } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ICar, Car } from 'src/app/interfaces/car';
import { CarApiService } from 'src/app/services/car-api.service';



@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers: [CarApiService]
})
export class CarComponent implements OnInit {

  @Input() c !:ICar[] | undefined;
  
  carImageWidth: number = 300;

  constructor(private _carAPIService: CarApiService) { }

  ngOnInit(): void {
  }

  deleteCar(carDataID: string): void{

    this._carAPIService.delCarData(carDataID);
  }
  editCar(carDataID: string): void{
    this._carAPIService.editCarData(carDataID);
  }

  isShown: boolean = false;

  toggleShow() {

    this.isShown = ! this.isShown;
    
    }

}
