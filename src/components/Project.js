import React from 'react';
import { Col } from 'react-grid-system';
import './Project.scss';

const project = props => (
  <Col key={props.key} sm={12} md={6} lg={4} xl={3}>
    <div className="project-card">
      {props.title}
      {props.tags}
      {props.description}
    </div>
  </Col>
);

export default project;
