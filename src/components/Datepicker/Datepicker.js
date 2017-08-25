import React, {Component} from 'react';
import $ from 'jquery'

class Datepicker extends Component {
    componentDidMount(){
        this.$el = $(this.el)
        this.$el.addClass("blue");
        
    }

    componentWillUnmount() {
       //destory plugin here
    }
  
    render(){
        return (
        <input type='text' ref={el => this.el = el}/>
        )
    }
}

export default Datepicker;