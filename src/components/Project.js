import React from 'react';
import { Col, Visible } from 'react-grid-system';
import './Project.scss';

const project = props => (
  <Col key={props.pid} sm={12} md={6} lg={4} xl={3}>
    <a href={props.url || props.gitUrl} target="_blank" rel="noopener noreferrer">
      <div className="project-card">
        <p>{props.title}</p>
      </div>
    </a>
  </Col>
);

export default project;
