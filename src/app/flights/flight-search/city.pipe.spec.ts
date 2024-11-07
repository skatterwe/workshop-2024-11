import { CityPipe } from './city.pipe';

describe('CityPipe', () => {
  let pipe: CityPipe;

  beforeEach(() => {
    pipe = new CityPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform short forms', () => {
    expect(pipe.transform('Berlin')).toEqual('BER');
    expect(pipe.transform('Wien')).toEqual('VIE');
  });
});
