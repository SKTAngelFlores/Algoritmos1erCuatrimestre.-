
void pick(){
    while(!facingNorth){
       turnleft();
       }
    while(nextToABeeper){
    pickbeeper();
    if(frontIsClear){
    move();
    }
    }
    while(!facingSouth){
       turnleft();
       }
       while(frontIsClear){
       move();
       }
       while(!facingEast){
       turnleft();
       }
       if(frontIsClear){
       move();
       pick();
       }
       while(!facingWest){
       turnleft();
       }
       while(frontIsClear){
       move();
       }
       build();
   }
       program () {
           pick();
           turnoff();
       }
   }