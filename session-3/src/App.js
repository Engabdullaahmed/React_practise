  import { useState } from 'react';
  import ProductsList from './Comonents/ProductsList';
  import React from 'react';
  import './App.css'

  // import './App.css';
  // import Welcome from './Comonents/Welcome';
  // import Guest from './Comonents/Guest';
  // import List from './Comonents/List';

  function App() {
    // let element;
    // const [isloggedin, setloggin] = useState(false);
    // if (isloggedin) {
    //   element = <h1>Welcome to the website</h1>
    // }
    // else {
    //   element = <h5>Please login to continue</h5>
    // }

    // console.log(ProductsList);

    return (

      // <div className="App">

        // {/* <button onClick={() => setloggin(true)}>Login</button> */}
        // {/* {isloggedin ? <h1>Welcome to the website</h1> : <h5>Please login to continue</h5>} */}
        // {/* {isloggedin ? <Welcome name="Ali" /> : <Guest />} */}


        <div className='products-list'>
          {/* <h1>Hello There suiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</h1> */}
          
        <ProductsList />
        </div>
       
      // </div >
    )
  }

  export default App;
