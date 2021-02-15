import React from 'react';
import './comp.css'


const Calcu = (props) =>{
    let ans = props.postext;
    var pp = Object.values(ans)
    const listItems = pp.map((pp,index)=><li>{pp}</li>)
    return(
        <div className="post_style">
            <h1>Your Recent Posting :- </h1>
            <ol>{listItems}</ol>
        </div>
        )
}

export default Calcu