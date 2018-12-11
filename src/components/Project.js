import React from 'react';

const project = props => (
  <div className="project-card" key={props.key}>
    {props.title}
    {props.tags}
    {props.description}
  </div>
);

export default project;
