import React,{Component} from 'react';
import './Counter.css';

class Counter extends Component {
    // Define initial state in a constructor
    // state => counter 0
   constructor() {
       super();
       this.state = {
           counter : 0
       }
       this.increment = this.increment.bind(this);
   }

    render() {
      return(
        <div className="counter">
          Counter Component
          <button onClick={this.increment}>+ 1</button>
          <span className="count">{this.state.counter}</span>
        </div>
      )
    }
    increment() { // Update state -- counter++
        this.setState({
            counter : this.state.counter + 1
        }); 
    }
}
//https://www.freecodecamp.org/news/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb/

export default Counter