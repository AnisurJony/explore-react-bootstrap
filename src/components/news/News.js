import React from 'react';
import { Card, Col } from 'react-bootstrap';

const News = (props) => {
    const {title,descriltion,urlToImage}=props.news;
    return (
        <Col>
        <Card>
          <Card.Img variant="top" src={urlToImage} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {descriltion}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default News;