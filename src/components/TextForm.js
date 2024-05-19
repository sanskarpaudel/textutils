import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
   // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }

   const handlelinkclick = () => {
    window.open("https://www.facebook.com", "_blank");
  };


  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
   }
   const handleclearClick = ()=>{
    // console.log("clearcase was clicked" + text);
     let newText ='';
     setText(newText)
   }

   const handleExtraspace = () => {
    let newtext = text.split(/[ ]+/)
    setText(newtext.join(" "))
   }
   const handlecopy = () =>{
    console.log("I am copy");
    var text = document.getElementById("mybox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    
   }
   

  const handleOnChange = (event)=>{
  //  console.log("On change");
    setText(event.target.value);
  }

  const [text, setText] = useState('');
  // text = "new text"; //wrong way to change the state
  // setText("new text"); // correcct way to change the state
  return (
    <>
    <div className="container">
          <h1>{props.heading}</h1>
           <div className="mb-3">
           <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="10"></textarea>
           </div>
           <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button>
           <button className="btn btn-primary mx-2" onClick={handleLoClick}>convert to lowercase</button>
           <button className="btn btn-primary mx-2" onClick={handleclearClick}>clear text</button>
           <button className="btn btn-primary mx-2" onClick={handlelinkclick}> link </button>
           <button className="btn btn-primary mx-2" onClick={handlecopy}> copy text </button>
           <button className="btn btn-primary mx-2" onClick={handleExtraspace}>Remove Extra space </button>
           
          
           
    </div>
    <div className="conatiner" my-3>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words an {text.length} characters</p>
      <p>{0.008 * text.split(" ").length } Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
} 
