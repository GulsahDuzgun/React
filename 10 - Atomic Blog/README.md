### What did I learn while coding this project?

> #
>
> - _**What is Context API?** Context API prevents prop drilling and allows components everywhere in the tree to read state that a context shares. Context API is a system to pass data throughout the application without having to manually pass props down the component tree. It essentially allows us to broadcast global state. ,_
> - _The first part of the Context API is the provider which is a special React component that gives all child components access to a so-called value. This provider can sit everywhere in the component tree but it's common to place it at the very top. And pass this state value into the provider. And Consumers all components that read the provided context value. Consumers are the components that subscribe to the context so they are able to read the value from the context. We can create as many consumer as we want. ,_
> - _When the state value gets updated all consumers will be re-rendered. All the components that are reading the context value. Whenever the value is updated the provider will immediately notify the consumers about the value change and it will re-render those components. ,_
> - _A component instance gets re-rendered only in 3 different situations: State Changes, Context Changes, Parent Re-renders(prop updates) ,_
> - _**What is memoization?** Memoization is an optimization technique that executes a pure function one time then it stores the results in cache. If we later try to execute the same function again with the same inputs, it will simply return the results that was previously stored in the cache. If the arguments are exactly the same as before it means that in a pure function, the output will be the same. On the other hand inputs are different, the function will be executed again ,_
> - _**What is memoization in React?** We can memoize components with memo, memoize objects with useMemo, memoize functions with useCallback. With doing memoize we prevent wasted renders and improve app speed/responsiveness. _
> - _React contains a memo function. We can use this function to create a component that will not re-render when its parent re-renders as long as the past prop stay the same between renders. We use memo to create a memoized component. The regular behaviour in React whenever the components re-renders the child components are re-rendered as well. If we memoize the child component, it will not re-render as lons as the props are the same as in the previous render. If the props do cahange then the child component will need to re-render in order to reflect this new data that it was received. ,_
> - _A memoized component will still re-render when its own state changes or a context that it is subscribed to. ,_
> - _memo is useful when we dealing with heavy component, re-renders quite frequently and does so with the same props. ,_
>
> #
