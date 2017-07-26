var str = process.argv[2];
// str = str.split(" ").join("");
str = str.toLowerCase(str);
console.log(str);

function rep(input){
  var result = {};
  for(i = 0; i < input.length; i++){
    if(result[input[i]] !== ' '){
      if( !result[input[i]] ){
        result[input[i]] = [i];
      }else {
        result[input[i]].push(i);
      }
    }
  }
return(result);
}
console.log(rep(str));