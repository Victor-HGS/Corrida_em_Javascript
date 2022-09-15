class Motor {
   #motor

    constructor(motor) {
      this.#motor = motor;
    }

    get motor(){
      return this.#motor;
    }
    set motor(motor){
      this.#motor = motor;
    }
    
    acelerarF() {
      
      console.log(this.motor + ' emite um barulho.');
      }
      acelerarL() {
        console.log(this.motor + ' emite um barulho.');
        }
        acelerarFerr() {
          console.log(this.motor + ' emite um barulho.');
          }
    }