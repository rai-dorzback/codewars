// https://www.codewars.com/kata/5827bc50f524dd029d0005f2/train/javascript

function getFirstPython(list) {
    const numPythonDevs = list.filter(dev => dev.language === "Python");
    return numPythonDevs.length === 0 ? 'There will be no Python developers' : `${numPythonDevs[0].firstName}, ${numPythonDevs[0].country}`;
  };
  
const list1 = [
{ firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
{ firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
{ firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];

console.log(getFirstPython(list1), 'Victoria, Puerto Rico')