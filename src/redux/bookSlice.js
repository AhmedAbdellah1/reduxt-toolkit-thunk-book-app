
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getBooks = createAsyncThunk("book/getBooks", async (args, thunkAPI) => {

    const { rejectWithValue } = thunkAPI;
    // console.log(thunkAPI);

    try {
        const res = await fetch('http://localhost:9000/books');
        const data = await res.json();
        return data;

    } catch (error) {
        //  this function call when error run
        return rejectWithValue('Failed to Get Books');
    }

});

export const insertBook = createAsyncThunk("book/insertBook", async (dataBook, thunkAPI) => {

    //  this function ==> rejectWithValue() call when error run that mean get massage error
    //  this function ==> getState() get All state in app that mean get All slice

    const { rejectWithValue, getState } = thunkAPI;
    try {

        // create a new property userName in books and pass name in authSlice
        dataBook.userName = getState().myAuth.name;

        const res = await fetch('http://localhost:9000/books', {
            method: 'POST',
            body: JSON.stringify(dataBook),
            headers: { 'Content-type': 'application/json; Charset=UTF-8' },
        });
        const data = await res.json();
        return data;

    } catch (error) {
        //  this function call when error run
        return rejectWithValue('Failed to insert Book');
    }

});

export const deleteBook = createAsyncThunk("book/deleteBook", async (idOfBook, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {

        await fetch(`http://localhost:9000/books/${idOfBook}`, {
            method: 'DELETE',
        });

        return idOfBook;

    } catch (error) { return rejectWithValue('Failed to delete Book'); }
});

export const getBookDetails = createAsyncThunk("book/getBookDetails", async (itemBook, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const res = await fetch(`http://localhost:9000/books/${itemBook}`, {
            method: 'GET',
            headers: { 'Content-type': 'application/json; Charset=UTF-8' },
        });
        const data = await res.json();
        return data;
    } catch (error) {
        //  this function call when error run
        return rejectWithValue('Failed to insert Book');
    }

});

const bookSlice = createSlice({

    name: "book",

    initialState: { books: [], isLoading: false, error: null, bookInfo: null },

    // write extraReducers by this way or anther way below Both correct
    // extraReducers: (builder) => {
    //     builder.addCase(getBooks.pending, (state, action) => { console.log(action) })
    //     builder.addCase(getBooks.fulfilled, (state, action) => { console.log(action) })
    //     builder.addCase(getBooks.rejected, (state, action) => { console.log(action) })
    // },

    // anther way to write extraReducers
    extraReducers: {

        // this is for getBooks
        [getBooks.pending]: (state, action) => { state.isLoading = true; state.error = null; },
        [getBooks.fulfilled]: (state, action) => { state.isLoading = false; state.books = action.payload; },
        [getBooks.rejected]: (state, action) => { state.isLoading = false; state.error = action.payload; },

        // this is for insertBook
        [insertBook.pending]: (state, action) => { state.isLoading = true; state.error = null; },
        [insertBook.fulfilled]: (state, action) => { state.isLoading = false; state.books.push(action.payload); },
        [insertBook.rejected]: (state, action) => { state.isLoading = false; state.error = action.payload; },

        // this is for deleteBook
        [deleteBook.pending]: (state, action) => { state.isLoading = true; state.error = null; },
        //action.payload ==idOfBook
        [deleteBook.fulfilled]: (state, action) => { state.isLoading = false; state.books = state.books.filter((book) => book.id !== action.payload) },
        [deleteBook.rejected]: (state, action) => { state.isLoading = false; state.error = action.payload; },

        // this is for getBookDetails
        [getBookDetails.pending]: (state, action) => { state.isLoading = true; state.error = null; },
        [getBookDetails.fulfilled]: (state, action) => { state.isLoading = false; state.bookInfo = action.payload; },
        [getBookDetails.rejected]: (state, action) => { state.isLoading = false; state.error = action.payload; },
    },

});

export default bookSlice.reducer;