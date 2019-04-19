import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SuggestionsPanel.css';

class SuggestionsPanel extends Component {
    static propTypes = {
        textSelected: PropTypes.string,
    }
    /**
     * Execute the function fetchApi every time the props textSelected have new value
     */
    componentDidUpdate(){
        if( this.props.textSelected )  this.fetchApi();
    }

    /**
     * This function should search all the suggestions and render it
     */
    fetchApi = () => null;
    render() {
        return (
            <div id="suggestions-panel">
            </div>
        );
    }
}

export default SuggestionsPanel;
