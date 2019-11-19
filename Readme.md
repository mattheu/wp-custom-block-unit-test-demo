# Writing Tests for WordPress Custom Blocks.

On Siemens we have been writing a lot of custom functionality for the WordPress block editor, and I’ve been keen to write tests for this. I wanted to try and distill some of what we have done into a small demo plugin to show how you can also write tests for your custom blocks or plugins. This is by no means a definitive guide and I’m certainly open to input from the whole team on the best way to do things!

## Testing JavaScript with Jest

We’ll be working with Jest which is a JavaScript testing framework, and has become something of a standard in the JS and React world. It handles actually running the tests, making assertions and mocking. 

The Jest docs describe it as “delightfully simple" and I would mostly agree with this when dealing with simple JS. I won’t cover the basics here - and would advise you to look at their docs if you’re unfamiliar with it.  However, as simple as Jest is, once you factor in other dependencies, such as React, or WordPress, things start getting a little more complex.

## Testing React.

There are a few libraries that can be used alongside Jest that enable you to test your React code. They typically involve rendering the component using some given props, in a way that lets you interact with it and run assertions against it using Jest. You may have seen react-test-renderer, enzyme or react testing library in use. They all seem pretty similar to me and I have no strong opinions either way, but for the purposes of this document I will be using react-test-renderer. 
Setting Jest up to work with WordPress
Setting up Global variables.
Sometimes you need to set some global variables within the test environment. In my case I just needed to make sure that `wp.element.createElement` was available. I created a `jest.config.js file` in the project root, and added a setupFile, in which I can make sure any global variables are set or mocked as needed. I just made this an alias to `React.createElement`.

## Mocking Dependencies from WP Core.

I’m using `webpack-helpers`, which has all `@wordpress/*` packages configured as externals. This allows us to do things like `import { Button } from '@wordpress/components'`, which maps to the global `wp.components.Button`. 

Because these dependencies are not actually available in the testing environment, the tests don’t run. We could install them so they are available to the tests, but it’s important to remember that we’re not actually trying to test these dependencies, and trying to configure them correctly could potentially add a huge amount of complexity. Instead, we should mock the things we use. Jest supports mocking dependencies by adding files to the `__mocks__` directory, which get picked up automatically. But our WordPress dependencies are not really available, they’re intended to be externals that map to globals and Jest isn’t aware of this. A solution is to manually configure Jest to check here for all `@wordpress/*` imports. See the `moduleNameMapper` in the jest config.

I added a mocks for the few things that we’re being used in this example. Note that mocks don’t need to replicate functionality exactly, they just need to simulate the functionality closely enough that we can write tests. As an example, the `Button` component mock just returns an element, we don’t need to care about replicating all className logic, this should be covered by WordPress core tests. 

## Testing Custom Blocks.

### Testing the logic with Jest

In theory, it’s simple to write tests for simple logic, but often it’s not so easy to separate this out from other code, and therefore hard to test in isolation. 

But often we just have too much of this logic included in our React components. If we break things up and write simple, functional, single purpose functions, they can be exported separately and tested independently of our React component. This allows us to write simpler tests using only Jest, and avoids the extra complexity that comes with testing React components.

In my example, I had some logic in an `onChange` callback that then calls `setAttributes`. I split this out and moved the logic into a utility function, and wrote some much simpler tests for these with Jest alone. Another bonus is that this code is now far more reusable and other components could share this functionality.

### Testing the Edit and Save React Components with React Test Renderer

The Edit and Save properties are just React components. In order to test these I have broken them out into separate files, which export the plain component. My tests can then import the component directly, and render it them using react-test-renderer. 

To get started, I’ve just written some really simple snapshot tests. They’re easy to write and at the least, demonstrate that our components render without error. The downside to snapshot tests is that they any small change will cause them to fail and they will need updating. 

To demonstrate some of the potential of testing React components using Jest and `react-test-renderer`, I have added some additional tests to the Edit component. These find specific elements by class name in the rendered test instance, and call function props such as `onChange` and `onClick`, and verify that doing so is calling our mocked instance of `setAttributes`. This is really powerful, but it can be a little brittle and break if you make changes to the component, e.g. changing the class name.

### Testing Data Store

We often have code that makes use of the core data store. How on earth do we test this? It would be really hard for us to set up a functional version of the Block Editor data store to interact with.

First piece of advice is avoid testing connected components. If the default export from your component file is a connected component (e.g. using withState), you could also export the unconnected component as a named export, and write your tests against this, which is much simpler. 

For the remainder of use cases, I have just mocked the store. This was a little bit of work to configure, but having mocked version of wp/data is a powerful thing to have available to us.

Look at the examples for the image component, which isn’t actually used in the test block, but is based on some real code I have used. The image component uses the `useSelect` hook from the `@wordpress/data` package. This is mocked, and we can import this again in our tests in order to mock single return values for each call. This lets us write several tests and return different results from the store each time.



