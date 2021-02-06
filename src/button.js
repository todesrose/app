import React from 'react'
import { withTranslation } from 'react-i18next';
/**
 * Button.
 * @param {Object} params - table key, reducer name, mount name (could be only single per model)
 * @param {Object} template - creator of initial payload ({app:web, version:2.0 etc})
 * @param {Object} connector - connector object providing transport and endpoint (in case for http_connector)
 */

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
        const { t } = this.props;
        let self = this;
        switch(this.props.status) {
            case 'disabled':
                return (
                    <button id={this.props.name} className={button_className} name={this.props.name} disabled
                            type={type} onClick={this.onClick.bind(this)}>{this.props.children}{t(this.props.label)}
                    </button>
                );
            case 'hidden':
                return null;
            case 'active':
                let btn_class = button_className + ' active';
            default:
                return (
                    <button id={this.props.name} className={button_className} name={this.props.name}
                            type={type} onClick={this.onClick.bind(this)}>{this.props.children}{t(this.props.label)}
                    </button>
                );
        }
        
    }
}

export default withTranslation()(Button);