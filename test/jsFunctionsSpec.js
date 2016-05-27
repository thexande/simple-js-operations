var expect = require("chai").expect //jshint ignore:line
var methods = require("../script");

describe("#stringToArray", function(){
  it("converts a string to an array based on spaces", function(){
    expect(methods.stringToArray("quick brown fox")).to.eql(["quick", "brown", "fox"]);
  });
});

describe("#swapInPlace", function(arr,a,b){
  it("swaps elements in place", function(){
    expect(methods.swapInPlace(["quick", "brown", "fox", "jumps"], 1,3))
    .to.eql(["quick", "jumps", "fox", "brown"]);
  });
});

describe("#arrayToString", function(){
  xit("converts an Array to a string", function(){
    expect(methods.arrayToString(["wash", "rinse", "repeat"]).to.equal("wash, rinse, repeat"));
  });
});

describe("#keys", function(){
  it("returns an array of the keys in an object", function(){
    expect(methods.keys({tom:"mechanic", chris:"lawyer"})).to.include("tom", "chris");
  });
  it("returns an empty array if there are no keys", function(){
    expect(methods.keys({})).to.eql([]);
  });
});
