class Veiculo extends Motor {

    acelerarF() {
      console.log(this.motor + ' a milhão vruuuuuuuuuummmmmmm!!!');
      }
      acelerarL() {
        console.log(this.motor + '  acelera mas come poeira!!!');
        }
        acelerarFerr() {
          console.log(this.motor + ' pé na tabua para alcançar o fusca...');
          }
    }
    let Fusca = new Veiculo("Fusqueta");
    Fusca.acelerarF();


    let Ferrari = new Veiculo("Ferrari");
    Ferrari.acelerarFerr();

    let Lamboriguini = new Veiculo("Lamboriguini");
    Lamboriguini.acelerarL();