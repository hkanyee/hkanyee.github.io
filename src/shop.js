import React, { Component } from 'react';
import { Layout,Breadcrumb} from 'antd';
import p3 from './img/333.png';
import p4 from './img/444.png';
import p5 from './img/555.png';
const {  Content } = Layout;
class Shop extends Component {
  render(){
    return(
      <div>
        <Layout className="layout">

        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>shop</Breadcrumb.Item>
            {/* <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item> */}
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280,textAlign:'center' }}>
          <h2>一个简单的购物功能实现</h2>
          <h3>使用技术栈</h3>
          <h3>
            <ul>
              <li>react</li>
              <li>react-router</li>
              <li>antd</li>
              <li>express</li>
              <li>mongodb</li>
            </ul>
          </h3>
          <h3>代码地址：github.com/hkanyee/hkanyee.github.io</h3>
          <img src={p3} alt="show3" style={{width:'900px'}}/><br/><br/>
          <img src={p4} alt="show4" style={{width:'900px'}}/><br/><br/>
          <img src={p5} alt="show5" style={{width:'900px'}}/><br/><br/>
          </div>

        </Content>

        </Layout>
      </div>
    )
  }

}
export default Shop
