import { toCityName } from './city.transformer';

describe('CityTransformer', () => {
  describe('toCityName', () => {
    it('should transform berlin short form', () => {
      expect(toCityName('Berlin')).toEqual('BER');
    });
    it('should transform wien short form', () => {
      expect(toCityName('Wien')).toEqual('VIE');
    });
    it('should transform berlin long form', () => {
      expect(toCityName('Berlin', 'LONG')).toEqual('FOO Berlin Brandenburg Willy Brandt');
    });
    it('should transform wien long form', () => {
      expect(toCityName('Wien', 'LONG')).toEqual('Flughafen Wien Schwechat');
    });

    it('should transform short forms', () => {
      expect(toCityName('Berlin')).toEqual('BER');
      expect(toCityName('Wien')).toEqual('VIE');
    });
  });
});
