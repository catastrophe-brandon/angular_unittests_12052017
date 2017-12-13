import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Car } from '../models/car';

@Injectable()
export class Cars2Service {

  private baseUrl = 'http://localhost:3050/cars';

  private cars: Car[] = [];

  constructor(private httpClient: HttpClient) { }

  public all = () => this.httpClient.get(this.baseUrl).toPromise();
}
