import React from 'react'
import {
    SubHeader
} from '../components/index'

class Ajax extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address:'加载中......',
        }
    }
    componentDidMount() {
        this.fetchData().then(values => {
            this.setState({
                address:values
            })
        })
    }
    fetchData(){
        // Promise 模拟网络异步请求
        let promise = new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve('上海市松江区');
            }, 2000);
        })
        return promise;
    }

    render() {
        return(
            <div className='ajax'>
                <SubHeader title='React Ajax 异步网络请求的处理'/>
                <p>地址：{this.state.address}</p>
                <pre>
                    <code>
                    {`
                        // Promise 模拟网络异步请求
                        let promise = new Promise((resolve,reject) => {
                            setTimeout(() => {
                                resolve('上海市松江区');
                            }, 2000);
                        })

                        promise.then(values => {
                            this.setState({
                                address:values
                            })
                        })
                        
                    `}
                    </code>
                </pre>
            </div>
        )
    }
}

export default Ajax;