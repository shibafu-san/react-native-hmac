# react-native-hmac

Provide the function that calculates the HMAC.

## Installation

```sh
npm install react-native-hmac
or
yarn add react-native-hmac
```

## Usage

```js
import { hmacSHA256 } from "react-native-hmac";

const result = await hmacSHA256(message, key);
```

Supporting algorithm: MD5, SHA1, SHA256

## License

MIT
