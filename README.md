# Project Viewer
A simple react app bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and deployed with [Netlify](https://www.netlify.com/).

[View the live app here]().

## Local Setup
1. `git clone https://github.com/jefflombard/jeffprojects.git`
1. `yarn`
1. `yarn start`

# Build Process
## Design and Setup
branch: `setup`

- "Plan first, code second" I didn't want to jump right into coding without having at least a rough idea of what I was planning to build. plan for this so I did some [rough ui designs](designs/projects.sketch).
- Decided to use [Create React App](https://github.com/facebook/create-react-app) and deployed with [Netlify](https://www.netlify.com/). No real reason at this point to use anything custom.

## Build
branch: `build`

- added `redux`, `redux-thunk`, `react-redux`, and place holder root reducer. Will use in managing state throughout the application.
- added `node-sass`, will use scss.
- added `react-grid-system`, will use as a convenient way to make it responsive.

## Filtering
branch: `filter`

- started implementing a filter, see this branch for more details.