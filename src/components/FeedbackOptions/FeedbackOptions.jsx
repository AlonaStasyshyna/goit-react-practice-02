import { Component } from "react";
import PropTypes from 'prop-types';
import { ButtonList, Button } from "./FeedbackOptions.styled";

export class FeedbackOptions extends Component {
    static propTypes = {
        onLeaveFeedback: PropTypes.func.isRequired,
    }

    render() {
        return (
            <ButtonList>
                <Button type="button" onClick={this.props.onLeaveFeedback}>Good</Button>
                <Button type="button" onClick={this.props.onLeaveFeedback}>Neutral</Button>
                <Button type="button" onClick={this.props.onLeaveFeedback}>Bad</Button>
            </ButtonList>
        )
    }
}