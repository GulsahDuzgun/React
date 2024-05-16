### What did I learn while coding this project?

> #
>
> - _**What is Context API?** Context API prevents prop drilling and allows components everywhere in the tree to read state that a context shares. Context API is a system to pass data throughout the application without having to manually pass props down the component tree. It essentially allows us to broadcast global state. ,_
> - _The first part of the Context API is the provider which is a special React component that gives all child components access to a so-called value. This provider can sit everywhere in the component tree but it's common to place it at the very top. And pass this state value into the provider. And Consumers all components that read the provided context value. Consumers are the components that subscribe to the context so they are able to read the value from the context. We can create as many consumer as we want. ,_
> - _When the state value gets updated all consumers will be re-rendered. All the components that are reading the context value. Whenever the value is updated the provider will immediately notify the consumers about the value change and it will re-render those components. ,_
> - _A component instance gets re-rendered only in 3 different situations: State Changes, Context Changes, Parent Re-renders(prop updates) ,_
>
> #
