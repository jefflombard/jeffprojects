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
    const { projects } = this.props;
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
    return (
      <div className="project-viewer">
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
  return { projects: state.projects };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectViewer);