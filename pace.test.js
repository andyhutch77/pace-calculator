import test from "node:test";
import assert from "node:assert/strict";
import { calculatePaces, formatPace, formatTime, KM_PER_MILE } from "./pace.js";

test("calculates a 25-minute 5K in both units", () => {
  const result = calculatePaces(5, "km", 0, 25, 0);
  assert.equal(formatPace(result.secondsPerKm), "5:00");
  assert.equal(formatPace(result.secondsPerMile), "8:03");
});

test("calculates a custom distance in miles", () => {
  const result = calculatePaces(10, "mi", 1, 20, 0);
  assert.equal(formatPace(result.secondsPerMile), "8:00");
  assert.equal(formatPace(result.secondsPerKm), "4:58");
  assert.equal(calculatePaces(1, "mi", 0, 10, 0).secondsPerKm, 600 / KM_PER_MILE);
});

test("uses precise standard half marathon and marathon distances", () => {
  assert.equal(formatPace(calculatePaces(21.0975, "km", 2, 0, 0).secondsPerKm), "5:41");
  assert.equal(formatPace(calculatePaces(42.195, "km", 4, 0, 0).secondsPerMile), "9:09");
});

test("rounds pace to the nearest second including minute rollover", () => {
  assert.equal(formatPace(359.6), "6:00");
  assert.equal(formatPace(300.4), "5:00");
  assert.equal(formatTime(3661), "1:01:01");
  assert.equal(formatTime(59), "0:59");
});

test("rejects invalid distance, time, and units", () => {
  for (const args of [
    [0, "km", 0, 25, 0], [-1, "km", 0, 25, 0], [NaN, "km", 0, 25, 0],
    [5, "km", 0, 0, 0], [5, "km", 0, 60, 0], [5, "km", 0, 1, 60],
    [5, "km", -1, 0, 0], [5, "km", 0, 1.5, 0], [5, "yards", 0, 25, 0],
    [Number.MIN_VALUE, "km", 0, 25, 0]
  ]) {
    assert.equal(calculatePaces(...args), null);
  }
});
