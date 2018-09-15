import React from 'react';
import Canvas from '../Canvas/Canvas';
import Title from './Title/Title';
import Description from './Description/Description';
import Category from './Category/Category';
import Payment from './Payment/Payment';
import Reward from './Reward/Reward';
import { connect } from 'react-redux';

import {
  titleChange,
  descriptionChange,
  categoryChange,
  paymentChange,
  feeChange,
  rewardChange
} from '../../actions/aboutActions';

import './About.css';

class About extends React.Component {
  handleTitleChange(e) {
    let title = e.target.value;
    this.props.dispatch(titleChange(title));
  }

  handleDescriptionChange(e) {
    let description = e.target.value;
    this.props.dispatch(descriptionChange(description));
  }

  handleCategoryChange(e) {
    let category = e.target.value;
    this.props.dispatch(categoryChange(category));
  }

  handlePaymentChange(e) {
    let payment = e.target.value;
    this.props.dispatch(paymentChange(payment));
  }

  handleFeeChange(e) {
    let fee = e.target.value;
    this.props.dispatch(feeChange(fee));
  }

  handleRewardChange(e) {
    let reward = e.target.value;
    this.props.dispatch(rewardChange(reward));
  }

  render() {
    const { description, paid_event } = this.props;
    return (
      <Canvas title="About">
        <Title onTitleChange={e => this.handleTitleChange(e)} />
        <Description onDescriptionChange={e => this.handleDescriptionChange(e)} letters={description.length} />
        <Category onCategoryChange={e => this.handleCategoryChange(e)} />
        <Payment
          onPaymentChange={e => this.handlePaymentChange(e)}
          onFeeChange={e => this.handleFeeChange(e)}
          paidEvent={paid_event}
        />
        <Reward onRewardChange={e => this.handleRewardChange(e)} />
      </Canvas>
    );
  }
}

const mapStateToProps = state => ({
  description: state.aboutReducer.description,
  paid_event: state.aboutReducer.paid_event
});

export default connect(mapStateToProps)(About);
