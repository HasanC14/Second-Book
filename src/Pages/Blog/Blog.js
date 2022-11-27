import React from "react";
//import { TabTitle } from "../../TitleChange";

const Blog = ({ title }) => {
  // if (!title) {
  //   TabTitle("Blog");
  // }
  return (
    <div className="md:mb-20 max-w-screen-xl mx-auto ">
      <div className="md:mb-12 md:mt-10">
        <p className="md:text-6xl text-3xl text-center font-black">Blog</p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 m-10">
        <div className="max-w-3xl p-6 overflow-hidden rounded-lg shadow dark:bg-gray-600 dark:text-gray-100 flex justify-center items-center">
          <article>
            <h2 className="text-xl font-bold">
              What are the different ways to manage a state in a React
              application?
            </h2>
            <p className="mt-4 dark:text-gray-400">
              There are four main types of state you need to properly manage in
              your React apps: Local state: Local state is data we manage in one
              or another component. Global state: Global state is data we manage
              across multiple components. Server state: Data that comes from an
              external server that must be integrated with our UI state. URL
              state: Data that exists on our URLs, including the pathname and
              query parameters.
            </p>
          </article>
        </div>
        <div className="max-w-3xl p-6 overflow-hidden rounded-lg shadow dark:bg-gray-600 dark:text-gray-100">
          <article>
            <h2 className="text-xl font-bold">
              How does prototypical inheritance work?
            </h2>
            <p className="mt-4 dark:text-gray-400">
              The Prototypal Inheritance is a feature in javascript used to add
              methods and properties in objects. It is a method by which an
              object can inherit the properties and methods of another object.
              Traditionally, in order to get and set the Prototype of an object,
              we use Object. getPrototypeOf and Object.
            </p>
          </article>
        </div>
        <div className="max-w-3xl p-6 overflow-hidden rounded-lg shadow dark:bg-gray-600 dark:text-gray-100">
          <article>
            <h2 className="text-xl font-bold">
              What is a unit test? Why should we write unit tests?
            </h2>
            <p className="mt-4 dark:text-gray-400">
              The main objective of unit testing is to isolate written code to
              test and determine if it works as intended. Unit testing is an
              important step in the development process, because if done
              correctly, it can help detect early flaws in code which may be
              more difficult to find in later testing stages.
            </p>
          </article>
        </div>
        <div className="max-w-3xl p-6 overflow-hidden rounded-lg shadow dark:bg-gray-600 dark:text-gray-100">
          <article>
            <h2 className="text-xl font-bold">React vs. Angular vs. Vue?</h2>
            <p className="mt-4 dark:text-gray-400">
              Vue provides higher customizability and hence is easier to learn
              than Angular or React. Further, Vue has an overlap with Angular
              and React with respect to their functionality like the use of
              components. Hence, the transition to Vue from either of the two is
              an easy option.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Blog;
