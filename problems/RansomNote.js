function RansomNote() {
  this.main = function(m, n, magazine, ransom) {
    if(n > m) return "No";

    let magazineWords = magazine.split(" ");
    let ransomWords = ransom.split(" ");

    let magazineHash = {};

    for (var i = 0; i < magazineWords.length; i++) {
      let magazineWord = magazineWords[i];
      if(typeof magazineHash[magazineWord] == "undefined") {
        magazineHash[magazineWord] = 1;
      } else {
        magazineHash[magazineWord] = magazineHash[magazineWord] + 1;
      }
    }

    for (var i = 0; i < ransomWords.length; i++) {
      let ransomWord = ransomWords[i];
      if(typeof magazineHash[ransomWord] == "undefined") {
        return "No";
      } else if(magazineHash[ransomWord] <= 0) {
        return "No";
      } else {
        magazineHash[ransomWord] = magazineHash[ransomWord] - 1;
      }
    }

    return "Yes";
  }
}

module.exports = RansomNote;
