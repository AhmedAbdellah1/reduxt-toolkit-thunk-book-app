import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook, getBookDetails } from '../../redux/bookSlice';

const BooksList = ({ isLoading, books, isLoggedIn, readBook }) => {
  const dispatch = useDispatch();

  const listBook = books.map(
    (book) => (
      <li className='list-group-item d-flex  justify-content-between align-items-center' key={book.id} >
        <div>{book.title}</div>
        <div className='btn-group' role='group'>
          {/* <button type='button' className='btn btn-primary' onClick={() => dispatch(getBookDetails(book.id))} >Read</button> */}
          <button type='button' className='btn btn-primary' onClick={() => readBook(book.id)} >Read</button>

          {/* default sating of disabled = true that mean tha button can not be use
              in this case if write just disabled while button not be use but can not acsses tha button
              so i used !isLoggedIn = true in this case can be acsses to tha button 
           */}
          <button type='button' className='btn btn-danger' disabled={!isLoggedIn} onClick={() => dispatch(deleteBook(book.id))}>Delete</button>
        </div>
      </li>
    )
  );

  return (
    <>
      <h2>Books List</h2>
      {isLoading ? 'Books loading...' : <ul className='list-group'>
        {listBook}

      </ul>}
    </>
  );
};

export default BooksList;
