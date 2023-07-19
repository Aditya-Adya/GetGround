import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchData from './dataActions';
import ReactPaginate from 'react-paginate'

function App() {
  const data = useSelector((state) => state.data.data);
  const isLoading = useSelector((state) => state.data.isLoading);
  const currentPage = useSelector((state) => state.data.currentPage);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData(currentPage + 1)); 
    console.log('on loading',currentPage + 1)
  }, [dispatch,currentPage]);

  const handlePageClick = (data) => {
    dispatch(fetchData(data.selected + 1))
    console.log('on click', data.selected + 1)
  }

  //handling loading state
  if (isLoading) {
    return <div> <p> Please wait the data is loading... </p></div>;
  }

  return (
    <div className="App">
      <div className="row m-2">
        {data.map((item) => {
          return (
            <div key={item.id} className="col-sm-6 col-md-4 v my-2">
              <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
                <div className="card-body">
                  <h5 className="card-title text-center h2">{item.book_title} </h5>
                  <h6 className="card-subtitle mb-2 text-muted text-center">
                    By- {item.book_author}
                  </h6>
                  <p className="card-text">{item.body}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* <h1> Books </h1> 
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.book_title}, by {item.book_author}</li> // Display the relevant property of the item, e.g., title
        ))}
      </ul> */}
      <ReactPaginate
        pageCount={122}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
    
  );
}

export default App;
