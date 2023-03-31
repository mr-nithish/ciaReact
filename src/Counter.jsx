  import React, { Component } from 'react'

  class Counter extends Component {
      constructor()
      {
          super()
          this.state = {
              count:0
          }
      }

      counted = () => {
          this.setState(prevState =>{
              return {count: prevState.count + 1}
          })
      }


    render() {
      const cnt = this.state.count
      return (
        <div>
          <button onClick={this.counted}>
              Press to increase
          </button>
          <h2>Clicked {cnt} times </h2>
        </div>
      )
    }
  }

  export default Counter;
