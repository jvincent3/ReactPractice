var React = require('react');


class CheckBox extends React.Component{

	constructor(props) {
		super(props);
		this.state = {checked:true};

		this.handleChecked = this.handleChecked.bind(this);
	}
	handleChecked(){
		this.setState({checked: !this.state.checked})
	}

  render() {
  		var msg;
  		if(this.state.checked){
  			msg= 'checked'
  		} else {
  			msg= 'unchecked'
  		}

    return (<div>
			    <input type="checkbox" onChange={this.handleChecked} defaultChecked={this.state.checked} />
			    <h3>Check box is {msg}</h3>
			</div>);
    	
  }
}

module.exports = CheckBox;
