import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectBook} from '../actions'
import {Col, ListGroup, ListGroupItem} from 'react-bootstrap';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <ListGroupItem
          key={book.title}
          onClick={() => this.props.selectBook(book)}>
          {book.title}
        </ListGroupItem>
      );
    });
  }

  render() {
    return (
      <Col xs={4}>
        <ListGroup>
          {this.renderList()}
        </ListGroup>
      </Col>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);