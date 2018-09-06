import React from 'react'
import PropTypes from 'prop-types'
import {hot} from 'react-hot-loader'

import {SubHeader} from '@/components/index.js'

const Content = (props) => {
    return(
        <div className='x-props'>
            <SubHeader title='组件 与 组件之间的数据传递-- porps'/>
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
                                }
                            `}
                        </code>
                    </pre>
                </div>
            </pre>

            <SubHeader title='Props 基本数据类型校验'/>
            <p>React 引入可以对Porps 数据校验的工具，当校验传入的数据不匹配时，JavaScrip控制台会发出警告！</p>
            <div className='color-red'>注意：在React v15.5版本后，React.PropTypes 已经移步到prop-types库中！</div>
            <pre>
                安装：npm i prop-types --save-dev
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
                 * PropTypes.symbol
                 * 
                 * 2、不可为空：
                 * PropTypes.String.isRequired
                 */

                 const Content = () => (
                     ...
                 );
                 //Props 数据类型校验
                Content.propTypes = {
                    bookPrice:PropTypes.number
                }


                `}
            </pre>

            <p>书籍名称：{props.bookName}</p>
            <p>书籍价格：{props.bookPrice} RMB</p>
            <p>作者：{props.author}</p>
        </div>
    )
}

//可以在组件中定义默认的Props Data
Content.defaultProps = {
    author:'吴承恩',
}

//Props 数据类型校验
Content.propTypes = {
    bookPrice:PropTypes.number
}

class Book extends React.Component {
    render() {
        return(
            <div>
                <Content bookName='西游记' bookPrice={200}/>
            </div>
        )
    }
}

export default hot(module)(Book);