export type TimeComponents<T = number> = {
  days: T;
  hours: T;
  minutes: T;
  seconds: T;
  milliseconds: T;
  microseconds: T;
  nanoseconds: T;
};

const toZeroIfInfinity = value => Number.isFinite(value) ? value : 0;

function parseNumber(milliseconds: number): TimeComponents<number> {
  return {
    days: Math.trunc(milliseconds / 86_400_000),
    hours: Math.trunc(milliseconds / 3_600_000 % 24),
    minutes: Math.trunc(milliseconds / 60_000 % 60),
    seconds: Math.trunc(milliseconds / 1000 % 60),
    milliseconds: Math.trunc(milliseconds % 1000),
    microseconds: Math.trunc(toZeroIfInfinity(milliseconds * 1000) % 1000),
    nanoseconds: Math.trunc(toZeroIfInfinity(milliseconds * 1e6) % 1000),
  };
}

/**
 Parse milliseconds into an object.

 @example
 ```
 import parseMilliseconds from 'parse-ms';

 parseMilliseconds(1337000001);
 // {
 //  days: 15,
 //  hours: 11,
 //  minutes: 23,
 //  seconds: 20,
 //  milliseconds: 1,
 //  microseconds: 0,
 //  nanoseconds: 0
 // }
 ```
 */

export function parseMilliseconds<T = number>(milliseconds: T): TimeComponents<T> {
  switch (typeof milliseconds) {
    case 'number': {
      if (Number.isFinite(milliseconds)) {
        return parseNumber(milliseconds) as TimeComponents<T>;
      }
      break;
    }
  // No default
  }

  throw new TypeError('Expected a finite number');
}
