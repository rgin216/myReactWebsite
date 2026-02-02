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
// the back tick ` allows you to right as though your writing here (no need \n)
//instead of "hello!\n " + username
//we can do:
//`hello!
//${username}`

//Curly brackets can also be used in HTML portion for any javascript you want to add.
//<h1>My car, {car.name}, has {25*20} horsepower</h1>


//function Car(props) {
//    return (
//      <h2>I am a {props.brand}!</h2>
//    );
//  }
//  
//  function Garage() {
//    return (
//      <>
//        <h1>Who lives in my Garage?</h1>
//        <Car brand="Ford" />
//        <Car brand="BMW" />
//      </>
//    );
//  }
//  
//  createRoot(document.getElementById('root')).render(
//    <Garage />
//  );
//
//Creates Header1 Who lives in my Garage? then h2 I am a Ford!\n I am a BMW!

