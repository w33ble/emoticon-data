var test = require('tap').test;
var emoticons = require('../emoticons');
var emoticonCount = 1562;

var tags = [ 'angry',
  'animal',
  'sorry',
  'bear',
  'bird',
  'cat',
  'confused',
  'crazy',
  'cry',
  'dance',
  'dead',
  'dog',
  'embarassed',
  'evil',
  'excited',
  'fun',
  'happy',
  'hide',
  'hug',
  'hurt',
  'kiss',
  'laugh',
  'love',
  'monkey',
  'music',
  'pig',
  'rabbit',
  'run',
  'sad',
  'scared',
  'sea creature',
  'sleep',
  'smug',
  'stare',
  'surprised',
  'surrender',
  'table flip',
  'think',
  'troll',
  'wave',
  'whatever',
  'wink',
  'worried',
  'write'
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
  t.plan(tags.length + 1);
  t.equal(emoticons.tags.length, tags.length, 'Tag count should be ' + tags.length);
  emoticons.tags.forEach(function (tag) {
    t.notEqual(tags.indexOf(tag.title), -1, 'Found an unexpected tag: ' + tag.title);
  });
});

test('expected emojicons', function(t) {
  t.plan(1);
  t.equal(emoticons.emoticons.length, emoticonCount, 'Emoticon count should be ' + emoticonCount);
});

test('emoticon tag list', function (t) {
  var tagList = [];
  t.plan(tags.length + 1);

  emoticons.emoticons.forEach(function (emoticon) {
    var dataTags = emoticon.tags;
    dataTags.forEach(function (dataTag) {
      if (tagList.indexOf(dataTag) === -1) {
        tagList.push(dataTag);
      }
    });
  });

  t.equal(tagList.length, tags.length, 'Tag count should be ' + tags.length);

  tags.forEach(function (tag) {
    t.notEqual(tagList.indexOf(tag), -1, 'Tag does not have any emoticons: ' + tag);
  });
});
