import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/table';

class App extends React.Component {

   state = {
      data:[
        {
          item:  "apple",
          inventory:  12,
          size:  "medium",
        },
              {
          item:  "blueberry",
          inventory:  103,
          size:  "small",
        },
            {
          item:  "grapefruit",
          inventory:  4,
          size:  "large",
        },
            {
          item:  "strawberry",
          inventory:  14,
          size:  "small",
        },
      
      
      
      ]
   }
    render() {
      // for(let i =0;i <= this.state.data.length;i++){
        
      //     let columnNames = Object.values(this.state.data[i]);
          
      // }
      
      const columns = Object.keys(this.state.data[0]);

     


      const rowdata = this.state.data.map(item => Object.values(item));
      console.log(columns);
      console.log(rowdata);
       return (
          <div className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                THE TABLE COMPONENT
                </a>
                <Table  columns={columns} data={this.state.data} />
              </header>
           </div>
       );
    }
}


export default App;
