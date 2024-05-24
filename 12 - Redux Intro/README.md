### What did I learn while coding this project?

> #
>
> - _**What is REDUX?** Redux is a third-party library that we can use to manage global state in a web application. Redux is a complete standalone library that we can use with any framework. Redux allow us to store all global state in one global accessible store which we can then update using actions. ,_
> - _As soon as we update a store, all the react components that consume some data from the store will be re-rendered. Redux is similar to combining the Context API with the useReducer hook. ,_
> - _There are two different way to using Redux. These are Classic Redux and Modern Redux Toolkit. ,_
> - _**What is Redux Middleware?** Reducer functions need to be pure function with no side effect. Redux store doesn't know anything about performing asynchronous logic. It only knows how to synchronously dispatch actions and update the state. Therefore any asynchronous operations like API call need to happen outside a reducer. We want our component clean and free data fetching and we also want our data fetching logic encapsulated somewhere. In Redux Middleware is a function that sits between dispatching the action and the store. Middleware allows developers to run some code (API calls, timers, logging, asynchronous code) after dispatching an action but before that action reaches the reducer in the store. Usually after we dispatch, the action immediately reaches the reducer and the state is updated. In summary middleware is place for side effects in the Redux cycle,_
> - _Most popular middleware is Redux Thunk in Redux. Thunk allows Redux to wait before dispatching the fetch data into the store. ,_
> - _**What does Redux Toolkit do?** It allows us to write code that mutates state inside reducers. Behind the scenes a library called Immer will convert our code back to non-mutating. Redux Toolkit also automatically creates action creators from our reducers. It also will automatically setup of thunk middleware and DevTools. ,_
>
> #
