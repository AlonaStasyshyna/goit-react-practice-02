import { Component } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  onLeaveFeedback = (e) => {
    this.setState((prevState) => ({
      [e.target.textContent.toLowerCase()]: prevState[e.target.textContent.toLowerCase()] + 1
    }))
  }

  countTotalFeedback = ({good, neutral, bad}) => (good + neutral + bad)

  countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
    if (!good) {
      return 0;
    }
    
    return Math.round(good / (good + neutral + bad) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback}/>
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback({ good, neutral, bad })
            ? <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback({ good, neutral, bad })} positivePercentage={this.countPositiveFeedbackPercentage({ good, neutral, bad })} />
            : <Notification message="There is no feedback" />}
        </Section>
      </>
    )}
};