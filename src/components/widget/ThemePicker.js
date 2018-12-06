import React from 'react';
import {SketchPicker} from 'react-color'
class ThemePicker extends React.Component{
    constructor(){
        super();
        this.state={
            backgroundColor:"#fff"
        }
    }
    handleChangeComplete = (color) => {
        this.setState({ backgroundColor: color.hex });
        console.log(this.state.backgroundColor);
        localStorage.setItem('@primary-color', color.hex);
        window.less.modifyVars({
            '@primary-color': color.hex,
        })
      };
    render() {
        return <SketchPicker 
        color={ this.state.backgroundColor }
        onChangeComplete={ this.handleChangeComplete }/>
      }
}
export default ThemePicker;