/**
* True/False button
*/
class Button extends React.Component{
 render(){
	 return (
		 <div>
		 <button onClick={() =>
		 {this.props.clickHandler(this.props.id, this.props.name)}	}>
			 {this.props.name}
		 </button>
		 </div>
	 )
 }
}

class TriviaApp extends React.Component{
	constructor(props){
		super(props);
		let triviaData = [
			{
				question: "What is 8x1?",
				right:1, // 0 to 3
				alts:[5, 8, 3, 9]
			},
			{
				question: "What is 8x2?",
				right:2, // 0 to 3
				alts:[23, 12, 16, 15]
			},
			{
				question: "What is 8x3?",
				right:0, // 0 to 3
				alts:[24, 15, 27, 22]
			},
			{
				question: "What is 8x4?",
				right:3, // 0 to 3
				alts:[16, 24, 28, 32]
			},
			{
				question: "What is 8x5?",
				right:1, // 0 to 3
				alts:[30, 40, 45, 28]
			},
			{
				question: "What is 8x6?",
				right:2, // 0 to 3
				alts:[36, 42, 48, 46]
			},
			{
				question: "What is 8x7?",
				right:3, // 0 to 3
				alts:[42, 48, 54, 56]
			},
			{
				question: "What is 8x8?",
				right:0, // 0 to 3
				alts:[64, 68, 48, 58]
			},
			{
				question: "What is 8x9?",
				right:2, // 0 to 3
				alts:[64, 69, 72, 76]
			},
			{
				question: "What is 8x10?",
				right:0, // 0 to 3
				alts:[80, 70, 90, 60]
			}
		];
		this.state = {
			triviaData: triviaData,
			currentQuestionPosition: 0,
			summRight: 0,
			summWrong: 0
		}
		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler(id){
		let newPos = this.state.currentQuestionPosition + 1;
		if(newPos>this.state.triviaData.length)
			return;
		let nRight = this.state.summRight;
		let nWrong = this.state.summWrong;
		console.log("id="+id);
		console.log("this.state.triviaData[this.state.currentQuestionPosition].right="+
			this.state.triviaData[this.state.currentQuestionPosition].right);
		if(id==this.state.triviaData[this.state.currentQuestionPosition].right){
				nRight++;
		}
		else {
			nWrong++;
		}
		this.setState({
			currentQuestionPosition:newPos,
			summRight:nRight,
			summWrong:nWrong
		});
		console.log("this.state.summRight="+this.state.summRight);
		console.log("this.state.summWrong="+this.state.summWrong);
		console.log("this.state.currentQuestionPosition="+this.state.currentQuestionPosition);
	}

	resetState(){
		console.log("Reset state called");
		this.setState({
			currentQuestionPosition:0,
			summRight:0,
			summWrong:0
		});
	}

	render(){
		let htmlOutput = [];
		if ( this.state.currentQuestionPosition  >=
			this.state.triviaData.length){
			htmlOutput.push(<h1>End</h1>);
			htmlOutput.push(<Button clickHandler={() => this.resetState()} name="Reset"></Button>);
		}
		else {
				let currentData = this.state.triviaData[this.state.currentQuestionPosition];
				//let nQuestions = currentData.alts.lenght;
				let nQuestions = 4;
				//let nQuestions = currentData.alts.length;
				console.log("nQuestions="+nQuestions);
				console.log("currentData="+currentData);
				htmlOutput = [];
				htmlOutput.push(<div><h1>Question:</h1><h3>{currentData.question}</h3></div>);
				for(let i=0; i<nQuestions; i++){
					htmlOutput.push(
						<Button clickHandler={this.clickHandler} id={i}
							name={this.state.triviaData[this.state.currentQuestionPosition].alts[i]} />);
						};
		}
		htmlOutput.push(
		<div>
				<hr/>
				<h3>Correct: {this.state.summRight}</h3>
				<h3>Incorrect: {this.state.summWrong}</h3>
			</div>);
		return(
			<div>
			{htmlOutput}
			</div>
		);
	}
}

ReactDOM.render(
	<TriviaApp/>,
	document.getElementById("root")
)
