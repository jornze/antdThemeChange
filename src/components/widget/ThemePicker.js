import React from 'react';
import {SketchPicker} from 'react-color'
class ThemePicker extends React.Component{
    constructor(props){
        super(props);
        this.state={
            background: localStorage.getItem('@primary-color') || '#313653',
        }
      
    }
    handleChangeComplete = (color) => {
       this.props.changecolor(color.hex);
       this.setState({
        background:color.hex
       })
       localStorage.setItem('@primary-color', color.hex);
       window.less.modifyVars({
        '@primary-color': color.hex,
    })
    .then(() => { })
    .catch(error => {
        console.log(`Failed to update theme`);
    });

      };
    render() {
        return <SketchPicker className={this.props.themeSwitch?"displayNone themepicker":"themepicker"}
        color={this.state.background}
        onChangeComplete={ this.handleChangeComplete }/>
      }
}
export default ThemePicker;