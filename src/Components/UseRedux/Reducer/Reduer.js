
const initialstate = 0
const Reducerfn =(state = initialstate, action)=>{
  //here used switch or if else 
  switch(action.type){
    case 'Increment': return state + 1;
    case 'Decrement': return state - 1;
    default: return state;
  }

}

export default Reducerfn;






