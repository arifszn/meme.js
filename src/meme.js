const { subreddit, searchType } = require('./lib/subreddit');
const {
  randomNumber,
  getRequest,
  isImageUrl,
  formatPost,
  shuffleArray,
} = require('./utils');

const maxRetry = 50;
const postLimit = 75;

/**
 * Get n random meme where n = total.
 *
 * @param {object} obj
 * @param {number} obj.total
 * @param {number} obj.retryCounter
 * @param {array} obj.fetchedMeme
 * @param {boolean} obj.allowGIF
 * @param {boolean} obj.allowNSFW
 * @returns {array}
 */
const getRandomMeme = async ({
  total,
  retryCounter = 0,
  fetchedMeme = [],
  allowGIF,
  allowNSFW,
}) => {
  // check retry limit
  retryCounter++;

  if (retryCounter == maxRetry) {
    throw Error('Maximum retry limit exceeded');
  }

  let response;

  try {
    let rand = randomNumber(0, subreddit.length);

    response = await getRequest(
      'https://api.reddit.com/r/' +
        subreddit[rand] +
        '/' +
        getRandomSearchType() +
        '?limit=' +
        postLimit
    );
  } catch (error) {
    // retry if error occurs
    return await getRandomMeme({
      total: total,
      retryCounter: retryCounter,
      fetchedMeme: fetchedMeme,
      allowNSFW: allowNSFW,
      allowGIF: allowGIF,
    });
  }

  response.data.data.children.forEach((rawPost) => {
    if (
      typeof rawPost.data !== 'undefined' &&
      typeof rawPost.data.url !== 'undefined' &&
      isImageUrl(rawPost.data.url, allowGIF) &&
      (!allowNSFW ? !rawPost.data.over_18 : true) &&
      !isDuplicate(fetchedMeme, rawPost)
    ) {
      fetchedMeme.push(formatPost(rawPost.data));
    }
  });

  // if total is not satisfied, retry with already fetched data
  if (fetchedMeme.length < total)
    fetchedMeme = await getRandomMeme({
      total: total,
      retryCounter: retryCounter,
      fetchedMeme: fetchedMeme,
      allowNSFW: allowNSFW,
      allowGIF: allowGIF,
    });

  return shuffleArray(fetchedMeme).slice(0, total);
};

const getRandomSearchType = () => {
  let index = randomNumber(0, searchType.length);

  return searchType[index];
};

const isDuplicate = (fetchedMeme, meme) => {
  return fetchedMeme.filter((item) => item.id === meme.id).length
    ? true
    : false;
};

module.exports.getRandomMeme = getRandomMeme;
