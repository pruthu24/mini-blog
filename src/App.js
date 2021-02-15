import logo from './logo.svg';
import './App.css';
import Calcu from './comp/comp';
import Vallen from './valid/valid';
import { Component } from 'react';

var ans=[];
let clearArr ;
class App extends Component{
  state={
    word:[
      {wordLen:0},
      {wordText:null}
    ],
    finalAns:[],
    clrTxt:true
  }

  countText = (event) =>{
    this.setState({
      word:[
        {wordLen:(event.target.value).length},
        {wordText:event.target.value}
      ]
    })
  }

  renderText = () =>{
    ans.push(this.state.word[1].wordText);
    this.setState({
      finalAns:ans,
      clrTxt:false
    });
  }

  alertMsg = () =>{
    alert("Please check the length of the text")
  }

  render(){

    const txtLen = () =>{
      if (this.state.word[0].wordLen < 0 || this.state.word[0].wordLen < 30)  {
        return false
      }else if(this.state.word[0].wordLen > 100){
        return false
      }else{
        return true
      }
    }
    

    return (
      <div className="App">
        <h1>Type your text below... &#10084;</h1>
        {this.state.clrTxt === false ? <textarea value="" onClick={this.state.clrTxt=true} placeholder="Enter your text here....!" onChange={this.countText} type="text" className="input_text"></textarea> :
        <textarea placeholder="Enter your text here....!" onChange={this.countText} type="text" className="input_text"></textarea> }
        <br></br>
        {txtLen() == true ?<button onClick={this.renderText} className="btn_style">POST</button>:
        <button onClick={this.alertMsg} className="btn_style">POST</button>}
        <Vallen wordlent={this.state.word[0].wordLen}/>
        <Calcu  postext={this.state.finalAns}/>
      </div>
    );
  }
}

export default App;
