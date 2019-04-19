import React, { Component } from 'react';
import './ControlPanel.css';

class ControlPanel extends Component {
    onClickBold = () => document.execCommand('bold');
    onClickUnderline = () => document.execCommand('underline');
    onClickItalic = () => document.execCommand('italic');
    render() {
        return (
            <div id="control-panel">
                <div id="format-actions">
                    <button className="format-action" type="button" onClick={this.onClickBold}><b>B</b></button>
                    <button className="format-action" type="button" onClick={this.onClickItalic}><i>I</i></button>
                    <button className="format-action" type="button" onClick={this.onClickUnderline}><u>U</u></button>
                </div>
            </div>
        );
    }
}

export default ControlPanel;
