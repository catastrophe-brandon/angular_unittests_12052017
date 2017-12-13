import { MyUpperCasePipe } from './my-upper-case.pipe';

describe('MyUpperCasePipe', () => {

  let pipe: MyUpperCasePipe;

  beforeEach(() => {
    pipe = new MyUpperCasePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('will make the text uppercase', () => {
    const expectedValue = 'HELLO';
    const actualValue = pipe.transform('hello');
    expect(actualValue).toEqual(expectedValue);
  });

});
