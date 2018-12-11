import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Container } from 'react-grid-system';

import actionCreators from '../actionCreators';
import Project from './Project';
import './ProjectViewer.scss';

class ProjectViewer extends Component {
  componentDidMount(){
    this.props.actions.fetchProjects();
  }

  render() {
    const { projects, tags, actions } = this.props;
    const projectsList = projects.map( (project) => {
      const { id, title, tags, description, url, gitUrl } = project ;
      return (
        <Project
          pid={id}
          url={url}
          gitUrl={gitUrl}
          title={title}
          description={description}
          tags={tags}
        />
      );
    });
    const tagsList = tags.map( (tag) => {
      return (
        <button className="tag">{String(tag)}</button>
      );
    });
    return (
      <div className="project-viewer">
        <Container>
          {tagsList}
          <button className="tag" onClick={actions.clearFilters()}>clear all</button>
        </Container>
        <Container>
          <Row>
            {projectsList}
          </Row>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { projects: state.projects, tags: state.filters };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectViewer);