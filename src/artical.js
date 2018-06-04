import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';
import './App.css';
import {Link} from 'react-router-dom'
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

const {  Content } = Layout;
class Artical extends Component {
  constructor(props){
    super(props)
    this.state={
      data_state:"",
      content:""
    }
  }
  componentDidMount() {

    const number=this.props.match.params.id
    const url = 'https://api.github.com/repos/hkanye/blogg/issues?creator=hkanye&labels=';
    axios.get(url).then((response) => {

      const data = response.data;
      const number_artical=data.length-number
      const articleContent=data[number_artical].body
      this.setState({data_state:data,content:articleContent});
      // 取出数据放到state中
      // console.log(this.state.data_state);

    }).catch(e => console.log(e));

  }

  render() {

    const input = this.state.content;
    const number=this.props.match.params.id
    
    return (

      <div>
        <Layout className="layout">

        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            {/* 面包屑这个要改 */}
            <Breadcrumb.Item><Link to="/">主页</Link></Breadcrumb.Item>
            <Breadcrumb.Item>文章{number}</Breadcrumb.Item>
            {/* <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item> */}
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <ReactMarkdown source={input} />
          </div>
        </Content>

        </Layout>
      </div>

    );
  }
}

export default Artical;
