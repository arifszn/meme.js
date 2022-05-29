// Type definitions for meme.js
// Project https://github.com/arifszn/meme.js
// Author: Ariful Alam

interface options {
  /**
   * How many images to get
   *
   * Default: 1
   *
   * Max: 50
   */
  total?: number;

  /**
   * Allow NSFW results
   *
   * Default: true
   */
  allowNSFW?: boolean;

  /**
   * Allow GIF results
   *
   * Default: true
   */
  allowGIF?: boolean;
}

/**
 * Get most recent dev posts
 */
declare function getMeme(options: options): Promise<any>;

export { getMeme };
