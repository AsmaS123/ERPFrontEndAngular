const initialState = {   isOn: false  }

export function reducer(state = initialState, action:any) {
    switch (action.type) {
      case 'startSpinner': {
        return {
          isOn: true
        };
      }
  
      case 'stopSpinner': {
        return {
          isOn: false
        };
      }
  
      default:
        return state;
    }
  }

  