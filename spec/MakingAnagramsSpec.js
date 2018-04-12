describe("MakingAnagrams", function() {
  var MakingAnagrams = require('../problems/MakingAnagrams');
  var makingAnagrams;

  beforeEach(function(){
    makingAnagrams = new MakingAnagrams();
  });

  it(": test case 1", function() {
    var minChanges = makingAnagrams.main("bacdc", "dcbac")

    expect(minChanges).toEqual(0);
  });

  it(": test case 2", function() {
    var minChanges = makingAnagrams.main("bacdc", "dcbad")

    expect(minChanges).toEqual(2);
  });

  it(": test case 3", function() {
    var minChanges = makingAnagrams.main("cde", "abc")

    expect(minChanges).toEqual(4);
  });

  it(": test case 4", function() {
    var minChanges = makingAnagrams.main("fcrxzwscanmligyxyvym", "jxwtrhvujlmrpdoqbisbwhmgpmeoke")

    expect(minChanges).toEqual(30);
  });

  it(": test case 5", function() {
    var minChanges = makingAnagrams.main("imkhnpqnhlvaxlmrsskbyyrhwfvgteubrelgubvdmrdmesfxkpykprunzpustowmvhupkqsyjxmnptkcilmzcinbzjwvxshubeln", "wfnfdassvfugqjfuruwrdumdmvxpbjcxorettxmpcivurcolxmeagsdundjronoehtyaskpwumqmpgzmtdmbvsykxhblxspgnpgfzydukvizbhlwmaajuytrhxeepvmcltjmroibjsdkbqjnqjwmhsfopjvehhiuctgthrxqjaclqnyjwxxfpdueorkvaspdnywupvmy")

    expect(minChanges).toEqual(102);
  });

})
