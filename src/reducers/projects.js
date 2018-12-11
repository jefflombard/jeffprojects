export default function content(state = [], action){
  switch (action.type) {
    case "PROJECTS_LOAD_PROJECTS":
      return action.payload;
    default:
      return state;
  }
}