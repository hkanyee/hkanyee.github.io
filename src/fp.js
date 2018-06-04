import React, { Component } from 'react';
import { Layout,Breadcrumb,Card,Carousel } from 'antd';
import './App.css';
import {Link} from 'react-router-dom'
import axios from 'axios';

const {  Content } = Layout;
class Fp extends Component {

  constructor(){
    super()
    this.state={

      data_state:""
    }
  }
  componentDidMount() {

    const url = 'https://api.github.com/repos/hkanye/blogg/issues?creator=hkanye&labels=';
    axios.get(url).then((response) => {
      const data = response.data;
      this.setState({data_state:data});
      // console.log({data_state});
      console.log(this.state.data_state[0].updated_at.substring(0,10));
    }).catch(e => console.log(e));
  }

  render() {

    var items = [];
    var getState=this.state.data_state
    const gridStyle = {
      width: '33%',
      textAlign: 'center',
      backgroundColor:'white'
    };
    for (var i = 0; i < getState.length; i++) {
        items.push(
          <Card.Grid style={gridStyle}>
            <Link to={`/artical/${getState[i].number}`} ><h1>{getState[i].title}</h1></Link>
            <span>{getState[i].updated_at.substring(0,10)}</span>
          </Card.Grid>
      );
    }

    return (
      <div>
        <Layout className="layout">

        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            {/* <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item> */}
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>

            <Carousel autoplay>
             <div><Link to="/artical/12"><h1>购物车实现笔记</h1></Link></div>
             <div><Link to="/artical/11"><h1>博客实现笔记</h1></Link></div>
             <div><Link to="/artical/9"><h1>es6笔记</h1></Link></div>
           </Carousel>

            <Card className="cardd">
              {items}
            </Card>

          </div>

        </Content>

        </Layout>
      </div>

    );
  }
}

export default Fp;
