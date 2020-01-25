- [ ] Why would you use class component over function components (removing hooks from the question)?

    -   When negating hooks from functional components, a class component offers much more functionality and control over data with the ability to manipulate state.
    
- [ ] Name three lifecycle methods and their purposes.

    -	componentDidMount(): This method runs following the initial render of the class component and executes code within.

    -	setState() is used to set or update State values within a class component. Using this method will trigger a render unless shouldComponentUpdate() says otherwise. Leading us to…

    -	componentDidUpdate() which triggers every time the component runs a render following the initial componentDidMount().


- [ ] What is the purpose of a custom hook?

    -	Custom hooks allow one to create stateful logic that can be called upon for use throughout an application. For example, instead of creating multiple functions to handle changes for every input in a form, across multiple forms on multiple pages, one can create a single custom hook to call upon and process those changes and manage state. They are super awesome!

- [ ] Why is it important to test our apps?

    -	Testing is an important part of any and every development workflow. It allows for greater understanding of how data is being managed and how your application is working. Testing makes it easier to understand and correct errors in addition to making code easier to maintain long-term. Most of these benefits though, rely on well-constructed and relevant tests. If the only thing your testing is whether or not your application renders, that won’t be much help when the error stopping it is an array on line 36 that is actually being read as an object…