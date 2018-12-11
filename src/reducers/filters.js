export default function content(state = [], action){
  switch (action.type) {
    case "FILTERS_LOAD_FILTERS":
      const tags = action.payload.reduce( (acc = [],project) => project.tags.concat(acc));
      return [...new Set(tags)];
    default:
      return state;
  }
}