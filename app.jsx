import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

   constructor(props) {
      super(props);
		
      this.state = {
         valv: ''
      }

     
      this.clearInput = this.clearInput.bind(this);
   };

  

   clearInput() {
        let val = ReactDOM.findDOMNode(this.refs.myInput).value;
	   this.setState({valv:val});
   }

   render() {
      return (
         <div>
            <input  
               ref = "myInput"></input>
            <button onClick = {this.clearInput}>CLEAR</button>
			<App2 data = {this.state.valv} />
           
         </div>
      );
   }
}

class App2 extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.data}</h1>
         </div>
      );
   }
}


export default App;


