import React from 'react'
import {
    SubHeader
} from '../components/index'

class ComponentApi extends React.Component {
    constructor(porps) {
        super(porps);

        // 组件状态管理仓库
        this.state = {
            isLogin:false,
            token:'',
            username:'',
            count:0,
        }
    }
    render() {
        return(
            <div className='commponent-app'>
                <SubHeader title='React 组件API'/>
                <pre>
                    <strong>如何获取组件、管理组件之间的状态等，React 提供了系列的API 来管理和设置组件。</strong>
                    <div>
                        <p>1、设置组件的状态 => setState</p>
                        <p>2、替换组价的状态 => replaceState.
                            &emsp;<span>该方法非常类似于setState ,不同在于replaceState 清除原state 中所有设置的状态值。</span>
                        </p>
                    </div>
                </pre>


                <p>State Count：{this.state.count}</p>
                <button onClick={this.updateCount.bind(this)}>设置state count 数值加 1</button>
            </div>
        )
    }
    /**
     * 设置组件的状态
     */
    updateCount() {
        let count = this.state.count + 1;
        this.setState({
            count:count
        },() => {
            console.log('设置成功');
        })
    }
}

export default ComponentApi;