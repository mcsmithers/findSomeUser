# Github API Demo

## Summary
This is a project that explores the [Angular](https://angular.io/) framework.  Angular uses [TypeScript](https://www.typescriptlang.org/) which is similar to JavaScript, but it has strict typing and is object-oriented.  It allows for application to grow and become easier to maintain.  

Angular is one of the first popular Javascript frameworks.  Originally, it introduced binding components so that they could change.  Over time, Angular has evolved to have a robust cli that improves on its original iterations by having generators and monitoring state.  Components are still a major part of Angular, but instead of doing the MVC way of thinking that was originally present, it's more built so applications can have different modules and components with different jobs in each one such as services to make API requests and then modules to change update the components.  

For styling, [Angular Material](https://material.angular.io/) was used.  It's developed by Google like Angular.  It's a nice styling framework that works similar to Bootstrap, but with a [grid](https://cssreference.io/css-grid/) in mind.  It also has built-in assets such as colors that are coordinated by designers to work well together. To understand how grid works, I highly recommend reading the [guide](https://css-tricks.com/snippets/css/complete-guide-grid/) to it from CSS Tricks in order to see how Material works.

This has has been built in Angular using their [cli](https://cli.angular.io/) and was generated using [Nx](https://nx.dev).  Having a generator helps since you can easily create the needed files and have the imports and other essentials ready to use,so you can focus your development time on code with some automated assistance.  

[Cypress](https://www.cypress.io/) is used for e2e testing so you can have easy-to-understand tests that test endpoints, front-end element behavior, an so forth. The tests in this project were automatically generated, but it's easy to write your own with Cypress. 

[Jest](https://jestjs.io/) is used for unit tests in this project, but you can use others such as Karma in your own projects.  Jest is easy to use and their documentation is detailed, so it's a good place to start for unit testing in JS.

[Postman](https://www.getpostman.com/) was used to test API calls.  While no authentication is used for the [Github API](https://developer.github.com/v3/), Postman is great for those that require it so calls can be correctly coded. 


## Quick Start & Documentation

### Development server
To begin, first clone the project. After you have a local copy of it, `cd` into the `github-demo` folder.  

Run `ng serve github-demo` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload for any changes in the code.

### Build

Run `ng build github-demo` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Jest](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Cypress](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

If you want to learn more about Angular, I highly recommend the following resources beacuse they helped me learn enough to get this project done:
* [Front End Masters Angular Core](https://frontendmasters.com/workshops/angular-core/) was a great resource for me since it introduced the core concepts of Angular to me as well as the tools within it.
* [Free Code Camp's Angular Course](https://www.youtube.com/watch?v=2OHbjep_WjQ) was good to listen to as well to see how everything fits together.
* [Angular's Heroes Tutorial](https://angular.io/tutorial) was another good resource when I was trying to work with services and work with a solid example from the creators themselves.
