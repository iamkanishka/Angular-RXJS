# RXJSfeatureswithAngular

<p align="center">
<a  target="blank"><img src="https://malcoded.com/static/4416ca096472d7da64817eb3bd2c6687/f3583/Angular-RxJs.png" width="320" alt="Coder Logo" /></a>
</p>

RxJS is a library for composing asynchronous and event-based programs by using observable sequences. It provides one core type, the Observable, satellite types (Observer, Schedulers, Subjects) and operators inspired by Array methods (map, filter, reduce, every, etc) to allow handling asynchronous events as collections.

Think of RxJS as Lodash for events.

ReactiveX combines the Observer pattern with the Iterator pattern and functional programming with collections to fill the need for an ideal way of managing sequences of events.

The essential concepts in RxJS which solve async event management are:

Observable: represents the idea of an invokable collection of future values or events.
Observer: is a collection of callbacks that knows how to listen to values delivered by the Observable.
Subscription: represents the execution of an Observable, is primarily useful for cancelling the execution.
Operators: are pure functions that enable a functional programming style of dealing with collections with operations like map, filter, concat, reduce, etc.
Subject: is equivalent to an EventEmitter, and the only way of multicasting a value or event to multiple Observers.
Schedulers: are centralized dispatchers to control concurrency, allowing us to coordinate when computation happens on e.g. setTimeout or requestAnimationFrame or others.


So We will be Looking These Angular-RXJS  features and Learn as we go on.

1. Introduction to RXJS, Reactive Extention for javascript adn why and where we need to use.
2. Understand Observer software pattern and how RXJS uses pattern observer with Observables.
3. Integrating RXJS Library with other popular frameworks like Angular, React, Vue - RXJS.
4. Convert Javascript arrays, Documneting Event handlers and Promises to RXJS Observalbe.
5.  Create a new Custom Observable from Scratch using the RXJS Observable object- RXJS


# Follow the Below Steps

Note:- Before Starting with this Project, Please make sure you have installed latest stabled version of [Nodejs](https://nodejs.org/en/) Application in your System 

For Installation of Angular CLI and Running the Angular Application Please run the below Commands in you System 
## Installing Angular CLI


Install the CLI using the npm package manager:  `npm install -g @angular/cli`

## Create Angular Project
To create, build, and serve a new, basic Angular project on a development server, go to the parent directory of your new workspace use the following commands: `ng new my-first-project`

## Development server

To Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
