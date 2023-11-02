document.write("The first will get the gold medal,the second will get the silver,and the third,bronze---using filter method"+"<br>")
document.write("Input:let winners=['Anna','Beth','Cara']"+"<br>");
let winners=["Anna","Beth","Cara"];

let res1=winners.filter(function(value,index,array){
	return index==0;
	
});
  document.write("Gold winner:"+res1+", ");
  let res2=winners.filter(function(value,index,array){
	return index==1;
	
});
  document.write("Silver winner:"+res2+", ");
  
  let res3=winners.filter(function(value,index,array){
	return index==2;
	
});
  document.write("Bronze winner:"+res3+" ");
  
  
  