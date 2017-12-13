import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'


import { Cars2Service } from './cars2.service';

describe('Cars2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [Cars2Service]
    });
  });

  it('all cars', async(() => {

    const cars2Service = TestBed.get(Cars2Service);
    const http = TestBed.get(HttpTestingController);

    const expectedCars = [
      { id: 1, make: 'Ford', model: 'F-150', year: 2017 },
    ];

    let actualCars = [];

    cars2Service.all().then(cars => {
      actualCars = cars;

      expect(actualCars).toEqual(expectedCars);
    });

    http.expectOne('http://localhost:3050/cars').flush(expectedCars);

  }));




});
