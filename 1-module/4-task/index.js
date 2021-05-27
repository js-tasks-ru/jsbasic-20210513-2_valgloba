function checkSpam(str) {
  let answer = false;
  let strLowCase = str.toLowerCase()
  if (strLowCase.indexOf('xxx') >= 0 || strLowCase.indexOf('1xbet') >=0) {
    answer = true; 
  } 

  return answer;
}
