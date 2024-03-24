function gradeCalculate(grade){
//if grade is given a value,,we expect return 
    if (grade>79){
        console.log("A");
  }
  else if(grade>60 &&  grade<=79){
  console.log("B-")
  }
  else if(grade>49 && grade<=59){
  console.log("C-")
  }
  else if(grade>40 && grade <=49){
     console.log("D-")
   }
   else{
    console.log("E")
   }
   return 'Enter:' +grade   
}
   const myScore = gradeCalculate(55)
   console.log(myScore);