import React,{ useState } from 'react'
  
  

export default function Textform(props) {
    const [text, setText] = useState('Enter text here');

    const handleOnchange = (event) =>{
        
        setText(event.target.value);

    }

    const handelUpclick= () =>{
        
        let newtext= text.toUpperCase()

        setText(newtext)
        props.showalert("converted to uppercase","success")
    }
    const handelClearclick= () =>{
        
        let newtext= ''

        setText(newtext)
    }
    const handelLoclick= () =>{
        
        let newtext= text.toLowerCase()

        setText(newtext)
        props.showalert("converted to lowercase","success")
    }
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            

            <h1>{props.heading}</h1>
         
<div className="mb-3">

  <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==='dark'?'green':'white', color:props.mode==='dark'?'white':'black'}} id="mybox" rows="10"></textarea>
</div> 
<button className="btn btn-primary  mx-2 " onClick={handelUpclick}>covert to upper case</button>
<button className="btn btn-primary   mx-2" onClick={handelLoclick}>covert to lower case</button>
<button className="btn btn-primary   mx-2" onClick={handelClearclick}>clear text</button>

        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}> 
        <h1>Text summery</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} minute to read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter some text to preview"}</p>
        </div>
        </>
    )
}
