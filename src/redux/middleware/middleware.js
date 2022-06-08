


function clientMiddleware(client) {
    return ({dispatch, getState}) => {
      return next => action => {

        if (typeof action === 'function') {
          return action(dispatch, getState);
        }
  
        const { type, types, ...rest } = action; 
     
        const [REQUEST, SUCCESS, FAILURE] = types;

        console.log(type)

        next({ ...rest, type: REQUEST });
  

      };
    };
  }
