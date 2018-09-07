import React from 'react'
import { hot } from 'react-hot-loader'
import {SubHeader } from '@/components/index'

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message:'Hello React Refs',
        }
    }
    render() {
        return(
            <div>
                <SubHeader title='通过refs 获取子组件中的实例'/>
            </div>
        )
    }
    getMessage(params) {
        alert(params);
    }
}

class Refs extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <SubHeader title='获取组件元素对象'/>
                <p><input ref='userName' type="text" name='name' placeholder='请输入用户名'/></p>
                <div><button onClick={this.getUserName.bind(this)}>使用 React Refs 获取 Input Element</button></div>
                <pre>
                    <div>同Vue,React 同样提供ref 属性，不同在于,Vue使用this.$refs，React 使用 this.refs。</div>
                    <p>通过该属性我们可以直接获取组件的元素，通过 ref 我们可以访问其DOM 元素，如下实例通过ref 获取 Input 的值:</p>

                    <div className='color-green'>// 指定组件中元素绑定 ref 属性</div>
                    <div>{`<input ref='userName' type="text" name='name' placeholder='请输入用户名'/>`}</div>
                    <div className='color-green'>// 通过this.refs 获取Input 对象值</div>
                    <div>{`this.refs.userName.value;`}</div>
                </pre>

                <Content ref='contentCom'/>
                <pre>
                    <p>当然我们可以通过refs 属性获取任何子组件的实例，这使得在组件上的应用更加灵活，而在代码层次即不显得复杂，突显React在语法可扩展上的强的优势。</p>

                    <div className='color-green'>// 在父组件中定义ref 属性</div>
                    <div>{`<Content ref='contentCom'/>`}</div>

                    <br/>

                    <div className='color-green'>// 通过this.refs 调用组件中的方法</div>
                    <div>{`let content = this.refs.contentCom;
                        content.getMessage('Hello React Refs')
                    `}</div>
                </pre>
                <p><button onClick={this.getContent.bind(this)}>通过refs 获取子组件中的实例</button></p>
            </div>
        )
    }
    getUserName() {
        let name = this.refs.userName.value;
        alert(name);
        console.log(name);
    }
    getContent() {
        let content = this.refs.contentCom;
        content.getMessage('Hello React Refs')
    }
}

export default hot(module)(Refs)