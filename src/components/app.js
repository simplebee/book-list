import React from 'react';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';
import {Panel, Grid, Row} from 'react-bootstrap';

const App = () => {
  return (
    <Grid>
      <Panel>
        <Row>
          <BookList />
          <BookDetail />
        </Row>
      </Panel>
    </Grid>
  );
}

export default App;