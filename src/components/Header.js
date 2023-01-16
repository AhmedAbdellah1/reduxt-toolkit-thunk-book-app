import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logInOut } from '../redux/authSlice';


const Header = () => {

  const { error } = useSelector((state) => state.myBooks);
  const { isLoggedIn } = useSelector((state) => state.myAuth)
  const dispatch = useDispatch();

  return (
    <>
      <nav className='navbar navbar-dark bg-dark'>
        <span className='navbar-brand mb-0 h1'>My Books</span>
        <button className='btn btn-outline-primary' type='submit'
          onClick={() => dispatch(logInOut(isLoggedIn))}>{isLoggedIn ? 'Log Out' : 'Log In'}
        </button>
      </nav>

      {!isLoggedIn &&
        <div className='alert alert-danger mb-0 text-center' role='alert'>
          You Are Most ( LOG IN ) To Cane Add Book And delete It LOL :)
        </div>
      }

      {error &&
        <div className='alert alert-danger mb-0 text-center' role='alert'>
          {error}
        </div>
      }
    </>

  );
};

export default Header;
