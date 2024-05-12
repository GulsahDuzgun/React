# React

## [01 - Pizza Menu]

#### What did I learn while coding this project?

> #
>
> - _**What is React?** React is declarative( telling React what a component should look like based on current data/state), based on components, state-driven (React reacts to state changes by re-rendering the UI) extremely popular Javascript library which is created by facebook. ,_
> - React.StrictMode what does is during development renders all components twice in order to find certain bugs. Also React will checkif we are using outdated parts of the React API.
> - _**What are Components?** Components are building blocks of user interfaces in React. React applications are entirely made out of components.Components are piece of UI that has its own data, logic and appearance. Components can be reused, nested inside each other and pass data between them. ,_
> - _**What is JSX?** JSX is declarative syntax to descrive what components look like and how they work, Components must return a block of JSX. JSX is an Javascript extension that allows us to embed Javascript, CSS and React components into HTML. Each JSX element is converted to a React.createElement() function call by BABEL. ,_
> - _**What is Props?** Props are used to pass data from parent components to child components(down the component tree). And Props are essential tool to configure and customize components(like function parameters). Anything can be passed as props: single values, arrays, objects, functions, even other components. ,_
> - _Components made of data, logic, apperance. Data consists of State and Props. Props are read-only and immutable. Props is data coming from the outside, and can only be updated by the parent component. State is internal data that can be updated by the component's logic. If you need to mutate props, you actually need state. ,_
> - _ React has one-way data flow(props) because mutating props(an object) would affect parent's data, creating side effects. Immutable props allows React to avoid bugs and make apps predictable,_
> - _JSX works essentially like HTML, but we can enter "Javascript mode" by using {}. We can place Javascript expression inside {}. Examples: reference variables, create arrays or objects, map(), ternary operator but Statements are not allowed (else-if, for, switch). JSX produces a Javascript expression. A piece of JSX can have one root element. ,_
> - _React.Fragment lets us group some elements without leaving any trace in the HTML tree, in the DOM and it allows us to define key property.,_
>
> #

The end version of the project is below ⬇
<br/>
<img src="./ReadME__img/pizzaMenu.png" alt="Far Away">
<br/>
<br/>
<br/>

## [03 - Steps]

#### What did I learn while coding this project?

> #
>
> - _**What is State in React?** State is data that a component can hold over time, necessary for information that it needs to remember throughout the app's lifecycle. We can also say Component's memory for it. ,_
> - Component State: Single local component variable("Piece of state","state variable"). Updating component state triggers React to re-render the component.
> - _State allows developer to update the component's view by re-rendering the component. It provides us to change a part of the UI. Second state allows developers to persist local variables between multiple renders and re-renders. ,_
> - _State variable for any data that the component should keep track of ("remember") over time. This is data that will change at some point.In Vanilla JS , that is a let variable or an [ ] or {} ,_
> - _Whenever you want something in the component to be dynamic, create a piece of state related to that 'thing' and update the state when the 'thing' should change. If you want to change the way of component looksi or the data it displays, update its state ,_
> - _When building a component, imagine its view as a reflection of state changing over time. For data that should not trigger component re-renders, don't use state. Use a regular variable instead. ,_
>
> #

The end version of the project is below ⬇
<br/>
<img src="./ReadME__img/03 - Steps/steps--1.png" alt="Steps">
<br/>
<br/>
<img src="./ReadME__img/03 - Steps/steps--2.png" alt="Steps">
<br/>
<br/>
<img src="./ReadME__img/03 - Steps/steps--3.png" alt="Steps">
<br/>

<br/>
<br/>

<br/>
<br/>

## [04 - Travel List]

#### What did I learn while coding this project?

> #
>
> - _**What is the difference between State and Props?** State is internal data, owned by component. It is component's memory and can be updated by the component itself. Updating state causes component to re-render. It is used to make components interactive. Props is external data which owned by parent component. Similar to function parameters and it is read-only.Receiving new props causes component to re-render. Usually when the parent's state has been updated. It is used by parent to configure child component. ,_
> - _**What is Derived State?** Derived State is computed from an existing piece of state or from props,_
> - _**What is the children prop?** The children prop allows us to pass JSX into an element. Essential tool to make reusable and configurable components. It useful for generic components that don't know their content before being used. ,_
>
> #

## Far Away

Far Away is a website which is a user can define their needs for holiday. After the user define their needs and its count, It will be shown up the list below. These needs can be checked as packed. Remain work is shown on footer according this ratio. And specified needs can be order by selecting the option in select menu and can be cleaned with clicking the clear list button. I made this website with React.js😉. You can try by clicking <strong>[Far Away](https://far-away-gldn.netlify.app/)</strong>.

<br/>

 <br/> 
   <img src="./ReadME__img/04 - Travel List/farAway--1.png" alt="Far Away">
<br/>
 <br/> 
   <img src="./ReadME__img/04 - Travel List/farAway--2.png" alt="Far Away">
<br/>
 <br/> 
   <img src="./ReadME__img/04 - Travel List/farAway--3.png" alt="Far Away">
<br/>

<br/>
<br/>

## [05 - Eat-'N-Split]

<br/>
<br/>

## [06 - usePopcorn]

#### What did I learn while coding this project?

> #
>
> - _Most of our components will naturally fall into one of three categories: Stateless/ presentational components, Stateful components, Structural components. ,_
> - _Stateless/ presentational components don't have state, can receive props and simply present received data or other content. They are usually small and reusable. ,_
> - _Stateful components have state and can still be reusable ,_
> - _Structural components results of composition and can be huge and non-reusable such as pages, layouts or screens. ,_
> - _**What is Component Composition?** Component Composition means combining different components using the children prop. We use component composition to create highly reusable and flexible components and fix prop drilling. ,_
>
> #

<br/>
<br/>

## [07 - How React Works]

#### What did I learn while coding this project?

> #
>
> - _Components describe a piece of the user interface. The Component is a regular Javascript function which returns React elements -usually written as JSX-. A component is a generic description of the UI. We can think of a component as a blueprint or a template. ,_
> - _Component Instances are created when we use components. Component instance is like the actual physical manifestation of a component living. Each instance has its own lifecycle, state and props. Component instance returns one or more React elements. The JSX code in React Component gets converted to multiple React.createElement() function calls. React element is result of using a component in our code. It is a big immutable Javascript object that React keeps in memory. React element keeps information necessary to create DOM elements. React elements eventually are converted to DOM elements. DOM elements visual representation of the React Element on the browser ,_
> - _**How components are displayed on the screen?** First render is triggered, then in render phase React calls component functions and figures out how DOM should be updated. Then in Commit Phase React actually writes to the DOM, updating, inserting and deleting elements. Then Browser Paint. ,_
> - _In React, rendering is not updating DOM or displaying elements on the screen. Rendering only happend internally inside React. It does not produce visual changes. ,_
> - _**How Renders are triggered?** In two situations that trigger renders. 1- Initial render of the application, 2- State is updated in one or more component instance(re-render) _
> - _The render process is triggered for the entire application. In practice it looks like React only re-renders the component where the state update happend but that's not how it works behind the scenes. Renders are not triggered immediately, but scheduled for when the JS engine has some "free time ". There is also batching of multiple setState calls in the event handlers. ,_
> - _**The Render Phase** At the beginning of the render phase React will go through the entire component tree. Take all the component instances that triggered a re-render and actually render them. This will create updated React elements which altogether make up the so-called virtual DOM. ,_
> - _**What is the Virtual DOM(React Element Tree)?** In the initial render react will take the entire component tree and transform it into one big React element which calls Virtual DOM. Virtual DOM is just a tree of all React elements created from all instances in the component tree. It is cheap and fast to create multiple trees in the end it is just a Javascript Object.,_
> - _Whenever React renders a component, that render causes all of its child components to be rendered as well, no matter if props changed or not because React doesn't know whether children will be affected ,_
> - _We don't update the entire DOM whenever state changes somewhere in the app? Because that would be inefficient and wasteful. Writing to the DOM is slow and expensive. Also usually small part of the DOM needs to be updated. ,_
> - _**What is reconciliation and why do we need it?** Reconciliation is deciding which DOM elements actually need to be inserted, deleted or updated in order to reflect the lastest state changes. Result of the reconciliation process is gonne be a list of DOM operations that are necessary to update the current DOM with a new state. Reconciliation is processed by a reconciler. Reconciler allows us to never touch the DOM directly and instead simply tell React what the next snapshot of the UI should look like based on state. Current reconciler in React is called Fiber. ,_
> - _The Reconciler:**FIBER**: During the initial render of the application Fiber takes the entire React element tree so the Virtual DOM and based on it builds another tree which is the Fiber tree.Fiber tree is a special internal tree where for each component instance and DOM element in the app is called Fiber.,_
> - _The special about Fiber tree is unlike React elements in the Virtual DOM, Fiber are not created on every render. So the Fiber tree is never destroyed. Instead, it's a mutable data structure and once it has been created during the initial render it is simply mutated over and over again in future reconciliation steps. And this makes Fibers the perfect place for keeping track of things like current state, props, side effects, used hooks, queue of work to do like updating state, updating refs, running registered side effects, performing DOM updates , etc. This is also why fiber is defined as unit of work. ,_
> - _In Fiber tree, the Fibers are arranged in a different way than the elements in the React element tree. Instead of parent-child relationship each first child has a link to its parent and all the other children then have a link to their previous sibling. This kind of structure is called a linked list and it makes it easier for React to process the work that is associated with each Fiber.,_
> - _The one extremely important characteristic of the Fiber reconciler is that work can be performed asynchronously. This means that the rendering process which is what the reconciler does can be split into chunks, sone tasks can be prioritized over others and work can be paused, reused or thrown away if not valid anymore. In render phase is not created any virtual DOM.,_
> - _The process of comparing elements in current fiber tree and updated fiber tree step-by-step based on their position in the tree is called diffing.Once this process is over all these DOM mutations will be placed into a list called list of effects. The final result of render phase is list of effects ,_
> - _**What is Commit Phase?** React applies the result of Render Phase -List of DOM updates- one by one to the actual DOM elements that were in the already existing DOM tree. Riding to the DOM happend all in one go, we can say commit phase is synchronous unlike the rendering phase which can be paused. Committing can not be interrupted. This is necessary so the DOM never shows partial results which ensures the UI always stays consistent. In fact, that is the whole point of dividing the entire process into the render phase. Rendering can be paused, resumed and discarded. The results of all that rendering can be flushed to the DOM in one go then Commit Phase is completed the work in progress fiber tree becomes the current tree for the next render cycle.That because fiber trees are never discarded and never recreated from scratch. Instead they are reused in order to say precious rendering time. After Commit Phase the browser will notice the DOM has been changed and as a result, it will repaint the screen whenever it has some idle time.,_
> - _Render Phase is managed by React. React dosn't touch the DOM. It has no idea where the results of the render phase will actually be committed and painted. React only does the Render Phase but not the Commit Phase. The reason for that is React was designed to be used independently from the platform where elements will actually be shown. Therefor React can be used many different so-called hosts. Comit Phase is managed by ReactDOM.,_
> - _In summary, the whole process of rendering and displaying a react application on the screen starts with a trigger, which can either be the initial render of the app or a state update in one of the component instances.Then triggers the render phase which does not produce any visual output. This phase starts by rendering all component instances that need re-render. And rendering in React simply means to call the components functions. This will create one or more updated React elements which will be placed in a new Virtual DOM. Rendering a component will cause all of its child components to be rendered no matters if props changed or not. The new Virtual DOM needs to be reconciled with the current fiber tree. This reconciliation process is done using a reconciler called Fiber which works with immutable data structure called the fiber tree. And in this tree each React element and DOM element there is a fiber and this fiber holds the actual component state, props and a queue of work. After reconciliation, this queue of work will contain the DOM updated that ere needed for that element.Now the computation of these DOM updated is performed by a diffing algorithm which step by step compares the elements the new virtual DOM with the elements in the new current fiber tree. The final result of Render Phase that reconciliation and diffing process updated fiber tree with a list of necessary DOm updates.The Render Phase is asynchronous so fiber can prioritize and split work into chunks and pause, resume some work later. This is necessary for a concurrent features also to prevent the Javascript engine to be blocked by the complex render process. The output of the render phase so the list pf DOM updated, will finaly be written to the DOM in the commit phase. In Commit Phase ReactDOM will insert, delete, update DOM elements that we end up with an updated DOM that reflect the new state of the applications. Unlike the Render Phase, Commit Phase is synchronous. All the DOM updatews are performed in one go in order to ensure consistent UI over time(COMMIT PHASE): When the browser realized the DOM has been updated, it starts a new browser paint(BROWSER PAINT PHASE) ,_
> - _**What is diffing?** Diffing is based on two fundamental assumptions. The first one is that two elements of different types will produce different trees. The sencond assumption is elements with stable key prop stay the same across renders ,_
> - _**What is the key prop?** The key prop is a special prop that we use to tell the diffing algorithm that an element is unique and this works both React Element and DOM Element. This means we can give each component instance a unique identification which will allow React to distinguish between multiple instance of the same component type. ,_
> - _**Why do we use the key prop?** When a key stays the same across renders, the element will be kept in the DOM even if the position in the tree has changed(Using keys in lists). And when a key changes between renders, the element will be destroyed and a new one will be created even if the position in the tree is the same as before(Using keys to reset state ). ,_
> - _If we have the same element at the same position in the tree, the DOM element and state will be kept. If we define different key propery in the element, React understands that a different component instance and create React element and state. ,_
> - _React performs event delegation for all events in our applications. We can say that React delegates all events to the root DOM container because that where they will actually get handled not in the place where we thought we registered them. Whenever a click happens on the button a new event object is fired off on the document which will then travel down the DOM tree. Until it reaches the target element. From there the event will bubble back up. Then as soon as the event reaches the root container where React registered all our handlers the event actually get handled according to whatever handlers match the event and the target element. And all works are done the event continues bubbling up until it disappears into nowhere. The DOM tree is what matters here not the component tree.,_
> - _**What is Framework?** A framework is basically a complete structure that includes everything that you need in order to build a complete large scale application. If you want to build a large scale single page application, you will need to include many external third party libraries for things like routing, HTTP request and so on. All thede functionalities are not part of React itself unlike what happens with Angular and other frameworks.,_
> - _A component is like a blueprint for a piece of UI that will eventually exist on the screen. When we "use" a componenti, React creates a component instance, which is like an actual physical manifestation of a component, containing props, state, and more. A component instance when rendered , will return a React element ,_
> - _"Rendering" only means calling component functions and calculating what DOM elements need to be inserted, deleted or updated. It has nothing to do with writing to the DOM. Therefore, each time a component instance is rendered and re-renderedi the function is called again. ,_
> - _Only the initial app render and state updates can cause a render , which happens for the entire application, not just one single component. ,_
> - _When a component instance gets re-rendered, all its children will get re-rendered as well. This doesn't mean all children will get updated in the DOM, thanks to reconciliation, which checks which elements have actually changed between two renders. But all re-rendering can still have an impact on performance. ,_
> - _Diffing is how React decides which DOM elements need to be added or modified. If between renders, a certain React element stays at the same position in the element tree , the corresponding DOM element and component state will be same. If the element changed to a different position, or if it's a different element type , the DOM element and state will be destroyed. ,_
> - _Giving elements a key prop allows React to distinguish between multiple component instances. When a key stays the same across renders, the element is kept in the DOM. This is why we need to use keys in lists. When we change the key between renders, the DOM element will be destroyed and rebuilt. We use this as a trick to reset state ,_
> - _Never declare a new component inside another component! Doing so will re-create the nested component every time the parent component re-renders. React will always see the nested component as new and therefore reset its state each time the parent state is updated ,_
> - _The logic that produces JSX output for a component instance (render logic) is not allowed to produce any side effects: no API calls, no timers, no object or variable mutations, no state updates. Side effects are allowed in event handlers and useEffect ,_
> - _The DOM is updated in the commit phase, but not by React but by a renderer called ReactDOM. That's why we always need to include both librariesin a React web app project. We can use otherrenderers to use React on different platforms, for example to build mobile or native apps. ,_
> - _Multiple state updates inside an event handler function are batched, so they happen all at once causing only one re-render. This means er can not access a state variable immediately after updating it. State updates are asynchronous. Since React 18, batching also happens in timeouts, promises and native event handlers. ,_
> - _When using events in event handlers, we get access to a synthetic event object, not the browser's native object, so that events work the same way across all the browsers. The difference is that most synthetic events bubble, including focus, blur and change , which do not bubble as native browser events. Only the scroll event does not bubble ,_
> - _React is a library, not a framework. This means that you can assemble your application using your favorite third-party libraries. The downside is that you need to find and learn all these additional libraries. ,_
> - _**What is the side effect,?** A side effect is basically any "interaction between a React component and the world outside the component". We can also think of a side as "code that actually does something" such as data fetching, setting up subscriptions, setting up timers, manually accessing the DOM etc. There are two way of side effect. Event handlers and Effects ,_
> - _Event handlers are triggered by events. Like onClick, onSubmit etc. Effects are triggered by rendering and allow us to write code that will run at different moments: mount, re-render or unmount. ,_
> - _Event Handlers are executed when the corresponding event happens and used to react to an event,_
> - _Effects(useEffect) are executed after the component mounts(initial render) and after subsequent re-renders(according to dependency array) and used to keep a component synchronized with some external system like API ,_
> - _**What is the useEffect dependency array?** By default in effect will run after each and every render.We can prevent that by passing a dependency array into the useEffect hook as a second argument. Without this array react doesn't know when to actually run the effect. If we do specify the effect dependencies by passing in dependency array the effect will be executed each time that one of the dependencies changes. Effect dependencies are state and props that are used inside the effect. Every state variable and prop used inside the effect must be included in the dependency array. ,_
> - _useEffects is like an event listener that is listening for one dependency to change. Whenever a dependency changes, it will execute the effect again.,_
> - _Effects react to updates to state and props used inside the effect. The useEffect is a truly synchronization mechanism. A mechanism to synchronize effects with the state of the application. ,_
> - _We can use the dependency array in order to run effects when the component renders or re-renders,_
> - _Effects are only executed after the browser has painted the component instance on the screen, not immediately after the render. That is why we say that effects run asynchronously after the render has already been painted to the screen. Because effects may contain long-running processes such as fetchin data. ,_
> - _**What is The CleanUp Function?** We can return The CleanUp function from an effect it is optional. It runs on two occasions:
>   1- Before the effect is executed again(re-render according to dependency array)
>   2-After a component has unmounted. ,_
> - _Necessary whenever the side effect keeps happenning after the component has been re-rendered or unmounted and also each effect should do only one thing! Use one useEffect hook for each side effect. This makes effects easier to clean up. ,_
> - _The rules of Hooks:
>   1 - Only call hooks at the top level of code: Do not call hooks inside conditionals, loops, nested functions or after an early return. This is necessary to ensure that hooks are always called in the same order.
>   2 - Only call hooks inside a function component or a custom hook ,_
> - _Whenever initial state depends on some computation for example, reading data from local storage we can pass in a callback function like this instad of just a single value. This functions must be pure and accept no arguments. This process is sometimes called lazy evaluation. This callback function is only called on the initial render of the component on subsequent re-render it will simply be ignored. ,_
> - _If we want to update state based on the current state, we can give the setter function a callback function that function is pure and returns the next state based on the current state. While updating state never mutate arrays or objects instead you must create new object or new array which incorporates the changes that you want to make. ,_
> - _What are refs? Ref stands for referece and it's like a box into which can put any data that we want to be preserved between renders. In technical terms, when we use useRef React will give us an onject with mutable current property. We can then write any data into this current property and read from it.,_
> - _We can use refs to create variable that will stay the same between renders (preserving previous state, siteTimeout function, storing the id) . Also we can use refs to select and store DOM elements. ,_
> - _Refs usullay used for data that is not rendered individual output of the component. Refs appear in event handlers or effects but not in the JSX. If you need data that participates in the visual output of the component, you actually need state and not a ref. Also you are not allowed to write or read .current property in render logic as that create an undesirable side effect. We usually perform these mutations inside a useEffect hook. ,_
> - _State and refs both persist across renders. The componet remember these values even after re-rendering. Updating state causes the component re-render while refs does not. State store data that should ree-render the component and refs for data that should only be remembered by the component over time but never re-render it. And State is immutable but refs are mutable. State is updates asynchronously which means we can not use the new state immediately after updating it. With refs on the other hand updates are not asychronous. We can actually read a new current property immediately after updating it like any other regular Javascript object.,_
> - _If we need a piece of UI, we use component. If you want to reuse logic in React, you can use cudtom hooks if the logic contains hooks? if don't you should use regular function. ,_
> - _Custom hooks allow us to reuse stateful logic, non-visual-logic among multiple components. One custom hook should only have one purpose, to make it reusable and portable ,_
> - _A custom hook is really a Javascript function, it can receive and return any data that is relevant to this custom hook. It's very common to return an object or array from a custom hook . The difference between custom hooks and regular function is Custom hooks need to use one or more React hooks and React recognize this function as an actual hook the function name needs to start with "use" just like all the built in React hooks. Otherwise it's gonna be just a regular function in the eyes of React.,_
>
> #

<br/>
<br/>

## [08 - React Quiz]

#### What did I learn while coding this project?

> #
>
> - _When we have a lot of state variables state variables and state updates, spread across mant event handlers all over the component, updating one piece of state depends on one or multiple other pieces of state, mutiple state updates need to happen at same time we use useReducer hook in React. ,_
> - _useReducer is an alternative way of setting and managing state which is ideal for complex state and for related pieces of state.,_
> - _We call useReducer with a reducer function and its initial state and it returns a state and a dispatch function. Reducer function is where we place all the logic that will be reposnsible for updating the state and all state updating logic from event handlers into this one central place allows us to completely decouple state logic from the component itself which make our component so much cleaner and readable. This reducer function will update the state like setState() function and return new state. Reducer is simply a function that takes in the current state and an action, based on those values returns the next state. State is immutable in React. Reducer is not allow to mutate the state in fact no side effects are allowed in the reducer at all. The reducer function must be a pure function. That always returns a new state based on the current state and current action. The action is simply an object that describe how state should be updated. It usually contains an action type and so-called payload which is basically input data and based on action and payload reducer will determine how to create next state. useReducer function returns dispatch function which is a function that we can use to trigger state updates by sending an action to reducer function and reducer function use this action object to compute the next state. ,_
> - _useState is ideal for single, independent pieces of state and logic to update state is placed directly in event handlers or effects, spread all over one or multiple components. State is updated by calling setState function and state updates are imperative. ,_
> - _useReducer is ideal for multiple related pieces of state and compledx state and logic to update state lives in one central place, decoupled from components: the reducer function. State is updated by dispatching an action to a reducer. state updates are declarative: complex state transitions are mapped to actions. ,_
>
> #

<br/>
<br/>

## [09 - WorldWise]

#### What did I learn while coding this project?

> #
>
> - _**What is Routing?** Routing matchs different URLs to different views in the user interface. We match each URL to a specific React component and we call each of these matches between a URL and a component as route. Then one of those specific URLs gets visited the corresponding react component will be rendered.This enables users to navigate between different applications screens, using the browser URL. Routing like this keeps the user interface nicely in sync with the current browser URL. This type of routing only works this way on the client side. ,_
> - _**What is Single-Page Applications(SPA)?** Single-Page applications or SPAs for short are web applications that are executed entirely on the client only in the user's web browser. ,_
> - _Whenever a user clicks on a special link provided by the Router, the URL in the browser simply changes. In React this job is done by React Router. Changing the URL will then trigger the DOM to be updated as a result. The page simply updated by Javascript which means there will never be a complete page reload,_
> - _Why do we use The URL for state management? Easy way to store state in a global place, accessible to all components in the app and it is good way to pass data from one page into the next page.Also it makes possible to bookmark and share the page with the exact UI state it had at the time. ,_
>
> #

<br/>
<br/>
