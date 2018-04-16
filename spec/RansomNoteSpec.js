describe("RansomNote", function() {
  var RansomNote = require('../problems/RansomNote');
  var ransomNote;

  beforeEach(function(){
    ransomNote = new RansomNote();
  });

  it(": test case 1", function() {
    var canReplicate = ransomNote.main(6, 4, "give me one grand today night", "give one grand today");

    expect(canReplicate).toEqual("Yes");
  });

  it(": test case 2", function() {
    var canReplicate = ransomNote.main(6, 5, "two times three is not four", "two times two is four");

    expect(canReplicate).toEqual("No");
  });
})
