import React, { Component } from 'react';
// import { render } from '@testing-library/react';

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }


  handleLeaveFeedback = e => {
const name = e.target.name;
this.setState(prevState=>({[name]: prevState[name]+1}));

  }   

  countTotalFeedback =()=> {
      const { good, neutral, bad} = this.state;
      return good + neutral + bad;
  }

  countPositiveFeedbackPercentage=()=>{
      
  }
render(){

    return (
<div>

    <h2>Please leave feedback</h2>

    <button type="button" name="good">Good</button>
    <button type="button" name="neutral">Neutral</button>
    <button type="button" name="bad">Bad</button>

    <h3>Statistics</h3>

    <p>Good:{}</p>
    <p>Neutral:{}</p>
    <p>Bad:{}</p>
    



</div>
    )
}

}
export default Feedback;
