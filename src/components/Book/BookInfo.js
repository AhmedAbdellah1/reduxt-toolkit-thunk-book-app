import React from 'react';
// import { useSelector } from 'react-redux';
const BookInfo = ({ info }) => {

  // const { bookInfo } = useSelector((state) => state.myBooks);
  return (
    <>
      {/* <h2>Book Details</h2>
      {bookInfo == null ? (
        <div className='alert alert-secondary' role='alert'>
          There is no post selected yet. Please select!
        </div>
      ) : (
        <div>
          <p className='fw-bold'>Title : {bookInfo.title}</p>
          <p className='fw-light'>Description : {bookInfo.description}</p>
          <p className='fst-italic'>Price : {bookInfo.price}$</p>
        </div>
      )
      } */}
      <h2>Book Details</h2>
      {Object.values(info).length > 0 ? (
        <div>
          <p className='fw-bold'>Title : {info.title}</p>
          <p className='fst-italic'>Inserted by : {info.userName}</p>
          <p className='fw-light'>Description : {info.description}</p>
          <p className='fst-italic'>Price : {info.price}$</p>
        </div>

      ) : (
        <div className='alert alert-secondary' role='alert'>
          There is no post selected yet. Please select!
        </div>
      )

      }
    </>
  );
};

export default BookInfo;
