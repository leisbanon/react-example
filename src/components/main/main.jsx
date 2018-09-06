import React from 'react'
import './main.css'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0,
        }
    }
    addCount() {
        this.setState({
            count:this.state.count + 1
        })
    }
    refsCall() {
        this.refs.refsCom.getMes();
    }
    render() {
        return(
            <main className='main'>
            </main>
        )
    }
}

export default Main;