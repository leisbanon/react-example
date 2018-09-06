import React from 'react'

import {
    SubHeader
} from '../components/index'

class DomRender extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin:false,
        }
    }
    /**
     *  Reacrt 条件渲染和 JavaScript 条件判断上是一致的。不同只是语法上的区别。
     * 
     * 使用方法：
     *  1、判断条件我们可以写在render 函数之中，当逻辑判断比较复杂的时候，在这里语法上更加清晰，易阅读。
     *  2、也可以在JSX 语法中使用，条件判断用{} -- 花括号将代码包裹在其中。
     */
    render() {
        let button = null;
        let isLogin = this.state.isLogin;
        if(!isLogin) {
            button = <p><button onClick={this.handLogout.bind(this)}>登录</button></p>
        }else {
            button = <p><button onClick={this.handLogin.bind(this)}>登出</button></p>
        }
        return(
            <div className='render-dom'>
                <SubHeader title='React 条件渲染'/>
                <p>&emsp;&emsp;React 好用之处在于 其语法特性和JavaScript 语法特性类型， 条件渲染和JS 中都是一样。因此在可扩展性上是比较好用的，唯一可能当项目越来也大，代码体积越大带来的可维护性变差，在可读性上认为并不是很清晰。但是如何如果很好的利用模块化以及组件化的开发的基础上，React 综合还是非常好用的。</p>
                <pre>
                    <div>看在React 中条件判断是如何在语法上保持一致的：</div>
                    <code>
                        {`
            const Content = () => {
                let button = null;
                let isLogin = this.state.isLogin;
                if(!isLogin) {
                    button = <p><button onClick={this.handLogout.bind(this)}>登录</button></p>
                }else {
                    button = <p><button onClick={this.handLogin.bind(this)}>登出</button></p>
                }
                
                return(
                    <div>
                        {button} 
                    </div>
                )
            }
                        `}
                    </code>
                    <div>当JS 逻辑相对复杂时，代码处理块使用上面的形式，否则使用JS 三表表达也是非常有效:</div>
                    <div>&emsp;&emsp;{`isLogin ? '以登录' : '已登出'`}</div>
                </pre>
                {button}

                {/* 在JSX 中使用条件判断 */}
                <strong>
                    {
                        isLogin ? '以登录' : '已登出'
                    }
                </strong>
            </div>
        )
    }

    handLogin() {
        this.setState({
            isLogin:false,
        })
    }
    handLogout() {
        this.setState({
            isLogin:true,
        })
    }
}

export default DomRender;