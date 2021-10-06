class program {
    void b(){
     while(!facingEast){
        turnleft();
        }
        while(!nextToABeeper && anyBeepersInBeeperBag){
        putbeeper();
        if(frontIsClear){
        move();
        }
        if(frontIsBlocked){
        if(!nextToABeeper){
        putbeeper();
        }
        while(!facingNorth){
        turnleft();
        }
        move();
        while(!facingWest){
        turnleft();
        }
        while(frontIsClear){
        move();
        }
        b();
        }
        }
    }
    
    void p(){
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
        p();
        }
        while(!facingWest){
        turnleft();
        }
        while(frontIsClear){
        move();
        }
        b();
    }
        program () {
            p();
            turnoff();
        }
    }