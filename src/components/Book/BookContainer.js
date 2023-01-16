
import React, { useEffect, useState } from 'react';
import BookInfo from './BookInfo';
import BooksList from './BooksList';
import './book.css';

import { getBooks } from '../../redux/bookSlice';
import { useDispatch, useSelector } from 'react-redux';

const BookContainer = () => {

  const { isLoading, books } = useSelector((state) => state.myBooks);
  const { isLoggedIn } = useSelector((state) => state.myAuth);

  const dispatch = useDispatch();

  useEffect(() => { dispatch(getBooks()) }, [dispatch]);

  const [selectedBook, setSelectedBook] = useState({});

  // anther way to read book
  const readBook = (idOfBook) => {

    const selectedBook = books.find((book) => book.id === idOfBook)

    // this (preventDetailsBook) => { return { ...preventDetailsBook, ...selectedBook } } to return preventDetailsBook
    setSelectedBook(
      (preventDetailsBook) => {
        return { ...preventDetailsBook, ...selectedBook }
      }
    );
  };

  return (
    <>
      <hr className='my-5' />

      <div className='row'>

        <div className='col'>
          <BooksList isLoading={isLoading} books={books} isLoggedIn={isLoggedIn} readBook={readBook} />
        </div>

        <div className='col side-line'>
          <BookInfo info={selectedBook} />
        </div>

      </div>
    </>
  );
};

export default BookContainer;
