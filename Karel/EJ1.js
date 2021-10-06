class program {

     void regresa(){
      turnleft();
      turnleft();
      while(frontIsClear){
      move();
      }

      while(anyBeepersInBeeperBag){
      putbeeper();
        }
  }

     void recoge(){
     while(nextToABeeper){
     pickbeeper();
         }
     }

     void amontona(){
     while(nextToABeeper && frontIsClear){
     recoge();
     move();


     if(frontIsBlocked || notNextToABeeper){
     recoge();
     regresa();
     turnleft();
     if(frontIsBlocked && facingEast){
     turnoff();
         }
     move();
     turnleft();

         }
       }
}

 program(){
 amontona();
 turnoff();

 }

 