import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Col, Panel, Image} from 'react-bootstrap';
import '../styles/book-detail.css';

class BookDetail extends Component {
  render() {
    return (
      <Col xs={8}>
        <Panel>
          <h3>{this.props.activeBook.title}</h3>
          <p>by {this.props.activeBook.author}</p>
          <Image src={this.props.activeBook.image} responsive />
        </Panel>
      </Col>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeBook: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);