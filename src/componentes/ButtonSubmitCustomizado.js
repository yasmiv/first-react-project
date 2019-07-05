import React from 'react';

export default class ButtonSubmitCustomizado extends React.Component {
    render() {
        return (
            <div className="pure-control-group">
            <label></label>
            <button type="submit" className="pure-button pure-button-primary" value={this.props.label}>Gravar</button>
          </div>            
        );
    }
}