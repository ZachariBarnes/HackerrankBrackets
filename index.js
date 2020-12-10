
const input= ['{(([])[])[]}','{(([])[])[]]}','{(([])[])[]}[]'];
function isBalanced(s) {
  while(hasPairs(s)){
    s = replacePairs(s);
  }
  return s ? "NO" : "YES";
 }

function replacePairs(s){
  let str  = s.replace("{}","").replace("[]","").replace("()","");
  return str;
}

 function hasPairs(s){
   const hasBraces = s.indexOf("{}")>-1;
   const hasBrackets = s.indexOf("[]")>-1;
   const hasParens = s.indexOf("()")>-1
   return hasBraces || hasBrackets  || hasParens;
  }

function main(){
  input.forEach( (str) => {
    console.log(isBalanced(str));
    // console.log("\n\n\n=====NEW PROBLEM=====\n\n\n")
  });
}

main();