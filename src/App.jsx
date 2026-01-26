import { createRoot } from 'react-dom/client'

const myelement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);

createRoot(document.getElementById('root')).render(
  myelement
)

//class:
//class Car {
//  constuctor(name) {this.brand = name;} 
//  present(){return 'I have a ' + this.brand;}
//}
//const mycar = new Car("Ford"); mycar.present();

//short form function:
// hello = function(var) {return "Hello " + var;}
// hello = var => "Hello " + var;
