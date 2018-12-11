import axios from 'axios';

export function fetchProjects(){
  return function( dispatch, getState) {
    const url = 'https://jefflombard.com/graphql';
    axios({
        url,
        method: 'post',
        data: {
          query: `
          {
            projects {
              id
              description
              tags
              title
              url
              gitUrl
            }
          }
          `
        }
      }).then((result) => {
        const projects = result.data.data.projects;
        dispatch({type: "PROJECTS_LOAD_PROJECTS", payload: projects})
        dispatch({type: "FILTERS_LOAD_FILTERS", payload: projects})
        dispatch({type: "LOADING_FINISHED"})
      });
  }
}

export function clearFilters(){
  return function( dispatch, getState ) {
    dispatch({type: "FILTERS_CLEAR_FILTERS"});
  }
}

export default {
  fetchProjects,
  clearFilters
}