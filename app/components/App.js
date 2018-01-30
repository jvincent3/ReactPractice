var React = require('react');

class Greeting extends React.Component {
	edit() {
		alert('Editing comment');
	}
	remove() {
		alert('Removing comment');
	}
  render() {
    return (<div>
			    <div>{this.props.children}</div>
			    <button onClick={this.edit}>Edit</button>
			    <button onClick={this.remove}>Remove</button>
			</div>);
    	
  }
}

module.exports = Greeting;
