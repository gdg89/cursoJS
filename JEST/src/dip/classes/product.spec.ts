import { Product } from './product';

const createSut = (name: string, price: number) => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('Should be return something', () => {
    const sut = createSut('Mesa', 8472.9);
    expect(sut).toHaveProperty('name', 'Mesa');
    expect(sut.price).toBeCloseTo(8472.899);
  });
});
