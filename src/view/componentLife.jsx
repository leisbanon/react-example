import React from 'react'
import { hot }  from 'react-hot-loader'
import {
    SubHeader
} from '../components/index'

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message:'Hello React',
        };
    }
    //组件渲染前调用
    componentWillMount() {
        console.log('---------：' + this.state.message);
        console.log('组件渲染前调用 => componentWillMount');
    }
    //组件渲染后调用
    componentDidMount() {
        console.log('组件渲染后调用 => componentDidMount');
    }
    //组件接收到一个新的Props 数据更新时调用
    componentWillReceiveProps() {
        console.log('组件接收到一个新的Props 数据更新时调用 => componentWillReceiveProps');
    }
    //组件接收到一个新的Props 或者 state时，但是还未render时调用
    componentWillUpdate() {
        console.log('当组件接收到新的props 或者 state 但还没有render时调用，在应用初始化时不调用 => componentWillUpdate');
    }
    //在组件完成更新后立即调用。在应用初始化时不调用
    componentDidUpdate() {
        console.log('在组件完成更新后立即调用。在应用初始化时不调用 => componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('组件销毁。当组件中Dom 中移除是触发该钩子 => componentWillUnmount');
    }
    render() {
        return(
            <div>
                <p>Props Data : {this.props.message}</p>
                <pre>
                    在React 生命周期，也是非常重要的一部分，学习并了解它，即有效的帮助我们理解React ！React 主要生命周期说明：
                    <p className='color-green'>1、componentWillMount => 组件渲染前调用，Dom 元素还没有构建完成，但是我们可以获取this.state 组件中状态</p>

                    <p className='color-green'>2、componentDidMount => 组件完成时调用的钩子，这时我们可以获取元素。一般在这里我们做网络请求的操作。</p>

                    <p className='color-green'>3、componentWillReceiveProps => 当组件Props 或者 state 数据发生更新时调用该钩子。这时候Dom 并未发现改变，即未执行 render 动作</p>

                    <p className='color-green'>4、componentWillUpdate => 当组件接收到新的props 或者 state 但还没有render时调用，在应用初始化时不调用</p>

                    <p className='color-green'>5、componentDidUpdate  => 在组件完成更新后立即调用。在应用初始化时不调用</p>

                    <p className='color-green'>6、componentWillUnmount => 组件销毁。当组件中Dom 中移除是触发该钩子。</p>
                </pre>
            </div>
        )
    }
}

class CommponentLife extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number:0,
        }
    }
    render() {
        return(
            <div>
                <SubHeader title='React 组件的生命周期'/>
                <Content message={this.state.number}/>
                {/* <p>{this.props.count}</p> */}
                <button onClick={this.onUpdate.bind(this)}>切换控制台查看打印的生命周期 执行</button>
            </div>
        )
    }
    onUpdate() {
        this.setState({
            number:this.state.number + 1
        })
    }
}



export default hot(module)(CommponentLife);