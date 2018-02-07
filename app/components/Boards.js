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
		var val = this.refs.newText.value;
		console.log("New comment:" + val);
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
				<textarea ref="newText" defaultValue={this.props.children}></textarea>
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

class Board extends React.Component{
	constructor(props){
	super(props);
		this.state = {comments:
			[
			'test1',
			'test2',
			'test3'
			]
		}
		this.render = this.render.bind(this);

	}
	render() {
		return (
			<div className="board">
			{
				this.state.comments.map(function(text,i) {
					return (<Comment key={i}>{text}</Comment>);
				})
			}
			</div>
			);
	}
}

module.exports = Board;