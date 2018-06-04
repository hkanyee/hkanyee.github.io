import React, { Component } from 'react';
import { Layout, Menu} from 'antd';
import './App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Fp from './fp'
import Artical from './artical'
import Demo from './demo'
import Shop from './shop'
const { Header, Footer } = Layout;


class App extends Component {

  render() {
    return (
      <Router>
      <div>
        <Layout className="layout">
    <Header>
      <div className="logo" >hkanye的博客</div>
      <Menu
        theme="dark"
        mode="horizontal"

        style={{ lineHeight: '64px' }}>
            <Menu.Item key="1"><Link to="/">首页</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/demo">demo</Link></Menu.Item>
      </Menu>
    </Header>
    <Route exact path="/" component={Fp} />
    <Route path="/artical/:id"  component={Artical}/>
    <Route path="/demo" component={Demo} />
    <Route path="/shop" component={Shop} />
    <Footer style={{ textAlign: 'center' }}>
      made by hkanye
    </Footer>
  </Layout>
      </div>
    </Router>
    );
  }
}

export default App;
