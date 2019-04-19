import React, { Component } from 'react';
import './FileZone.css';
import SuggestionsPanel from '../suggestions-panel/SuggestionsPanel';
import getMockText from '../text.service';

class FileZone extends Component {
    state = {
        value: '',
        textSelected: '',
    }
    componentDidMount(){
        getMockText().then((value) => this.setState({value}));
    }
    /**
     * Every time a text is selected, store the info in the state
     */
    onMouseUp = () => {
        const text = window.getSelection();
        const textSelected = text.toString();
        this.setState({textSelected});
    };
    render() {
        const {textSelected, value} = this.state;
        return (
            <div id="file-zone">
                <div id="suggestions-zone">
                    <SuggestionsPanel textSelected={textSelected}/>
                </div>
                <div id="file">
                    <div
                        id="text-area"
                        className="file-area"
                        contentEditable={true}
                        value={'asdasdasdas'}
                        onMouseUp={this.onMouseUp}></div>
                </div>
            </div>
        );
    }
}

export default FileZone;
