/*
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/

let DNAStrand = dna => {
  // split dna strand into arra
  let dnaArray = dna.split('');
  
  // string to populate with dna complements
  
  let dnaComplement = '';
  
  // loop through array
  for(let i = 0; i < dnaArray.length; i++){
    if (dnaArray[i] === 'A') {
      dnaComplement += 'T';
    } else if (dnaArray[i] === 'T') {
      dnaComplement += 'A';
    } else if (dnaArray[i] === 'G') {
      dnaComplement += 'C';
    } else if (dnaArray[i] === 'C') {
      dnaComplement += 'G';
    }
  }
  return dnaComplement
};
