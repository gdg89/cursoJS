import { IndividualCustomers, EnterpriseCustomers } from './customers';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomers => {
  return new IndividualCustomers(firstName, lastName, cpf);
};

const createEnterpriseCustomers = (
  name: string,
  cnpj: string,
): EnterpriseCustomers => {
  return new EnterpriseCustomers(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomers', () => {
  it('Should have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer('Teo', 'Bring', '80132148976');
    expect(sut).toHaveProperty('firstName', 'Teo');
    expect(sut).toHaveProperty('lastName', 'Bring');
    expect(sut).toHaveProperty('cpf', '80132148976');
  });

  it('Should have methods to get name and idn', () => {
    const sut = createIndividualCustomer('Teo', 'Bring', '80132148976');
    expect(sut.getName()).toBe('Teo Bring');
    expect(sut.getIDN()).toBe('80132148976');
  });
});

describe('EnterpriseCustormers', () => {
  it('Should have name and cnpj', () => {
    const sut = createEnterpriseCustomers('Panda Store', '1111.15151.65-8');
    expect(sut).toHaveProperty('name', 'Panda Store');
    expect(sut).toHaveProperty('cnpj', '1111.15151.65-8');
  });

  it('Should have methods to get name and idn', () => {
    const sut = createEnterpriseCustomers('Panda Store', '1111.15151.65-8');
    expect(sut.getName()).toBe('Panda Store');
    expect(sut.getIDN()).toBe('1111.15151.65-8');
  });
});
