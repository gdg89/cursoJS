import { Persistency } from './persistency';

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    //sut -System under test
    const sut = new Persistency();
    expect(sut.saveOrder()).toBeUndefined();
  });

  //SPY ON
  it('should call consle.log once', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log'); // mock
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call consle.log with "Your order has been saved"', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log'); // mock
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Your order has been saved');
  });
});
