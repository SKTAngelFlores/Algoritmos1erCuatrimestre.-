var operacion = "division";
//var n1 = 10;
//var n2 = 5;

switch(operacion){
    case "suma":
        console.log("La operacion es suma");
        //.....
        //if(n1 < n2){
           // console.log("Operacion es suma y n1 es menor a n2");
        //}else{
          //  console.log("Operacion es suma y n2 es menor a n1");
        //}  
    
    break;
    case "resta":
        console.log("La operacion es resta");
    break;
    case "multiplicacion":
        console.log("La operacion es multiplicacion");
    break;
    case "division":
        console.log("La operacion es division");
    break;
    default:
        console.log("No se reconoce la operacion");
    break;
}
//---
if(operacion == "suma"){
    console.log("La operacion es suma");
}else if(operacion == "resta"){
    console.log("La operacion es resta");
}else if(operacion == "multiplicacion"){
    console.log("La operacion es multiplicacion");
}else if(operacion == "division"){
    console.log("La operacion es division");
}else{
    console.log("No se reconoce la operacion");
}
//-----
