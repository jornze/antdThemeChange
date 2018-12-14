import React from 'react';
import { Menu, Icon} from 'antd'
const SubMenu = Menu.SubMenu;

class Menucomponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            mode: this.props.mode, //左侧菜单布局样式
            menulist:[
                {
                  "type":"home",
                  "title":"首页",
                  "list":[]
                },
                {
                  "type":"notification",
                  "title":"广告栏/通知",
                  "list":["广告栏","商城公告"]
                },
                {
                  "type":"appstore",
                  "title":"商品分类",
                  "list":["智能手机"]
                }
              ]
        }
    }

    render(){
        return(
            <Menu style={{/*background:this.props.bgColor,*/color:'#fff'}} mode={this.state.mode} defaultSelectedKeys={['home']}>
            {
   
                this.state.menulist.map( (item,index) =>{
                  if(item.list.length){
                   return (
               
                     <SubMenu //style={{'background':this.props.bgColor}}
                       key={item.type}
                       title={<span><Icon type={item.type} /><span className="nav-text">{item.title}</span></span>}
                       >
                         {
                           item.list.map((itm,ind)=><Menu.Item key={itm}>{itm}</Menu.Item>
                             
                            
                           )
                         }
                             
        
                       </SubMenu>
                   )
                  }else{
                    return (
                     <Menu.Item key='home'>
                                     <span>
                                       <Icon type={item.type} />
                                       <span className="nav-text">{item.title}</span>
                                     </span>
                     </Menu.Item>
                    )
                   
                  }
   
                 })
            }  
          
              
           </Menu>
           
        )
    }
}

export default Menucomponent