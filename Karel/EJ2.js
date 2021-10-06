class program {
    void  camina(){
     turnleft();
     turnleft();
         while(frontIsClear){
            move();
        }
        while(anyBeepersInBeeperBag){
            putbeeper();
        }
    }
    
    void acumulado(){
        while(nextToABeeper){
        pickbeeper();
    
     }
    }
    
    void mochila(){
        while(frontIsClear){
         acumulado();
         move();
        if(frontIsBlocked){
        acumulado();
        camina();
        turnleft();
        acumulado();
            if (frontIsBlocked && facingEast){
        camina();
        turnoff();
        }
        move();
       turnleft();
    
        }
     }
    }
    
        program() {
            mochila();
            turnoff();
        }
    }