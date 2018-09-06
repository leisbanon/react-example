import React from 'react'
import {
    BrowserRouter as Router, Route, Link
}from 'react-router-dom'

class notMatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noPage:require('@/image/404.jpg'),
        }
    }
    render() {
        return(
            <div className='box-center'>
                <img src={this.state.noPage} alt=""/>
            </div>
        )
    }
}

export default notMatch;