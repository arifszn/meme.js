<p align="center">
    <img src="https://user-images.githubusercontent.com/45073703/170882295-c20a51b9-67b4-414f-9b9e-7178bfc5d8c5.png" alt="meme.js" >
</p>
<p align="center">
  <b>Get memes on browser/server.</b>
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/@arifszn/meme-js">
    <img src="https://img.shields.io/npm/v/@arifszn/meme-js"/>
  </a>
  <a href="https://github.com/arifszn/meme.js/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/arifszn/meme.js"/>
  </a>
  <a href="https://github.com/arifszn/meme.js/actions/workflows/test.yml">
    <img src="https://github.com/arifszn/meme.js/actions/workflows/test.yml/badge.svg"/>
  </a>
  <a href="https://twitter.com/intent/tweet?text=JavaScript%20package%20to%20get%20memes%20on%20browser/server.&url=https://github.com/arifszn/meme-js&hashtags=javascript,opensource,js,webdev,developers">
    <img src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Farifszn%2Fmeme-js"/>
  </a>
</p>

## Description

**meme.js** is a JavaScript package to get bulk memes. Supports both browser and server.

You may be interested in also:

- [wallpaper.js](https://github.com/arifszn/wallpaper.js)
- [Reddit Image Fetcher](https://github.com/arifszn/reddit-image-fetcher)

## Installation

Install via <a href="https://www.npmjs.com/package/@arifszn/meme-js">NPM</a>.

```
npm install @arifszn/meme-js
```

Or install via <a href="https://yarnpkg.com/package/@arifszn/meme-js">Yarn</a>.

```
yarn add @arifszn/meme-js
```

You can also try it [online](https://stackblitz.com/edit/meme-js).

## Usage

### Import

```js
const { getMeme } = require('@arifszn/meme-js');
```

Or

```js
import { getMeme } from '@arifszn/meme-js';
```

### Get 1 meme

```js
getMeme().then((result) => {
  console.log(result);
});
```

### Get 20 memes

```js
getMeme({
  total: 20,
}).then((result) => {
  console.log(result);
});
```

## Options

|  Property   |  Type   | Description                      | Default |
| :---------: | :-----: | :------------------------------- | :-----: |
|   `total`   | number  | How many memes to get. Max is 20 |    1    |
| `allowNSFW` | boolean | Allow NSFW content in results    |  true   |
| `allowGIF`  | boolean | Allow GIF content in results     |  true   |

## Sample Response

```js
[
  {
    id: 'abcxyz',
    title: 'Meme title',
    postLink: 'https://redd.it/abcxyz',
    image: 'https://i.redd.it/example.jpg',
    thumbnail: 'https://a.thumbs.redditmedia.com/example.jpg',
    subreddit: 'example',
    NSFW: false,
    spoiler: false,
    createdUtc: 1644549590,
    upVotes: 464,
    upVoteRatio: 1.0,
  },
];
```

## Contribute

To contribute, see the [Contributing guide](https://github.com/arifszn/meme.js/blob/main/CONTRIBUTING.md).

## Support

<a href="https://www.buymeacoffee.com/arifszn" target="_blank">
  <img
    src="https://raw.githubusercontent.com/arifszn/arifszn/main/assets/bmc-button.png"
    alt="Buy Me A Coffee"
    height="60" 
    width="217"
  >
</a>

## License

**meme.js** is licensed under the [MIT License](https://github.com/arifszn/meme.js/blob/main/LICENSE).
