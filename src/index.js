const { getRandomMeme } = require('./meme');

/**
 * Get meme.
 *
 * @param {object} obj
 * @param {number} obj.total
 * @param {boolean} obj.allowNSFW
 * @param {boolean} obj.allowGIF
 * @returns {array}
 */
const getMeme = async ({
  total = 1,
  allowNSFW = true,
  allowGIF = true,
} = {}) => {
  try {
    if (total > 20) {
      throw Error('max value of total is 20');
    } else if (total < 1) {
      throw Error('min value of total is 1');
    }

    return await getRandomMeme({
      total: parseInt(total),
      allowNSFW: allowNSFW,
      allowGIF: allowGIF,
    });
  } catch (error) {
    console.error(error);
    return [];
  }
};

module.exports.getMeme = getMeme;
