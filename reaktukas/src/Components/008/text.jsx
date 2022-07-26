import { useState } from "react";
function Text(){

    const[text, setText]= useState('');

    const[color, setColor]= useState('#00aa00');

    const[title, setTitle]= useState('Text');

    const handleInput = e =>{
        console.log(e.target.value);
        setText(e.target.value);
        if('=== e.target.value'){
            setTitle('Text');
        }else{
            setTitle(e.target.value);
        }
    }
    const handleColorInput = e =>{
        setColor(e.target.value);
        
    }

    return(
        <>
        {/* <fieldset>
        <legend>TEXT</legend>
        <input type='text' value={text} onChange={handleInput}></input>
        </fieldset> */}
        <fieldset>
        <legend style={{color:color}}>{title}</legend>
        <input type='text' value={text} onChange={handleInput}></input>
        <div>
        <input type='color' value={color} onChange={handleColorInput}></input>
        </div>
        </fieldset>
        
        </>
    )
}

export default Text