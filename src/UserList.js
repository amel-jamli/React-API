import React, { Component } from 'react'
import axios from "axios";


async function getUsers() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(response);
    return response ;
  } catch (error) {
    console.error(error);
  }
}




export default class App extends Component {

  
  state = {
    users : []
  }

componentDidMount =()=>{
  getUsers().then(response =>{
      this.setState({
        users : response.data
      })
  });
}


  render() {
    return (
      <div>
        <ul>
          {this.state.users.map (user=>
          <li>
            {user.name}
          </li>
            )}
          
        </ul>
      </div>
    )
  }
}
/////////////////////////////////*********************************************************************************************************************** */



import React from 'react';



const [data, setData] = useState()

async function getUsers() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(response);
    return response ;
  } catch (error) {
    console.error(error);
  }
}




function App(props) {

  
  return (
    <div>
      
      </div>
  );
}

export default App;

