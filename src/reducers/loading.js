export default function content(state = {loading: true}, action){
  switch (action.type) {
    case "LOADING_FINISHED":
      return false;
    default:
      return state;
  }
}