function MakingAnagrams() {
  this.main = function(a, b) {
    for(var i = 0; i < a.length; i++) {
        let duplicateIndex = b.indexOf(a.charAt(i));
        if (duplicateIndex >= 0) {
            a = a.replace(a.charAt(i), " ");
            b = b.replace(b.charAt(duplicateIndex), " ");
        }
    }

    a = a.replace(/\s+/g, '');
    b = b.replace(/\s+/g, '');

    return a.length + b.length;
  }
}

module.exports = MakingAnagrams;
