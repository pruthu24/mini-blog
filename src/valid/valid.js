import React from 'react';

const vallen = (props) =>{
    var ans = null;
    if(props.wordlent == 0){
        ans = "Start Typing"
    }else if(props.wordlent < 0 || props.wordlent < 30){
        ans="Text too short"
    }else if(props.wordlent > 100){
        ans="Text too large"
    }else{
        ans="Perfect..!"
    }
    return(
    <div className="val_style">
        <h3>your word length is {props.wordlent}</h3>
        <h5>And your text is {ans} &#10083;</h5>
    </div>
    )

}

export default vallen