import { Car } from './car';

describe('Car', () => {

  let car: Car;

  beforeEach(() => {
    car = new Car('Ford', 'F-150', 2017);
  });

  it('instantiates', () => {
    expect(car).toBeTruthy();
  });

  it('get car info', () => {
    expect(car.getCarInfo()).toEqual('2017 Ford F-150');
  });

  it('user retrieve the make and model', () => {
    expect(car.getMakeModel()).toEqual('Ford F-150');
  });


});
