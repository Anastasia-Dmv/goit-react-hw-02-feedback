import React, { Component } from 'react';
import Statistics from '../statistics/Statistics';
import FeedbackOptions from '../feedbackOptions/FeedbackOptions';
import Section from '../section/Section';
import Notification from '../notification/Notification';


class Feedback extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }


  handleLeaveFeedback = (name) => {

this.setState(prevState=>({[name]: prevState[name]+1}));
console.log('111', 111)

  }   

  countTotalFeedback =()=> {
      const { good, neutral, bad} = this.state;
      return   good + neutral + bad;
  }

  countPositiveFeedbackPercentage=()=>{
      const {good}= this.state;
      const result = (good * 100 / this.countTotalFeedback()).toFixed();
      
       return result
  }
render(){
    const { good, neutral, bad} = this.state;
    const totalFn = this.countTotalFeedback()
    return (


   

    <Section title="Please leave feedback">
 
<FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleLeaveFeedback}/>

{ (totalFn > 0)
?  <Statistics good={good} neutral={neutral} bad={bad} total={totalFn} positivePercentage={this.countPositiveFeedbackPercentage()}/>
: <Notification message="No feedback given"/>}
 </Section>

    )
}

}
export default Feedback;
