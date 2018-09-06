import React from 'react'
import {
    SubHeader
} from '../components/index'

class Refs extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            message:'你好啊！'
        }
    }
    render() {
        return(
            <div className='container-refs'>
                <SubHeader title='React 组件refs'/>
                <p>
                    <button onClick={this.props.callback}>父组件获取子组件中的方法</button>
                </p>
            </div>
        )
    }
    getMes() {
        let message = this.state.message; 
        alert(message);
    }

}

export default Refs; 