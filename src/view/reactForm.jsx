import React from 'react'
import {
    SubHeader
} from '../components/index'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message:'Hello React',
        }
    }
    /**
     * React 实现表单的双向绑定，使用onChange 事件监听数值的变动，使用setState 进行数据的更新。
     */
    render() {
        return(
            <div className='form-container'>
                <SubHeader title='React Form 表单的处理'/>
                <p>{this.state.message}</p>
                <p><input ref='message' type="text" value={this.state.message} onChange={this.inputChnage.bind(this)}/></p>
            </div>
        )
    }
    inputChnage(event) {
        this.setState({
            message:event.target.value
        })
    }
}

export default Form;