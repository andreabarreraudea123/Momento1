function invertedNumber(){
    let numero = document.getElementById("name").value;
    let numberinverso=0;
 
     while (numero>0){
         number1=numero%10;
         numberinverso=numberinverso*10+number1;
         numero = parseInt(numero/10);
         
         
     }
     alert("El número inverso es: " + numberinverso);
     return true;
 }