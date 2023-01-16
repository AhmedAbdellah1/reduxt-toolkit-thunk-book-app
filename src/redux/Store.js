
import { configureStore } from '@reduxjs/toolkit';

import myBooks from './bookSlice';
import myAuth from './authSlice';

export default configureStore({ reducer: { myBooks, myAuth } });
 