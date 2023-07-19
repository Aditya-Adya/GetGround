const initialState = {
    data: [],
    isLoading: false,
    error: null,
  };
  
  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_DATA_REQUEST':
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      case 'FETCH_DATA_SUCCESS':
        return {
          ...state,
          data: action.payload,
          isLoading: false,
        };
      case 'FETCH_DATA_FAILURE':
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default dataReducer;
  