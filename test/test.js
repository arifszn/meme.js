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

  it('should contain properties', async () => {
    const result = await getMeme();

    expect(result[0]).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        title: expect.any(String),
        postLink: expect.any(String),
        image: expect.any(String),
        thumbnail: expect.any(String),
        subreddit: expect.any(String),
        NSFW: expect.any(Boolean),
        spoiler: expect.any(Boolean),
        createdUtc: expect.any(Number),
        upVotes: expect.any(Number),
        upVoteRatio: expect.any(Number),
      })
    );
  });

  it('should not contain NSFW result', async () => {
    const result = await getMeme({ total: 20, allowNSFW: false });

    result.forEach((element) => {
      expect(element).toEqual(
        expect.objectContaining({
          NSFW: false,
        })
      );
    });
  });

  it('should not contain GIF result', async () => {
    const result = await getMeme({ total: 20, allowGIF: false });

    result.forEach((element) => {
      expect(element).toMatchObject({
        image: expect.not.stringContaining('.gif'),
      });
    });
  });

  it('should return empty array for invalid total', async () => {
    const result = await getMeme({ total: 0 });

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(0);
  });

  it('should return empty array for total more than max', async () => {
    const totalMax = 20;
    const result = await getMeme({ total: totalMax + 1 });

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(0);
  });
});
