'use strict';

let expect = require('expect.js')
let str = require('./');

describe('str-iterator', function(){
  it('works for non-empty string', function(){
    let iter = str("hi");

    expect(iter.next().value).to.be("h");
    expect(iter.next().value).to.be("i");
    expect(iter.next().done).to.be(true);
  });

  it('works for empty strings', function(){
    let iter = str("");
    expect(iter.next().done).to.be(true);
  });
});
