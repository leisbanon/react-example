import React from 'react'
import PropTypes from 'prop-types'
import {hot} from 'react-hot-loader'

import {SubHeader} from '@/components/index.js'

const Component = (props) => {
    const seeProps = () => {
        alert(JSON.stringify(props));
    }
    return(
        <div className='x-props'>
            <SubHeader title='组件 与 组件之间的数据传递-- porps'/>
            <p>书籍名称：{props.bookName}</p>
            <p>书籍价格：{props.bookPrice} RMB</p>
            <p>作者：{props.author}</p>
            <p><button onClick={seeProps}>查看组件接收的Props Data</button></p>
            <hr/>

            <pre>
                <p>Props 作用在于组件之间的传值。state 和 props 区别在于，props是不可变的，而state是可以改变的值，来进行页面的交互。</p>
                <p>React 组件之间的传值非常简单，和Vue 类似，但是相比Vue更加简洁，示例：</p>

                <div className='color-green'>//父组件定义需要传输的值，当然可以是Object 或者 String类型 或者是  element</div>
                <div>{`<Content bookName='西游记' bookPrice='200'/>`}</div>

                <p className='color-green'>// 子组件接收父组件的数据</p>
                <div>
                    <pre>
                        <div>第一种方式：我们定义成函数的形式，这样更加简洁方便</div>
                        <code>
                            {`
                            const Content = (props) =>  {
                                return(
                                    <div></div>
                                )
                            }
                            `}
                        </code>
                        <div>第二种方式，定义成Es6 class 对象的，当然在任何时候这也是推荐的</div>
                        <code>
                            {`
                                class Book extends React.Component {
                                    constructor(props) {
                                        super(props);
                                    }
                                    render(
                                        <div></div>
                                    )
                                }
                            `}
                        </code>
                    </pre>
                </div>
            </pre>

            <SubHeader title='定义组件默认的Props'/>
            <p>我们可以为组件类的 defaultProps 设置其默认的Props Data：</p>
            <pre>{`
            Content.defaultProps = {
                author:'未填写',
            }
            `}</pre>

            <SubHeader title='Props 基本数据类型校验'/>
            <p>React 引入可以对Porps 数据校验的工具，当校验传入的数据不匹配时，JavaScrip控制台会发出警告！</p>
            <div className='color-red'>注意：在React v15.5版本后，React.PropTypes 已经移步到prop-types库中！</div>
            <pre>
                <span className='color-green'>安装：npm i prop-types --save-dev</span>
                {`
                /**
                 * React Props 校验。当校验传入的数据不匹配时，JavaScrip控制台会发出警告
                 * 注意：在React v15.5版本后，React.PropTypes 已经移步到prop-types库中！ 安装：npm i prop-types --save-dev
                 * 
                 * 1、Props 指定基本数据类型：
                 * PropTypes.string
                 * PropTypes.number
                 * PropTypes.array
                 * PropTypes.func
                 * PropTypes.object
                 * PropTypes.bool
                 */

                 const Content = () => (
                     ...
                 );
                `}
                <span className='color-green'>// Props 基本数据类型校验</span>
                {`
                Content.propTypes = {
                    bookPrice:PropTypes.number
                }
                `}
            </pre>
            <p><strong>更多Props 验证器说明：</strong></p>
            <pre>
            <code>{`
            MyComponent.propTypes = {
                `}
                <span className='color-green'>// 可以声明 prop 为指定的 JS 基本数据类型，默认情况，这些数据是可选的</span>
                {`
               optionalArray: React.PropTypes.array,
                optionalBool: React.PropTypes.bool,
                optionalFunc: React.PropTypes.func,
                optionalNumber: React.PropTypes.number,
                optionalObject: React.PropTypes.object,
                optionalString: React.PropTypes.string,
             
                `}
                <span className='color-green'>// 可以被渲染的对象 numbers, strings, elements 或 array</span>
                {`
                optionalNode: React.PropTypes.node,
             
                `}
                <span className='color-green'>//  React 元素</span>
                {`
                optionalElement: React.PropTypes.element,
             
                `}
                <span className='color-green'>// 用 JS 的 instanceof 操作符声明 prop 为类的实例。</span>
                {`
                optionalMessage: React.PropTypes.instanceOf(Message),
             
                `}
                <span className='color-green'>// 用 enum 来限制 prop 只接受指定的值。</span>
                {`
                optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),
             
                `}
                <span className='color-green'>// 可以是多个对象类型中的一个</span>
                {`
                optionalUnion: React.PropTypes.oneOfType([
                  React.PropTypes.string,
                  React.PropTypes.number,
                  React.PropTypes.instanceOf(Message)
                ]),
             
                `}
                <span className='color-green'>// 指定类型组成的数组</span>
                {`
                optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),
             
                `}
                <span className='color-green'>// 指定类型的属性构成的对象</span>
                {`
                optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),
             
                `}
                <span className='color-green'>// 特定 shape 参数的对象</span>
                {`
                optionalObjectWithShape: React.PropTypes.shape({
                  color: React.PropTypes.string,
                  fontSize: React.PropTypes.number
                }),
             
                `}
                <span className='color-green'>// 任意类型加上 isRequired 来使 prop 不可空。</span>
                {`
                requiredFunc: React.PropTypes.func.isRequired,
             
                `}
                <span className='color-green'>// 不可空的任意类型</span>
                {`
                requiredAny: React.PropTypes.any.isRequired,
             
                `}
                <span className='color-green'>// 自定义验证器。如果验证失败需要返回一个 Error 对象。不要直接使用 console.warn 或抛异常，因为这样 oneOfType 会失效。</span>
                {`
                customProp: function(props, propName, componentName) {
                  if (!/matchme/.test(props[propName])) {
                    return new Error('Validation failed!');
                  }
                }
              }
            }
            `}</code>
            </pre>
        </div>
    )
}

//可以在组件中定义默认的Props Data
Component.defaultProps = {
    author:'未填写',
}

//Props 数据类型校验
Component.propTypes = {
    bookPrice:PropTypes.number
}

class Book extends React.Component {
    render() {
        return(
            <div>
                <Component bookName='西游记' bookPrice={200}/>
            </div>
        )
    }
}

export default hot(module)(Book);