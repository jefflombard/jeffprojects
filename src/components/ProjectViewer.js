import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actionCreators from '../actionCreators';
import Project from './Project';

class ProjectViewer extends Component {
  componentDidMount(){
    this.props.actions.fetchProjects();
  }

  render() {
    const { projects } = this.props;
    const projectsList = projects.map( (project) => {
      const { id, title, tags, description } = project ;
      return (
        <Project key={id} title={title} description={description} tags={tags}/>
      );
    });
    return (
      <div className="project-viewer">
        {projectsList}
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