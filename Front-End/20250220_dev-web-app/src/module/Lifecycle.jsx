import React, {Component} from 'react'

class Lifecycle extends Component {
    constructor(props){
        super(props)

        this.state = {
            hello:""
        }
        console.log("constructor()")
    }
    componentWillMount(){
        console.log("componentWillMount()");
    }
    componentDidMount(){
        console.log("componentDidMount()")
    }
    changeState(){
        this.setState({hello:"User"})
    }

    render(){
        return(
            <div>
                <h1>Welcome { this.state.hello } </h1>
                <h2>
                    <a onClick={this.changeState.bind(this)}>Press Here!</a>
                </h2>
            </div>
        );
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate()");
        return true;
    }
    componentWillUpdate(){
        console.log("componentDidUpdate()");
    }
}

export default Lifecycle