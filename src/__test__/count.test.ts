import Count from '../utils/count';

describe('Func Count', () => {
  it('Should equal 10 if a = 2 and b = 8', () => {
    const count = Count(2, 8);
    expect(count).toBe(8);
  });
});
