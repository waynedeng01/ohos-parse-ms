# parse-ms

> Parse milliseconds into an object
> 
> 零依赖，超轻量 
> 
> ts友好，智能提示助你一把梭

## Install

```sh
npm install parse-ms
```

## Usage

```ts
import { type TimeComponents, parseMilliseconds } from "parse-ms"

parseMilliseconds(1337000001);
/*
{
	days: 15,
	hours: 11,
	minutes: 23,
	seconds: 20,
	milliseconds: 1,
	microseconds: 0,
	nanoseconds: 0
}
*/
```

## Related

- [to-milliseconds](https://github.com/sindresorhus/to-milliseconds) - The inverse of this module
- [pretty-ms](https://github.com/sindresorhus/pretty-ms) - Convert milliseconds to a human readable string
