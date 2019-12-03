export default (state = [], action) => {
    switch (action.type) {
      case 'FETCH_POSTS':
        return action.payload;
      default:
        return state;
    }
  };


//Note return anything except undefined, it will fail 
//reducer has to return state or data to be used in the app
//reducer is an automatic invocation
//Don't mutate the state argument directly in reducers

//const colors = ['red,'green']
//[...colors, 'blue', 'pink']
//filter, map,
// const profile = { name:'Sam'}
//{...profile, name:'Alex'} // {name:'Alex'}


//to remove property from the Object use _omit(obj, 'property')
//lodash - library to work with objects and array
//https://lodash.com/docs/4.17.15