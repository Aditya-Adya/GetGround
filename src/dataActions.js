// actions/dataActions.js
import axios from 'axios';

const fetchDataRequest = () => ({
  type: 'FETCH_DATA_REQUEST',
});

const fetchDataSuccess = (data) => ({
  type: 'FETCH_DATA_SUCCESS',
  payload: data,
});

const fetchDataFailure = (error) => ({
  type: 'FETCH_DATA_FAILURE',
  payload: error,
});

const fetchData = (page) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    let params = {page: page}

    try {
      const response = await axios.post(`http://nyx.vima.ekt.gr:3000/api/books`, {params: params});
      dispatch(fetchDataSuccess(response.data.books));
      console.log('inside fetch',params)
      // console.log(response.data.count)
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};

export default fetchData;
