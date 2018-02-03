var React = require('react');

class Comment extends React.Component{

	constructor(props){
		super(props);
		this.state = {editing:false}

		this.edit = this.edit.bind(this);
		this.save = this.save.bind(this);
	}

	edit(){
		this.setState({editing:true})

	}

	remove(){
		console.log('Removing comment');
	}

	save(){
		this.setState({editing:false});
	}
	renderNormal(){
		return (
			<div>
				<div className="commentText">{this.props.children}</div>
				<button onClick={this.edit} className="button-primary">Edit</button>
				<button onClick={this.remove} className="button-danger">Remove</button>
			</div>
			);
	}
	renderForm(){
		return (
			<div className="commentContainer">
				<textarea defaultValue={this.props.children}></textarea>
				<button onClick={this.save} className="button-primary">Save</button>
			</div>	
			);
	}

	render() {
		if(this.state.editing){
			return this.renderForm();
		}else{
			return this.renderNormal();
		}
	}

}


module.exports = Comment;