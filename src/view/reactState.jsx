import React from 'react'
import {hot} from 'react-hot-loader'
import { SubHeader } from '@/components/index'

 class User extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
            username:'GuanQun',
            address:'上海松江漕河泾开发区',
         }
     }
     componentDidMount() {
         setTimeout(() => {
             this.setState({
                 username:'蒋冠群',
             })
         }, 1000);
     }
     x_btn() {
         this.setState({
            address:'湖南长沙市望城区'
         })
     }
     render() {
        return(
            <div className='view-1'>
                <SubHeader title='React 组件状态'/>
                <pre>
                    <h3>React State 状态机</h3>
                    <p>&emsp;&emsp;1、React 状态管理，通过页面之间的交互，只需要修改State，然后渲染Dom. 因此State 意义在于，当需要更新组件时，我们只需要更新Sate 即可。</p>
                    <div>&emsp;&emsp;2、在React 组件中，每个组件拥有自己独立的state 状态。</div>
                    <code><br/>
                        <div className='color-green'>// 定义状态，在Es6 class constructor 方法中定义：{`this.state = {...}`}</div>
                        {`
                            class User extends React.Component {
                                constructor(props) {
                                    super(props);
                                    this.state = {
                                        username:'GuanQun',
                                        address:'上海松江漕河泾开发区',
                                    }
                                }
                            }
                        `}
                        <div className='color-green'>修改状态，使用:{`this.setState({...})`}</div>
                        <code>
                            {`
                            this.setState({
                                username:'蒋冠群',
                            })
                            `}
                        </code>
                    </code>
                </pre>
                <p>姓名：{this.state.username}</p>
                <p>地址：{this.state.address}</p>

                <p>
                    <button onClick={this.x_btn.bind(this)}>this.setState({`{...}`})</button>
                </p>
            </div>
        )
     }
 }

 export default hot(module)(User);
 