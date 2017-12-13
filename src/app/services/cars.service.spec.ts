import { TestBed, inject } from '@angular/core/testing';

import { Car } from '../models/car';
import { CarsService } from './cars.service';

describe('CarsService', () => {

  let carsService: CarsService = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarsService]
    });
  });

  beforeEach(inject([CarsService], (service: CarsService) => {
    carsService = service;
  }));

  it('will be created', () => {
    expect(carsService).toBeTruthy();
  });

  it('will get all of the cars', () => {

    carsService.append(new Car('Ford', 'F-150', 2017));
    carsService.append(new Car('Chevrolet', 'Volt', 2016));

    const expectedCarsCount = 2;

    const actualCarsCount = carsService.all().length;

    expect(actualCarsCount).toEqual(expectedCarsCount);
  });

  it('will append a car', () => {

    const expectedCar = new Car('Ford', 'F-150', 2017);

    carsService.append(expectedCar);

    const actualCar = carsService.all()[0];

    expect(actualCar).toEqual(expectedCar);

  });


});
