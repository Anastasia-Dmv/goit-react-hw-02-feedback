import React, { Component } from 'react'

export default class FeedbackOptions extends Component {
    render() {
        const {options, onLeaveFeedback} = this.props
        return (
            <>

        {options.map(option => 
        <button  key={option} type="button" name={option} onClick={()=>onLeaveFeedback(option)}>{option}</button>)
    }
                
            </>
        )
    }
}
