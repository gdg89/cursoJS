//import my sut - system under test
import { Messaging } from './messaging';

const createSut = () => {
  return new Messaging();
};

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks());

  it('Should return undefined', () => {
    const sut = createSut();
    expect(sut.sendMessage('Milanga')).toBeUndefined();
  });

  it('Should call console.log once', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('Greek Haunter');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('Should call console.log with "Birng it on!"', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('Bring it on!');
    expect(consoleSpy).toHaveBeenCalledWith('Bring it on!');
  });
});
