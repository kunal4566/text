import Navbar from './components/Navbar';
import './App.css';
import Textform from './components/Textform';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
BrowserRouter as Router,
Switch,
Route,
Link
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)

  const showalert =(message,type) =>{
    setalert({
      msg: message,
      type:type
    });
    setTimeout(()=>{
      setalert(null);
    },1500);

  }
  const toggleMode=()=>{
    if (mode==='light'){
     setmode('dark') 
     document.body.style.backgroundColor='green'
     document.title =  'text util- dark mode enable'
     showalert("Dark mode enable","success")
    
    }else{
       setmode('light')
       document.body.style.backgroundColor='white'
       document.title =  'text util- light mode enable'
       showalert("light mode enable","success")
      }
  }
  return (
  <>
  <Router>

<Navbar  title ="text util" aboutus="Aboutus" mode={mode} toggleMode={toggleMode}/>  
<Alert alert={alert}/>

<div className="container">
<Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Router exact path="/">
          <Textform showalert={showalert} mode={mode}  heading="enter the text to Analyse below"/>
          </Router> 
        </Switch> 
{/* <About/> */}

</div>
</Router>

</>
  
  );
}

export default App;
