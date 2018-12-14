import React from 'react';
import { Layout, Breadcrumb, Affix, Button,Input} from 'antd';
import "./style/layout/layout.css"
import Sidercomponent from './components/layout/sider'
import ThemePicker from './components/widget/ThemePicker'
const { Header, Content, Footer } = Layout;

class App extends React.Component {
  state = {
    themeSwitch:true, //主题开关
    background:'#112E4F',
   
  }
  bgchange=(color)=>{
    this.setState({
      background:color
    });
    console.log(color);
  }
  ThemeChangeBtn=()=>{ //自定义主题按钮
    this.setState({
      themeSwitch:!this.state.themeSwitch
     
    })
    console.log(this.state.themeSwitch)
  }
  
  render(props) {
    return (
      <Layout className='layoutBd' >
       {/*左侧菜单栏*/}
        <Sidercomponent //bgColor={this.state.background}
        ></Sidercomponent>

        <Layout>
          <Header  /*style={{'background':this.state.background}}*/
          />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              Bill is a cat.
              <Button>
                按钮
              </Button>
              <Input></Input>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            浙江省杭州市强凌科技有限公司@2018
          </Footer>
        </Layout>
        <Affix style={{position:'absolute',top:'11%',right:'20px'}} onClick={()=>{this.ThemeChangeBtn()}}>
          <Button type="primary">自定义主题</Button>
        </Affix>
        <ThemePicker themeSwitch={this.state.themeSwitch} //background={this.state.background} 
        changecolor={(color)=>{this.bgchange(color)}}></ThemePicker>
      </Layout>
      
    );
  }
}

export default App;
