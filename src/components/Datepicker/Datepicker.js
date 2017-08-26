import React, {Component} from 'react';
import $ from 'jquery'
import 'jquery-ui/ui/widgets/datepicker';

class Datepicker extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
       // this.setState({value: event.target.value});
    }

    componentDidMount(){
        this.$el = $(this.el)
        this.$el.datepicker({
            onSelect:(a,b,c)=>{
                console.log(a,b,c);
                this.setState({value:a})
            }
        });
        
    }

    componentWillUnmount() {
       //destory plugin here
       this.$el.datepicker( "destroy" );
    }
  
    render(){
        return (
        <input type='text' 
                ref={el => this.el = el}
                onChange={this.handleChange} />
        )
    }
}

export default Datepicker;