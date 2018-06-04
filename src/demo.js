import React, { Component } from 'react';
import { Layout,Breadcrumb,Card } from 'antd';
import './App.css';
import p1 from './img/111.png'
import p2 from './img/333.png'
import {Link} from 'react-router-dom'
const {  Content } = Layout;
const { Meta } = Card;
class Demo extends Component {

  render() {

    return (

      <div>
        <Layout className="layout">

        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>demo</Breadcrumb.Item>
            {/* <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item> */}
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <a href="http://hkanye.github.io">
              <Card
              hoverable
              style={{ width: '100%'}}
              cover={<img alt="example" src={p1} />}
            >

              <Meta
                title="react实现的timer每日学习计划"
                description="https://github.com/hkanye/hkanye.github.io"
              />
            </Card>
          </a>
          <br/><br/><br/><br/><br/>
          <Link to="/shop">
            <Card
              hoverable
              style={{ width:'100%'}}
              cover={<img alt="example" src={p2} />}
            >
              <Meta
                title="react实现的购物车"
                description="https://github.com/hkanyee/mongo_react_shop"
              />
            </Card>
          </Link>

          </div>
        </Content>

        </Layout>
      </div>

    );
  }
}

export default Demo;
