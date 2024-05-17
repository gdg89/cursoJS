describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10);
    expect(number).toEqual(10);

    expect(number).not.toBeNull();
    expect(number).toBeTruthy();
  });

  it('Each new test in a new it', () => {
    const number = 10;
    expect(number).toBeGreaterThan(9);
    expect(number).toBeGreaterThanOrEqual(9);
    expect(number).toBeLessThan(20);

    expect(number).toBeCloseTo(9.996);

    expect(number).toHaveProperty('toString');
  });
});

describe('Objects', () => {
  it('Should test jest assertions wiht jest', () => {
    const person = { name: 'Leo', age: 68 };
    const anotherPerson = { ...person };

    expect(person).toEqual(anotherPerson);
    expect(person).toHaveProperty('age');
    expect(person).toHaveProperty('age', 68);
    expect(person).not.toHaveProperty('lastname');

    expect(person.name).toBe('Leo');
  });
});
