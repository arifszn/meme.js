const { getMeme } = require('../src/index');

describe('getMeme function', () => {
  it('should be defined', () => {
    expect(getMeme).toBeDefined();
  });

  it('should return array', async () => {
    const result = await getMeme();

    expect(Array.isArray(result)).toBe(true);
  });

  it('should return array containing 1 object', async () => {
    const result = await getMeme();

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(1);
    expect(typeof result[0]).toBe('object');
  });

  it('should return array containing 10 objects', async () => {
    const result = await getMeme({ total: 10 });

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(10);
    result.forEach((element) => {
      expect(typeof element).toBe('object');
    });
  });
});
