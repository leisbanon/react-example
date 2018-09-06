import React from 'react'
import {
    SubHeader
} from '../components/index'


const Content = (props) => {
    return(
        <div>
            <br/>
            <table className='book-table'>
                <tbody>
                    <tr>
                        <td>书籍名称</td>
                        <td>价格</td>
                    </tr>
                    {props.itemList}
                </tbody>
            </table>
            <pre>
                <p>在 React 中，选渲染系列的列表没有特定的格式。和传统JavaScipt遍历创建列表的方式类似，不同于React 使用Es6 的新特性，大大提交代码的简洁性。</p>
                <div>
                    <div>标记：</div>
                    <div>&emsp;&emsp;1、React 遍历创建元素，组件接收数组参数，每个列表需要分配一个 key 值，不然会报错! 组件的key 值应该是唯一的，意义在于每个元素的唯一标识。</div>
                    <br/>
                    <div className='color-green'>1、Creact React Element Dom List </div>
                    <code>
                    {`
                    class List extends React.Component {
                        constructor(props) {
                            super(props);
                            this.state = {
                                dataList:[],
                            }
                        }

                        fetchData() {
                            let obj = {
                                data:[
                                    {bookName:'西游记',bookPrick:'40'},
                                    {bookName:'三国演义',bookPrick:'30'},
                                    {bookName:'水浒传',bookPrick:'60'},
                                    {bookName:'红楼梦',bookPrick:'50'},
                                ]
                            }
                            this.setState({
                                dataList:[...obj.data]
                            })
                        }

                        componentDidMount() {
                            this.fetchData();
                        }

                        render() {
                            const itemList = this.state.dataList.map((v,index) => 
                                <tr key={index}>
                                    <td>{v.bookName}</td>
                                    <td>{v.bookPrick}</td>
                                </tr>
                            )
                            
                            retuern(
                                <div>
                                    <table>
                                        <tbody>
                                            {itemList}
                                        </tbody>
                                    </table>
                                </div>
                            )
                        }
                    }
                    `}
                    </code>
                </div>
            </pre>
        </div>
    )
}

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList:[],
        }
    }
    fetchData() {
        let obj = {
            data:[
                {bookName:'西游记',bookPrick:'40'},
                {bookName:'三国演义',bookPrick:'30'},
                {bookName:'水浒传',bookPrick:'60'},
                {bookName:'红楼梦',bookPrick:'50'},
            ]
        }
        this.setState({
            dataList:[...obj.data]
        })
    }
    componentWillMount() {
        this.fetchData();
    }
    componentDidMount() {
        // this.fetchData();
    }
    /**
     * React 列表渲染。使用Es6 Map创建列表
     * 在 React 中，选渲染系列的列表没有特定的格式。和传统JavaScipt遍历创建列表的方式类似，不同于React 使用Es6 的新特性，大大提交代码的简洁性。
     * 
     * 注意：
     *  1、React 遍历创建元素，组件接收数组参数，每个列表需要分配一个 key 值，不然会报错! 组件的key 值应该是唯一的，意义在于每个元素的唯一标识。
     */
    render() {
        const itemList = this.state.dataList.map((v,index) => 
            <tr key={index}>
                <td>{v.bookName}</td>
                <td>{v.bookPrick}</td>
            </tr>
        )

        return(
            <div className='list-reder'>
                <SubHeader title='React 列表渲染'/>
                <Content itemList={itemList}/>
            </div>
        )
    }
}

export default List;