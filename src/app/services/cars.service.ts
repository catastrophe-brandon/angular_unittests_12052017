import { Injectable } from '@angular/core';

import { Car } from '../models/car';


@Injectable()
export class CarsService {

  private cars: Car[] = [];

  constructor() { }

  all() {
    return this.cars;
  }

  append(car: Car) {
    this.cars = this.cars.concat({ ...car } as Car);
    // this.cars = this.cars.concat(car);
  }

}
