export default function reducer(state = {number:0},action){
  switch(action.type){
    case 'ADD': 
      return {...state, number:state.number+1 };
    default:
      return state
  }
}