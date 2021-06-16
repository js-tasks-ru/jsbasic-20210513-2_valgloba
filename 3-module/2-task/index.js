function filterRange(arr, a, b) {
  let filteredArray = arr.filter(function(number) {
    return number >= a && number <= b ;
  }); 
  return filteredArray;
}
