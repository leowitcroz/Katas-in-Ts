let dna = "ATCG";

function DNA(dna) {
 
  const bases: any = {
    A:'T',
    T:'A',
    C:'G',
    G:'C'
  }

  let otherSideDna = ''

  for(let i = 0; i < dna.length; i++){
    const currentBase = bases[dna[i]]
    
    otherSideDna += currentBase
  }

  return otherSideDna
}

console.log(DNA(dna));
