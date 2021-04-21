
function hasSpaces(str) {
  if (str.indexOf(' ') !== -1) {
    return true
  } else {
    return false
  }
}
console.log(hasSpaces (' '))
console.log(hasSpaces (' hello'))
console.log(hasSpaces ('hello'))
//*************************************************************

function countVowels(str) {
  let m = str.match(/[aeiou]/gi);
  return m === null ? 0 : m.length;
}
console.log(countVowels ('hello'))
console.log(countVowels ('eau'))
console.log(countVowels (' '))

//*************************************************************
function removeVowels(string){
  let vowels = /[aeiou]+/g;
  return string.replace(vowels, "#");
}
console.log(removeVowels("eau"))

console.log(removeVowels ("hello"))
//*************************************************************
function hasString(str) {
  regexp =/a[a-z]*c/gi 
    if (regexp.test(str)){
    return true
  } else {
    return false
  }
}
console.log(hasString("bbbCCount"))
console.log(hasString("aazzzccount"))
console.log(hasString("cbaaount"))
console.log(hasString("account")) 

//*************************************************************
function zipCode(str)
{
 regexp = /^[0-9]{5}?$/;

        if (regexp.test(str))
          {
            return true;
          }
        else
          {
            return false;
          }
}

console.log(zipCode("78954277742"));
console.log(zipCode("78954"));

console.log(zipCode("78l52"));
//***********************************
function mathExp(str){
  let regexp=/([-+/*\s]\d+(\s\.\d+)?)/
  return regexp.test(str)
  }
  
  console.log(mathExp("2 + 6"));
  console.log(mathExp("2*71"));
  console.log(mathExp("2+j"));

/*correction ***************
   function verif(){
  let x =document.getElementById("phrase").value
let y=/\s/
let res=y.test(x)
document.getElementById("reponce").innerHTML=res
}

function vowels(str){
    let pattern =/[a e i o u y]/gi
    let found = str.match(pattern);
    if(found== null)
    return 0 ;
    else
    return found.length;
} 
*/


