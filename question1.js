const question1 = (index = 13, sum = 0, k = 0) => {
    while(k < index) {
      k++;
      sum = sum + k;
      console.log(sum);
    }
  
    console.log(sum);
  }
  
  question1();