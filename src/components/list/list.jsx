import React from 'react';
import './list.css'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    withRouter,
  } from 'react-router-dom'

import {routers} from '@/router/router'

const Content = withRouter(({history,location,match}) => {
    console.log(match.url);
    return(
        <div className='list'>
            <p onClick={() => history.push(`${match.path}/reactState`)}>0、组件中状态管理 => state 属性的使用</p>
            <p onClick={() => history.push(`${match.path}/reactProps`)}>1、数据传递，Props 属性</p>
            <p onClick={() => history.push(`${match.path}/reactEvent`)}>2、React的事件处理</p>
            <p onClick={() => history.push(`${match.path}/reactRendering`)}>3、React 条件渲染</p>
            <p onClick={() => history.push(`${match.path}/reactList`)}>4、React 列表循环</p>
            <p onClick={() => history.push(`${match.path}/componentLife`)}>5、React 生命周期</p>
            <p onClick={() => history.push(`${match.path}/reactAjax`)}>6、React 中如何执行Ajax 异步请求</p>
            <p onClick={() => history.push(`${match.path}/reactForm`)}>7、React Form 表单的处理</p>
            <p onClick={() => history.push(`${match.path}/components`)}>8、子父组件之间的通讯</p>
            <p onClick={() => history.push(`${match.path}/refs`)}>8、refs 绑定，获取组件中元素</p>
        </div>
    )
})


class List extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.match.url);
    }
    render() {
        return(
            <div className='app-container'>
                <Content />
                <Switch>
                    {
                        routers.map((route,index) => {
                            return(
                                <Route
                                key={index}
                                exact
                                path={`${this.props.match.url}` + route.path}
                                component={route.component}
                                />
                            )
                        })
                    }
                    
                </Switch>
            </div>
        )
    }
}


export default List;