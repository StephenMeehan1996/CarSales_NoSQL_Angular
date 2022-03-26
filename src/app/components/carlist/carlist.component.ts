import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { CarApiService } from 'src/app/services/car-api.service';
import { ICar, Car } from 'src/app/interfaces/car';



@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css'],
  providers: [CarApiService]
})
export class CarlistComponent implements OnInit {

  carsData!: ICar[];





  constructor(private _carAPIService: CarApiService) { 
 
  }

  ngOnInit(): void {
    this._carAPIService.getCarData().subscribe(carsData =>
      {this.carsData = carsData});
  }

  addTheCar(make:string, model:string,year:string,imageURL:string): boolean{
    let tempCar: ICar;
    tempCar = new Car(make, model,year,imageURL);
    this._carAPIService.addCar(tempCar);
    return false; // check to see what happens when removed . Refresh? 
  }
  isShown: boolean = true ;

  toggleShow() {

    this.isShown = ! this.isShown;
    
    }

}
