import React from 'react'
import { hot } from 'react-hot-loader'

import { SubHeader } from '@/components/index'


const Parent = (props) => {
    let onBtn = () => {
        // 解耦赋组件Props 中的方法，并调用该方式实现子组件向父组件发送数据的功能
        let {emit} = props;
        emit('hello react component')
    }
    return(
        <main>
            <p>这里我们接受到的Props Data：{JSON.stringify(props)}</p>
            
            <p><button onClick={() => onBtn()}>子组件调用父组件中的方法，并传入参数</button></p>
        </main>
    )
}

class ComponentMes extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <SubHeader title='父组件向子组件传递数据'/> 
                <Parent message='Hello React Stack' emit={this.emit.bind(this)}/>
                <pre>
                    子组件接收来自父组件Data，非常简单在 父组件绑定需要传输的Props ，子组件方法中参数即是接收到的Props Data.相比vue，React 组件中通讯更为简便而易懂。<br/><br/>
                    <code>
                        <div className='color-green'>//如下定义一个父组件接收传入 一个message 字段：</div>
                        <div>{`<Parent message='Hello React Stack'}/>`}</div>

                        <div className='color-green'>//声明该组件，并接收来自该组件传入的参数：</div>
                        <code>{`
                        const Parent = (props) => {
                            return(
                                <main>
                                    <p>这里我们接受到的Props Data：{JSON.stringify(props)}</p>
                                </main>
                            )
                        }
                        `}</code>
                    </code>
                </pre>

                <SubHeader title='子组件如何向父组件发送数据'/> 
                <p>&emsp;&emsp;在Vue 中，子组件向父组件中发送数据，使用this.$emit(params) 触发父组件绑定函数从而可以实现向父组件发送数据。在React 中也非常类似，但是在React 中这种概念就非常清晰了。</p>
                <pre>
                    同样知道，在父组件绑定一个Props, Props Data 是一个指向组件组件中的函数。在子组件中接收Props 并调用该函数，就明白了我们如何 => 子组件如何向父组件发送数据
                    <br/><br/>

                    <div className='color-green'> //我们在组件绑定一个emit 函数</div>
                    <div>{`<Parent emit={this.emit.bind(this)}/>`}</div>

                    <div className='color-green'>// 子组件接收Porps,并调用该函数</div>
                    <code>{`
                    const Parent = (props) => {
                        let onBtn = () => {
                            `}
                            <span className='color-green'>// 解耦参数Props 中的方法，并调用该方式实现子组件向父组件发送数据的功能</span>
                            {`
                            let {emit} = props;
                            emit('hello react component')
                        }
                        return(
                            <main>
                            </main>
                        )
                    }
                    `}</code>
                </pre>
            </div>
        )
    }
    emit(params) {
        console.log(params);
        alert(params);
    }
}

export default hot(module)(ComponentMes)