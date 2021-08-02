import React, { Component } from 'react';
import ReviewList from './ReviewList';
import Modal from '../common/atoms/Modal';

const reviews = [
  {
    stars: '5',
    title: 'Perfect',
    description: 'I adore everything Shofrica do! The pieces are lovely and unique and I get compliments whenever I wear one of their designs!',
    reviewBy: 'Heidi C.',
    date: 'April, 2021'
  },
  {
    stars: '3.5',
    title: 'So comfortable!',
    description:
      'I’m always pleased with the quality and customer service from Shofrica. My most recent purchases include the Penny and Moon rings and they’re beautiful. I wear them every day.',
    reviewBy: 'Valerie S.',
    date: 'May, 2021'
  },
  {
    stars: '4',
    title: 'Always a pleasure',
    description:
      'I\'ve ordered several pieces of fine jewelry from Shofrica and I have been happy with all my purchases. Their customer service is excellent.',
    reviewBy: 'Amy F.',
    date: 'July, 2021'
  },
  {
    stars: '5',
    title: 'So comfortable!',
    description:
      'Super reasonable pricing! Bought a present from them and it was super easy to return and resize. She loved the necklace as well.',
    reviewBy: 'Jenny H.',
    date: 'August, 2021'
  }
];

export default class ClientReview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  /**
   * Close the review modal
   */
  handleClose() {
    this.setState({ open: false });
  }

  /**
   * Show the review modal
   */
  handleOpen() {
    this.setState({ open: true });
  }

  render() {
    const { open } = this.state;

    return (
      <div id="reviews" className="custom-container pb-5">
        <Modal
          isOpen={open}
          onClose={this.handleClose}
          maxW="1000px"
        >
          <div className="d-flex justify-content-between align-items-center pb-3">
            <p className="font-size-subheader font-weight-medium">
              All reviews
            </p>
            <img
              tabIndex="0"
              src="/icon/cross.svg"
              className="w-24 cursor-pointer"
              onClick={this.handleClose}
              alt="Cross icon"
            />
          </div>
          <ReviewList reviews={reviews} />
        </Modal>
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className="d-flex justify-content-between flex-column flex-sm-row align-items-sm-center mb-3">
              <p className="font-size-title font-weight-medium mb-2 mb-sm-0">
                4.3 stars from 10 reviews
              </p>
            </div>
            <ReviewList reviews={reviews}>
              <button
                type="button"
                onClick={this.handleOpen}
                className="text-center bg-transparent w-100 h-72 px-3 text-decoration-underline"
              >
                View all reviews
              </button>
            </ReviewList>
          </div>
        </div>
      </div>
    );
  }
}
