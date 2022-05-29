// Type definitions for meme.js
// Project https://github.com/arifszn/meme.js
// Author: Ariful Alam

export interface options {
  /**
   * How many memes to get.
   *
   * Default: 1
   *
   * Max: 20
   */
  total?: number;

  /**
   * Allow NSFW content in results.
   *
   * Default: true
   */
  allowNSFW?: boolean;

  /**
   * Allow GIF content in results.
   *
   * Default: true
   */
  allowGIF?: boolean;
}

/**
 * Get meme.
 */
declare function getMeme(options?: options): Promise<any>;

export { getMeme };
