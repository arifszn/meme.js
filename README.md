<p align="center">
    <img src="https://user-images.githubusercontent.com/45073703/170882295-c20a51b9-67b4-414f-9b9e-7178bfc5d8c5.png" alt="Meme.js" >
</p>
<p align="center">
  <b>Get random memes on the browser/server.</b>
</p>
<p align="center">
  <a href="https://github.com/arifszn/meme.js/actions/workflows/test.yml">
    <img src="https://github.com/arifszn/meme.js/actions/workflows/test.yml/badge.svg"/>
  </a>
</p>

## Description

**meme.js** is a JavaScript package to fetch bulk memes. Supports both browser and server.

## Installation

Install via <a href="https://www.npmjs.com/package/@arifszn/meme-js">NPM</a>

```
npm install @arifszn/meme-js
```

Install via <a href="https://yarnpkg.com/package/@arifszn/meme-js">Yarn</a>

```
yarn add @arifszn/meme-js
```

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

| Property  |  Type   | Description                      |      Default      |
| :-------- | :-----: | :------------------------------- | :---------------: |
| total     | number  | How many memes to get. Max is 20 |  <code>1</code>   |
| allowNSFW | boolean | Allow NSFW content in results    | <code>true</code> |
| allowGIF  | boolean | Allow GIF content in results     | <code>true</code> |

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
    upvotes: 464,
    upvoteRatio: 1.0,
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
