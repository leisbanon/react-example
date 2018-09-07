import React from 'react'
import {hot} from 'react-hot-loader'

import {
    SubHeader
} from '../components/index'

class Manage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number:'',
        };
    }
    render() {
        return(
            <div className='manage-event'>
                <SubHeader title='React 事件处理'/>
                <p>&emsp;&emsp;React Dom 中事件和HTML Dom 定义事件类型，不同在绑定点击事件的的作用域以及事件名称的不同等，注意名称总是以 驼峰命名法，定义事件示例：</p>
                <div>
                    <ul>
                        <li>onClick</li>
                        <li>onChange</li>
                        <li>onBlur</li>
                    </ul>
                </div>

                {/* 点击事件 */}
                <p><button onClick={this.btn_0.bind(this,'Hello React')}>Reacr 点击事件 - Onclick</button></p>

                {/* onChange */}
                <p>Input onChange 事件：<input type="text" onChange={this.onChange.bind(this)}/>{this.state.number}</p>

                <p>onBlur 失去焦点事件：<input type="text" onBlur={this.onBlur.bind(this)}/></p>

                <pre>
                    <div>定义React 事件在需要在标签定义绑定点击事件：</div>
                    <div className='color-green'>需要注意的时，在绑定函数是，我们需要为该函数绑定 this 来正确的指明当前函数的指向，类中定义的方法是不会默认绑定 this 的。 因此如果我们不绑定this ,那么调用该函数的 this 值将是 undefined，即当前this 指向实际是 constructor。</div>
                    <code>
        {`
            class Manage extends React.Component {
                render(){
                    return(
                        <button onClick={this.btn_0.bind(this,'Hello React')}>Reacr 点击事件 - Onclick</button>
                    )
                }
                btn_0() {
                    alert('Hello React');
                }
            }
        `}
                    </code>
                </pre>

            </div>
        )
    }

    /**
     * React 使用bind 绑定点击事件
     * @param {*} data 传递的参数
     * @param {*} e 当前事件对象
     * 
     * 用法：
     * 1、React 定义事件属性的命令使用驼峰命名
     * 2、采用JSX 的写法，需要传入一个函数，而不是一个字符。
     */
    btn_0(data,e) {
        alert(data);
    }
    // Input Change 事件
    onChange(v) {
        this.setState({
            number:v.target.value
        })
        console.log(v.target.value);
    }
    // Input 失去焦点事件
    onBlur(v) {
        alert('失去焦点：'+ v.target.value);
    }
}

export default hot(module)(Manage);