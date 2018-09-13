import React from 'react'
import PropTypes from 'prop-types'
import { hot }  from 'react-hot-loader'
import {
    SubHeader
} from '../components/index'
import '@/style/button.css'


/**
 * 无状态函数中引用Context
 * @param {Object} props 
 * @param {Object} context 
 */
const Button = (props,context) => {
    return(
        <button className={`eui-btn ${context.className}`}>{props.children}</button>
    )
}

// class Button extends React.Component {
//     constructor(props,context) {
//         super(props,context);
//         console.log('在生命周期中接收到的Context：' + JSON.stringify(context));
//     }
//     render() {
//         return (
//             <button className={`eui-btn ${this.context.className}`}>{this.props.children}</button>
//         );
//     }
// }

Button.contextTypes = {
    className:PropTypes.string
}

class Components extends React.Component {
    getChildContext() {
        return{
            className:'eui-btn-bluy'
        }
    }
    render() {
        return(
            <div>
                <SubHeader title='Legacy Context'/>
                <p>&emsp;&emsp;上一篇文章已经讲到Context 的使用方法。本文为什么还要解释该实验性的Context API？ 因为只这是为使用react-redux 得到一个更好的理解。知道react-redux 提供了一个Provider 组件，但是这个组件依然还是基于Legacy Context 实现的，正因此还学习此片文章的原因。当然如果你没有使用react-redux 您完全可以忽略该实例。</p>
                <p>一个简单的例子，下面我们定义一个按钮，按钮主题样式通过上层组件传递的Context 传给下层组件：</p>
                <p className='color-green'><strong>实例说明：</strong></p>
                <pre>
                <code>{`
                `}
                <span className='color-green' style={{'whiteSpace':'normal'}}>// 3、这里我们编写一个子下层组件，并为该组件设置contextTypes 属性</span>
                {`
                class Button extends React.Component {
                    render() {
                        return (
                            `}
                            <span className='color-green' style={{'whiteSpace':'normal'}}>// 5、现在，我们就可以获取应用所有传递的Contex了. 如下示例得知，通过this.context.className</span>
                            {`
                            <button className={this.context.className}>{this.props.children}</button>
                        );
                    }
                }
                `}
                <span className='color-green' style={{'whiteSpace':'normal'}}>// 4、为下层组件添加一个contextTypes 属性，并且定义该Context 的数据类型。这是必须的！</span>
                {`
                Button.contextTypes = {
                    className:PropTypes.string
                }
                

                class Components extends React.Component {
                    `}
                    <span className='color-green' style={{'whiteSpace':'normal'}}>// 2、上层组件定义getChildContext 方法。该方法返回一个Object对象,并定义我们所有下层组件接收的Context。</span>
                    {`
                    getChildContext() {
                        return{
                            className:'eui-btn-bluy'
                        }
                    }
                    render() {
                        return(
                            <div>
                                <Button>主要按钮</Button>
                            </div>
                        )
                    }
                }
                `}
                <span className='color-green' style={{'whiteSpace':'normal'}}>// 1、上层组件添加childContextTypes 属性。使用它来定义并且我们所有下层组件接收得Context 类型。这是必须的！</span>
                {`
                Components.childContextTypes = {
                    className:PropTypes.string
                }

                export default Components;
                `}</code>
                </pre>
                <Button>主要按钮</Button>

                <SubHeader title='无状态函数中引用Context'/>
                <pre>
                <code>{`
                const Button = (props,context) => {
                    return(
                        <button className={context.className}>{props.children}</button>
                    )
                }
                `}</code>
                </pre>


                <SubHeader title='在生命周期中使用Context'/>
                <p>如果组件定义了contextTypes，那么如下的生命周期函数将会接收到额外的参数context：</p>
                <pre>
                    <ul style={{lineHeight:'35px',fontSize:'16px'}}>
                        <li>constructor(props, context)</li>
                        <li>componentWillReceiveProps(nextProps, nextContext)</li>
                        <li>shouldComponentUpdate(nextProps, nextState, nextContext)</li>
                        <li>componentWillUpdate(nextProps, nextState, nextContext)</li>
                        <li>componentDidUpdate(prevProps, prevState, prevContext)</li>
                    </ul>
                </pre>
            </div>
        )
    }
}

Components.childContextTypes = {
    className:PropTypes.string
}

export default hot(module)(Components);