import React, {Component} from "react"

export default class Calculator extends Component {
    state = {
        num1:'',
        num2:'',
        sum:''
    }
    setNum = (e, num) => {
        this.setState({[num]: e.target.value})
    }
    sum = (e) => {
       const sum= Number(this.state.num1)+ Number(this.state.num2)
       this.setState({
        sum: sum
       })
        console.log(Number(this.state.num1)+ Number(this.state.num2))
    }
    render() {
        return (
            <div className="container">
                <h1>Add with React!</h1>
            <div className='add'>
                <input type="number"
                name="num1"
                placeholder="Enter number"
                value={this.state.num1} 
                onChange={(e)=> this.setNum(e, "num1") }
                />
                <span>+</span>
                <input type='number'
                name="num2"
                placeholder="Enter Number"
                value={this.state.num2}
                onChange={(e)=> this.setNum(e, "num2") }
                />
                <button onClick={(e)=> this.sum(e, "sum")}>🟰</button>
                <h3>{this.state.sum}</h3>


            </div>
            </div>
        )
    }
}