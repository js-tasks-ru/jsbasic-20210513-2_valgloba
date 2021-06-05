function sumSalary(salaries) {
  let answer = 0;
  for (let property in salaries) {
    if (  
      typeof salaries[property] === 'number'
      && salaries[property] !== Infinity
      && salaries[property] !== -Infinity
      && !isNaN(salaries[property]) ) {
      answer = answer + salaries[property];
    }
  }
  return answer;
}
      
  