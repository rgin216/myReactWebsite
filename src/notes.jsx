//class:
//class Car {
//  constuctor(name) {this.brand = name;} 
//  present(){return 'I have a ' + this.brand;}
//}
//const mycar = new Car("Ford"); mycar.present();

//short form function:
// hello = function(var) {return "Hello " + var;}
// hello = var => "Hello " + var;
// Using arrow unction makes 'this' represent the Header Object instead of the object that called the function

// map() performs following action to each element:
//const numbers = [1, 2, 3, 4];
//const doubled == numbers.map(x => x * 2); //becomes [2, 4, 6, 8]
//const fruitlist = ['apple', 'banana', 'cherry'];
//
//function MyList() {
//  return (
//    <ul>
//      {fruitlist.map(fruit => 
//        <li key={fruit}>{fruit}</li> // for every fruit, make it a bullet point, key as the fruit, dsplay fruit
//      )}
//    </ul>
//  );
//}
//
