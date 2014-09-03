var _ = require('lodash');
var test = require('tap').test;
var emoticons = require('../emoticons');

var tags = [ 'angry',
  'animal',
  'apologizing',
  'bear',
  'bird',
  'cat',
  'confused',
  'crazy',
  'crying',
  'dancing',
  'dead',
  'dog',
  'embarassed',
  'evil',
  'excited',
  'fun',
  'happy',
  'hiding',
  'hugging',
  'hurt',
  'kissing',
  'laughing',
  'love',
  'monkey',
  'music',
  'pig',
  'rabbit',
  'running',
  'sad',
  'scared',
  'sea creature',
  'sleeping',
  'smug',
  'stare',
  'surprised',
  'surrender',
  'table flip',
  'thinking',
  'troll',
  'waving',
  'whatever',
  'winking',
  'worried',
  'writing'
];

test('it is parseable JSON', function(t) {
  t.plan(1);
  t.type(emoticons, 'object');
});

test('expected indexes', function(t) {
  var keys = Object.keys(emoticons);
  t.plan(2);
  t.notEqual(keys.indexOf('emoticons'), -1);
  t.notEqual(keys.indexOf('tags'), -1);
});

test('expected tags', function(t) {
  var tags = _.map(emoticons.tags, 'title');
  t.plan(tags.length + 1);
  t.equal(emoticons.tags.length, tags.length);
  tags.forEach(function (tag) {
    t.notEqual(tags.indexOf(tag), -1);
  });
});
