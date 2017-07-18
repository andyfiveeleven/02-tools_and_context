'use strict';

const fp = require('../lib/fp.js');
const expect = require('chai').expect;

describe('FP', function(){
  describe('#map',function(){
    it('should return 2 4 6 8 (who do we appreciate) and be a function', function(){
      var result = fp.map([1,2,3,4], function(n){return n*2});
      expect(fp.map).to.be.a('function');
      expect(result).to.deep.equal([2,4,6,8]);
    });
  });

  describe('#filter',function(){
    it('should return 1 2 4 and be a function', function(){
      var result = fp.filter([1,2,3,4], function(n){ return n !== 3});
      expect(fp.filter).to.be.a('function');
      expect(result).to.deep.equal([1,2,4]);
    });
  });

  describe('#reduce', function(){
    it('should return 10, and be a function', function(){
      var result = fp.reduce([1,2,3,4], function(sum, value){ return sum + value}, 0);
      expect(fp.filter).to.be.a('function');
      expect(result).to.equal(10);
    });
  });

  describe('#concat', function(){
    it('should return [1,2,3,4,5,6] and be a funky function', function(){
      var result = fp.concat([1,2,3], [4,5,6]);
      expect(fp.concat).to.be.a('function');
      expect(result).to.deep.equal([1,2,3,4,5,6]);
    });
  });

  describe('#splice', function(){
    it('should return [1,2,3,4,5], and be a funk machine', function(){
      var result = fp.splice([1,2,3, 'nick sucks', 5], 3, 1 ,4);
      expect(fp.splice).to.be.a('function');
      expect(result).to.deep.equal(['nick sucks']);//this is what is removed, i can do it the other way too
    });
  });
});
