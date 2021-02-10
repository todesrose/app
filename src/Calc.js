import React from 'react';
import Button from './button';
import Display from './Display';
import { connect } from 'react-redux';

class Calc extends React.Component{
   
    render(){
        return(<><Display number = {this.props.display_number} /> 
        <Button name="plus" onClick={this.props.increaseNumber}  label="+"  />
        <Button name="minus" onClick={this.props.decreaseNumber} label="-"/></>) ;  
    }

}

function mapStateToProps(state) { 
    return { 
        display_number: state.displayReducer.number
    }; 
} 
function mapDispatchToProps(dispatch) { 
    return({ 
        increaseNumber() { 
            dispatch({ 
                type: "INCREASE_DISPLAY_NUMBER", 
            }); 
        }, 
        decreaseNumber() { 
            dispatch({ 
                type: "DECREASE_DISPLAY_NUMBER", 
            }); 
        } 
    }) 
} 
 
export default Calc = connect( 
    mapStateToProps, mapDispatchToProps)( 
    Calc 
)
