
 var n1 = 10;
 var n2 = 5;
 var operacion1 = "resta";
 var operacion2 = "division";
 var total1 = 0;
 var total2 = 0;

 if(operacion1 == "suma"){
     total1 = n1 + n2;
 }else{
    total1 = n1 - n2;
}

 if(operacion2 == "division"){
     total2 = n1 / n2;
 }else{
     total2 = n1 * n2;
 }

console.log("El resultado de la operacion 1 = "+ total1);
console.log("El resultado de la operacion 2 = "+ total2);


