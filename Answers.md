1. What problem does the context API help solve?

It solves the problem of prop drilling for complex apps with deep structure.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Store - contains the apps state, is immutable. In properly designed redux app would contain all the data necessary for apps function. Thus known as 'single source of truth'.
Reducers - functions containing all of the logic necessary for creating new state for redux store. They do that depending on data incoming from action objects.
Actions - objects sent to reducer containing data necessary to chage the state of the app. Have 2 properties:
    type: (required) - type of action,
    payload: (optional) - data needed for reducer to change state.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state relates to the whole app(login status, user data), while component state contains only info relating to that one component's functions(input controls, presentational values like color, size, etc).

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is a middleware for redux, and it allows us to use redux with asyncrhonous tasks. Our action creators return a function taking in an injected dispatch function, which will fire upon getting a response from our asynchronous source. Action creators can contain ajax requests and other async stuff.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux - because it forces you to think ahead and separate state management and logic from you UI components.
