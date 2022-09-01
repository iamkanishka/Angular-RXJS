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
5.  Create a new Custom Observable from Scratch using the RXJS Observable object- RXJS.
6. Different ways of creating the observer by object and class and subscibing to Observable in RXJS
7. Observalbe vs Functions.Understand the similarities and Deifference betwwen them - RXJS
8. Cancelling the Subscribed Observalbe execution using the subscription unsubscribe method- RXJS
9. Avaoid Memory Leakage when subscribing and unsubscribing Custom Observable by Cleaning Code.
10. Undersatnding RXJS Operators, Two Kinds of Operators like pipeline & Creattion Operators.
11. Implement multiple operators for Observalbe using pipe method in RXJS.
12. Choose Right RXJS Operators from the list og Categories of operators for an observable.
13. RXJS Operators marble Diagram. understand the functionality of operators by using marble
    https://rxjs-course.dev/static/70a8819bfbc13c46a956a06eccee9614/marble-diagram.svg

Transformation Operator 

14. RXJS Buffer Operator, Understand about Buffer Operator in Transformation Catergory.
15. RXJS BufferCount Operator.Learn Buffer Count Operator in Trasnformation Category.
16. RXJS BufferTime Operator.Learn Buffer Time Operator in Trasnformation Category.
17. RXJS BufferToggle Operator.Learn BufferToggle Operator in Trasnformation Category.
18. RXJS BufferWhen Operator.Learn BufferWhen Operator in Trasnformation Category.

Filterig Operator

19. RXJS Take Operator.Learn Take Operator in Filtering Operator Category.
20. RXJS TakeLast Operator.Learn TakeLast Operator in Filtering Operator Category.
21. RXJS TakeUntil Operator.Learn TakeUntil Operator in Filtering Operator Category.
22. RXJS TakeWhile Operator.Learn TakeWhile Operator in Filtering Operator Category.
23. RXJS Skip Operator.Learn RXJS Filtering Category Skip operator Category.
24. RXJS SkipLast Operator.Learn RXJS Filtering Category SkipLast operator Category.
25. RXJS SkipUntil Operator.Learn RXJS Filtering Category SkipUntil operator Category.
26. RXJS SkipWhile Operator.Learn RXJS Filtering Category SkipWhile operator Category.
27. RXJS Distinct Operator.Learn RXJS Filtering Category Distinct operator Category.
28. RXJS DistinctUntilChanged Operator.Learn RXJS Filtering Category DistinctUntilChanged operator Category.
29. RXJS DistinctUntilKeyChanged Operator.Learn RXJS Filtering Category DistinctUntilKeyChanged operator Category.
30. RXJS Filter Operator.Learn RXJS Filtering Category Filter operator Category.
31. RXJS Sample Operator.Learn RXJS Filtering Category Smaple operator Category.
32. RXJS Audit Operator.Learn RXJS Filtering Category Audit operator Category.
33. RXJS throttle Operator.Learn RXJS Filtering Category throttle operator Category.
34. RXJS First Operator.Learn RXJS Filtering Category First operator Category.
35. RXJS Last Operator.Learn RXJS Filtering Category Last operator Category.
36. RXJS Debounce Operator.Learn RXJS Filtering Category Debounce operator Category.
37. RXJS elementAt Operator.Learn RXJS Filtering Category elementAt operator Category.
38. RXJS ignoreElements Operator.Learn RXJS Filtering Category ignoreElements operator Category.
39. RXJS single Operator.Learn RXJS Filtering Category single operator Category.
40. RXJS map Operator.Learn RXJS Filtering Category map operator Category.
41. RXJS mapTo Operator.Learn RXJS Filtering Category mapTo operator Category.

Creation Category

42. RXJS ajax Operator.Learn RXJS Creation Category ajax operator Category.
78. RXJS Defer Operator.Learn RXJS Creation Operator Function Defer -RXJS.
79. RXJS Range Operator.Learn RXJS Creattion Operator Range Operator - RXJS.
80. RXJS Generate Operator.Learn RXJS Creattion Operator Generate Operator - RXJS.
81. RXJS Timer Operator.Learn RXJS Creattion Operator Timer Operator - RXJS.


Mathematical and Aggregation Category

82. RXJS Count Operator.Learn RXJS Mathematical and Aggregation Operator Count Operator - RXJS.
83. RXJS Max Operator.Learn RXJS Mathematical and Aggregation Operator Max Operator - RXJS.
84. RXJS Min Operator.Learn RXJS Mathematical and Aggregation Operator Min Operator - RXJS.
85. RXJS Reduce Operator.Learn RXJS Mathematical and Aggregation Operator Reduce Operator - RXJS.


Conditional and Boolean IsEmpty Category.

86. RXJS IsEmpty Operator.Learn RXJS Conditional and Boolean IsEmptyOperator Reduce Operator - RXJS.
87. RXJS findIndex Operator.Learn RXJS Conditional and Boolean findIndex Operator Reduce Operator - RXJS.
88. RXJS find Operator.Learn RXJS Conditional and Boolean find Operator Reduce Operator - RXJS.
89. RXJS Every Operator.Learn RXJS Conditional and Boolean Every Operator Reduce Operator - RXJS.
90. RXJS DefaultEmpty Operator.Learn RXJS Conditional and Boolean DefaultEmpty Operator Reduce Operator - RXJS.



Utility Category

91. RXJS toArray Operator.Learn RXJS ToArray Operator -RXJS 






Higher Order Category

43. Higher Order Observables, What are Higher Order mapping Operators and why to use it - 
44. When to use the Higher-Order mapping Operators for an Observable in RXJS
45. RXJS MergeMap Operator, Learn Higher Order Mapping MergeMap Transformation Operator
46. RXJS MergeMapTo Operator, Learn Higher Order Mapping MergeMapTo Transformation Operator
47. RXJS ConcatMap Operator, Learn Higher Order Mapping ConcatMap Transformation Operator
48. RXJS ConcatMapTo Operator, Learn Higher Order Mapping ConcatMapTo Transformation Operator
49. RXJS ExhaustMap Operator, Learn Higher Order Mapping ExhaustMap Transformation Operator
50. RXJS SwitchMap Operator, Learn Higher Order Mapping SwitchMap Transformation Operator
51. RXJS SwitchMapTo Operator, Learn Higher Order Mapping SwitchMapTo Transformation Operator
52. What are RXJS Subjects, Benifits of Using the Subject over Observable in RXJS
53. MultiCast and UniCast Observables, Why Subjects are Multicast and Observables are Unicast.
54. Demo on How Subjects and Observables behaves as multicast and inicast with observers.
55. Cold Observable vs Hot Observable. Learb differences between the cold and Hot Observable.
56. How to Convert Cold Observable to Hot Observable using Subject with Example.
57. Don't Use Deprecated Multicast Operator, Use Connectable Observable to Hot Observable-RXJS.
58. Publish, MultiCast, refCount and Share Operator, These Converts cold to Hot Observables - RXJS
59. Behaviour Subject -  Difference Between Subject and Behaviour Subject -RXJS.
60. Replay Subject -  Difference Between Replay Subject and Behaviour Subject -RXJS.
61. Async Subject _ Subjects anaother variant Async Subject which emits value when completed - RXJS
62. Void Subject,Invoe Observers without sending values using Void Subjects - RXJS.
63. PublishBehavour Operator.Learn Publish Behaviour for multicasting the observables - RXJS
64. PublishLast Operator.Learn PublishLast for multicasting the observable completion similar like AsyncSubjects - RXJS
65. PublishReplay Operator.Learn PublishReplay for multicasting the observable with connectable and Share - RXJS
66. RXJS CatchError Operator.Learn Error Handling Catch Error Operator for Observalbes Error - RXJS
67. RXJS Retry Operator.Learn RXJS Retry Error handling Operator - RXJS.
68. RXJS RetryWhen Operator.Learn RXJS RetryWhen Error Handling Operator- RXJS.

Join Creation

69. RXJS CombineLatest Operator.Learn Join Creatyion CombineLatest Operator -  RXJS.
70. RXJS Concat Operator.Learn RXJS Join Creation Operator Concat. RXJS.
71. RXJS ForkJoin Operator.Learn RXJS Join -  Forkjoin Operator . RXJS.
72. RXJS merge Operator.Learn RXJS Join -  merge Operator . RXJS.
73. RXJS Partition Operator.Learn RXJS Join -  Partition Operator . RXJS.
74. RXJS race Operator.Learn RXJS Join -  race Operator . RXJS.
75. RXJS zip Operator.Learn RXJS Join -  zip Operator . RXJS.


Schedulers

76. RXJS Schedulers. Learn Async,Asap, Queue, Schedulers in the RXJS Observalbes - RXJS.
77. how Schedulers work in real Time Apply Async ASap & Queue Scheduler for Operators.


































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
