### What did I learn while coding this project?

> #
>
> - _Components describe a piece of the user interface. The Component is a regular Javascript function which returns React elements -usually written as JSX-. A component is a generic description of the UI. We can think of a component as a blueprint or a template. ,_
> - _Component Instances are created when we use components. Component instance is like the actual physical manifestation of a component living. Each instance has its own lifecycle, state and props. Component instance returns one or more React elements. The JSX code in React Component gets converted to multiple React.createElement() function calls. React element is result of using a component in our code. It is a big immutable Javascript object that React keeps in memory. React element keeps information necessary to create DOM elements. React elements eventually are converted to DOM elements. DOM elements visual representation of the React Element on the browser ,_
> - _**How components are displayed on the screen?** First render is triggered, then in render phase React calls component functions and figures out how DOM should be updated. Then in Commit Phase React actually writes to the DOM, updating, inserting and deleting elements. Then Browser Paint. ,_
> - _In React, rendering is not updating DOM or displaying elements on the screen. Rendering only happend internally inside React. It does not produce visual changes. ,_
> - _**How Renders are triggered?** In two situations that trigger renders. 1- Initial render of the application, 2- State is updated in one or more component instance(re-render) _
> - _The render process is triggered for the entire application. In practice it looks like React only re-renders the component where the state update happend but that's not how it works behind the scenes. Renders are not triggered immediately, but scheduled for when the JS engine has some "free time ". There is also batching of multiple setState calls in the event handlers. ,_
>
> #
