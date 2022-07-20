const infer = require('./../src/breach-infer');
const {expect} = require('chai');

it('infers a value lower than the minimum as TOO_LOW ', () => {
  expect(infer.inferBreach(20, 50, 100)).equals('TOO_LOW');
  expect(infer.inferBreach(0, 50, 100)).equals('TOO_LOW');
  expect(infer.inferBreach(-1, 50, 100)).equals('TOO_LOW');
});

it('infers a value not lower than the minimum nor higher than maximum as NORMAL ', () => {
  expect(infer.inferBreach(99.5, 50, 100)).equals('NORMAL');
  expect(infer.inferBreach(50, 50, 100)).equals('NORMAL');
  expect(infer.inferBreach(50.1, 50, 100)).equals('NORMAL');
});

it('infers a value higher than the maximum as TOO_HIGH ', () => {
  expect(infer.inferBreach(105, 50, 100)).equals('TOO_HIGH');
  expect(infer.inferBreach(100.1, 50, 100)).equals('TOO_HIGH');
  expect(infer.inferBreach(200, 50, 100)).equals('TOO_HIGH');
});
