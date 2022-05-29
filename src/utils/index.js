const axios = require('axios');

/**
 * Get random number from min and max range. Min is inclusive, Max is exclusive.
 *
 * @param {number} min
 * @param {number} max
 * @return {number} random number
 */
const randomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
};

/**
 * Check if url is image url.
 *
 * @param {string} url
 * @param {boolean} allowGIF
 * @return {boolean}
 */
const isImageUrl = (url, allowGIF = true) => {
  if (allowGIF) {
    return (
      !url.includes('.gifv') &&
      (url.includes('.jpg') ||
        url.includes('.png') ||
        url.includes('.gif') ||
        url.includes('.jpeg'))
    );
  } else {
    return (
      !url.includes('.gifv') &&
      (url.includes('.jpg') || url.includes('.png') || url.includes('.jpeg'))
    );
  }
};

/**
 * Make a get request.
 *
 * @param {string} url
 * @return {import('axios').AxiosRequestHeaders}
 */
const getRequest = async (url) => {
  try {
    return axios.get(url);
  } catch (error) {
    throw Error(error);
  }
};

/**
 * Format the raw post.
 *
 * @param {object} post
 * @return {object} formatted posts
 */
const formatPost = (post) => {
  return {
    id: typeof post.id !== 'undefined' ? post.id : null,
    title: typeof post.title !== 'undefined' ? post.title : null,
    postLink:
      typeof post.id !== 'undefined' ? 'https://redd.it/' + post.id : null,
    image: typeof post.url !== 'undefined' ? post.url : null,
    thumbnail: typeof post.thumbnail !== 'undefined' ? post.thumbnail : null,
    subreddit: typeof post.subreddit !== 'undefined' ? post.subreddit : null,
    NSFW: typeof post.over_18 !== 'undefined' ? post.over_18 : null,
    spoiler: typeof post.spoiler !== 'undefined' ? post.spoiler : null,
    createdUtc:
      typeof post.created_utc !== 'undefined' ? post.created_utc : null,
    upVotes: typeof post.ups !== 'undefined' ? post.ups : null,
    upVoteRatio:
      typeof post.upvote_ratio !== 'undefined' ? post.upvote_ratio : null,
  };
};

/**
 * Shuffle an array
 *
 * @param {array} array
 * @returns {array}
 */
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

module.exports.randomNumber = randomNumber;
module.exports.isImageUrl = isImageUrl;
module.exports.getRequest = getRequest;
module.exports.formatPost = formatPost;
module.exports.shuffleArray = shuffleArray;
