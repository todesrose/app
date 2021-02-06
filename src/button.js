import React from 'react'


class Button extends React.Component{
    onClick(event) {
        if (this.props.type === 'submit') {
            event.preventDefault();
        }
        this.props.onClick({name: this.props.name, params: (this.props.params || {})});
    }
    render () {
        let button_className = "button btn btn-primary " + (this.props.className || '');
        let type = this.props.type || 'button';
        let self = this;
        switch(this.props.status) {
            case 'disabled':
                return (
                    <button id={this.props.name} className={button_className} name={this.props.name} disabled
                            type={type} onClick={this.onClick.bind(this)}>{this.props.children}{this.props.label}
                    </button>
                );
            case 'hidden':
                return null;
            case 'active':
                let btn_class = button_className + ' active';
            default:
                return (
                    <button id={this.props.name} className={button_className} name={this.props.name}
                            type={type} onClick={this.onClick.bind(this)}>{this.props.children}{this.props.label}
                    </button>
                );
        }
        
    }
}

export default Button;
