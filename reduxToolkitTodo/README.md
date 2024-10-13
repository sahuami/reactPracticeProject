
1. Install Redux Toolkit and React-Redux:
First, install @reduxjs/toolkit and react-redux in your project:

2. Create a Redux Store :
In Redux Toolkit, we use configureStore to create a store. Create a file called store.js:

3. Create a Slice:
A slice is a collection of Redux logic for a specific feature (
=> State: The actual data you're storing (e.g., a counter's value).
=>Actions: These are like commands that tell Redux to change the state (e.g., increase or decrease a number).
=>Reducers: These are functions that define how the state should change when an action happens.). In a new file, create a slice using createSlice


4. Provide the Store to the App:
You wrap your main app component with something called a Provider, which makes the store (your app's data) available to every part of your app.

5. Use Redux State and Dispatch in Components:
useSelector: This allows you to "read" or access data from the store in your components.
useDispatch: This allows you to "write" or change the data in the store by sending actions means (dispatch reducer ka use krke store m change krta hai)