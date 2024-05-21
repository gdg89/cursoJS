import { CartItem } from './interfaces/cart-item';
import { CustomerOrderProtocol } from './interfaces/customer-protocol';
import { MessagingProtocol } from './interfaces/messagin-protocol';
import { PersistencyProtocol } from './interfaces/persistency-protocol';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
import { Order } from './order';

class ShoppingCartMock implements ShoppingCartProtocol {
  addItem(): void {}
  removeItem(): void {}
  total(): number {
    return 1;
  }
  totalWithDiscount(): number {
    return 2;
  }
  isEmpty(): boolean {
    return false;
  }
  clear(): void {}
  get items(): Readonly<CartItem>[] {
    return [];
  }
}

class MessagingMock implements MessagingProtocol {
  sendMessage(): void {}
}

class PersistenceMock implements PersistencyProtocol {
  saveOrder(): void {}
}

class CustomerMock implements CustomerOrderProtocol {
  getName(): string {
    return '';
  }
  getIDN(): string {
    return '';
  }
}

const createSut = () => {
  const shoppingCartMock = new ShoppingCartMock();
  const messaginMock = new MessagingMock();
  const persistencyMock = new PersistenceMock();
  const customerMock = new CustomerMock();

  const sut = new Order(
    shoppingCartMock,
    messaginMock,
    persistencyMock,
    customerMock,
  );

  return {
    sut,
    shoppingCartMock,
    messaginMock,
    persistencyMock,
    customerMock,
  };
};
describe('Order', () => {
  it('Should not checkout if cart is empty', () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartMockSpy = jest
      .spyOn(shoppingCartMock, 'isEmpty')
      .mockReturnValueOnce(true);
    sut.checkout();
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.status).toBe('open');
  });

  it('Should checkout if cart is not empty', () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartMockSpy = jest
      .spyOn(shoppingCartMock, 'isEmpty')
      .mockReturnValueOnce(false);
    sut.checkout();
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.status).toBe('closed');
  });

  it('Should sein an email to customer', () => {
    const { sut, messaginMock } = createSut();
    const messagingtMockSpy = jest.spyOn(messaginMock, 'sendMessage');
    sut.checkout();
    expect(messagingtMockSpy).toHaveBeenCalledTimes(1);
  });

  it('Should save order', () => {
    const { sut, persistencyMock } = createSut();
    const persistencyMockSpy = jest.spyOn(persistencyMock, 'saveOrder');
    sut.checkout();
    expect(persistencyMockSpy).toHaveBeenCalledTimes(1);
  });

  it('Should clear cart', () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartMockSpy = jest.spyOn(shoppingCartMock, 'clear');
    sut.checkout();
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
  });
});
