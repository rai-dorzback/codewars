/*
Grasshopper - Function syntax debugging
A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.
*/

// OG code to debug:
function main [verb, noun]
  return verb + noun
}

// METHOD 1
function main(verb, noun) {
  return verb + noun
}

// METHOD 2
const main = (verb, noun) => verb + noun;
