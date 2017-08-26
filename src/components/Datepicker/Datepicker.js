import React, {Component} from 'react';
import $ from 'jquery'
import 'jquery-ui/ui/widgets/datepicker';

class Datepicker extends Component {
    componentDidMount(){
        this.$el = $(this.el)
        this.$el.addClass("blue");
        this.$el.datepicker();
        
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