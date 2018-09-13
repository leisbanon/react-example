import React from 'react'
import { hot }  from 'react-hot-loader'
import {
    SubHeader
} from '../components/index'

import '@/style/button.css'



const {Provider,Consumer} = React.createContext('eui-btn-white');

const Button = ({text = '默认按钮'}) => {
    return(
        <Consumer>
            {value => 
                <button className={`eui-btn ${value}`}>{text}</button>
            }
        </Consumer>
    )
}

class Context extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <SubHeader title='React Context 属性的使用'/>
                <p>&emsp;&emsp;在典型了React 应用中，组件之间的数据传递通过Props 属性有上向下（从父级到子级）的传递过程。对于一些应用中共享的数据，例如UI 主题，全局共享的用户信息等。这些数据通过Props 传递则会非常的繁琐！随着应用的越来越来，父组件包裹子组件的层级越来越多，这样的话，我们则不能一级一级向子组件传递Props Data.</p>
                <p>&emsp;&emsp;如何解决这个问题，React Context 属性提供了一个组件之间数据共享的方法，通过使用React Contex 属性我们就不必要通过组件树将Props 每一层显式的传递了</p>
                <p className='color-red'><strong>说明：</strong></p>
                <div>&emsp;&emsp;随着React 版本的更新，以前老版本的React Context 的是通过组件的childContextTypes 以及 getChildContext 属性来向下传递我们的数据，这是以前实验性的Context API了。没办法，它更新我们还得按照它的来。最新react context api 版本更新应该是在16.3 中，当我们的React Version 在16.3 或者16.3 以后的我们应该使用最新的Context Api. 因此后期版本的更新会废除实验版本的context.参考：<a href="https://react.docschina.org/docs/context.html#%E9%81%97%E7%95%99-api" target='_black'>Legacy Context</a></div>

                <hr/>
                <p className='color-green'>使用Context属性。下面一个实例Dome 创建一个主题颜色的按钮：</p>
                <pre>
                <code>{`
                import React from 'react'
                import '@/style/button.css'
                `}
                <span className='color-green' style={{'whiteSpace':'normal'}}>// 首先创建我们的 React Context。createContext 返回一个组件对象,分别是Provider 以及 Consumer组件 ，下面介绍我们如果使用这两个组件。createContext() 参数接收一个默认的context，当给予默认的context时，如果组件没有被Consumer所订阅，即上层组件没有被Provider所包裹，那么该组件接收context 将是默认声明的context</span>
                {`
                const {Provider,Consumer} = React.createContext('eui-btn-white');

                const Button = ({text = '默认按钮'}) => {
                    return(
                        `}
                        <span className='color-green' style={{'whiteSpace':'normal'}}>//使用Consumer包裹我们的子组件，它可以监听Context的变化。</span>
                        {`
                        <Consumer>
                            `}
                            <span className='color-green'>{`// <Consumer> 组件接收一个函数做一个子节点，函数接收当前的contex 值并返回一个React 节点`}</span>
                            {`
                            {value => 
                                <button className={'eui-btn'+' '+value}>{text}</button>
                            }
                        </Consumer>
                    )
                }

                const Context = () => (
                    <div>
                        `}
                        <span className='color-green'>{`// 这里没有使用<Provider> 组件包裹，那么它将使用默认的context data`}</span>
                        {`
                        <Button/>
                        `}
                        <span className='color-green'>//声明Provider ，它允许Consumer 监听context的变化。一个必须的字段value，表示传递我们需要的context data</span>
                        {`
                        <Provider value='eui-btn-bluy'>
                            <Button text='主要按钮'/>
                        </Provider>
                    </div>
                );
                
                export default Context;
                `}</code>
                </pre>

                <p>button.css：</p>
                <pre>
                <code>{`
                .eui-btn{margin-top: 20px;margin-left: 20px;}

                .eui-btn:hover{opacity: 0.8;}

                .eui-btn:active{opacity: 0.6;}

                .eui-btn-white{display: inline-block;line-height: 1;cursor: pointer;background: #fff;border: 1px solid #dcdfe6;color: #606266;text-align: center;outline: none;padding: 12px 20px;font-size: 14px;border-radius: 4px;user-select: none;}

                .eui-btn-bluy{display: inline-block;line-height: 1;cursor: pointer;background: #409eff;border: 1px solid #409eff;color: #fff;text-align: center;outline: none;padding: 12px 20px;font-size: 14px;border-radius: 4px;user-select: none;}
                `}</code>
                </pre>

                <Button/>
                <Provider value='eui-btn-bluy'>
                    <Button text='主要按钮'/>
                </Provider>
                <p className='color-green'>&emsp;&emsp;需要提醒的是，React Context 是React 高级功能。对于应用需要全局共享的数据时，我们推荐使用它！但是如果我们的应用搭载了Redux 状态管理工具，这样的话，我们应该使用react-redux 提供的提供的 Provider 组件。当然这也是推荐这样去做的，因为绝大部分React 项目中都使用Redux，它和React 能很好的搭配使用！关于如何学习Redux 以及 配合react-redux 的使用，您可以参考这一篇文章的实例应用:</p>
                <a href="http://www.leileix.com/react-redux-example" rel="noopener noreferrer" target='_blank'>http://www.leileix.com/react-redux-example</a>
                
            </div>
        )
    }
}

export default hot(module)(Context)