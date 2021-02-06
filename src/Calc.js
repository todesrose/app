import React from 'react';
import ReactDOM from 'react-dom';
import './App'

class Calc extends React.Component{
   
    constructor(props){
        super();
        this.state = {
            number: 0,
        };
       
    }
    clickcatch(){
        if (this.name === "plus") this.setState({number: this.state.number+1});
        else this.setState({number: this.state.number-1});

    }
    render(){
        return(<><div className="result">{this.state.number}</div>
        <button name="plus"  onClick={this.clickcatch.bind(this)} label="Plus"/>
        <button name="minus"  onClick={this.clickcatch.bind(this)} label="Minus"/></>) ;
    }

}
export default Calc; 