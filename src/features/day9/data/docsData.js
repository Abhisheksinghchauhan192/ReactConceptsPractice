export const docsData = [
  {
    id: "react",
    title: "React",
    description: "A JavaScript library for building user interfaces",
  },
  {
    id: "javascript",
    title: "JavaScript",
    description: "The language of the web",
  },
  {
    id: "node",
    title: "Node.js",
    description: "JavaScript runtime built on Chrome V8",
  },
];

export const docsContent = {
  react: {
    overview:
      "React is a JavaScript library developed by Facebook for building fast, interactive user interfaces using reusable components. It follows a declarative approach and uses a virtual DOM to efficiently update the UI.",

    examples:
      "Common React examples include managing state with useState, handling side effects with useEffect, lifting state up between components, conditional rendering, and building controlled forms.",

    api:
      "Core React APIs include useState for state management, useEffect for side effects, useContext for global state sharing, memo for performance optimization, and lazy/Suspense for code splitting."
  },

  javascript: {
    overview:
      "JavaScript is a high-level, interpreted programming language that powers the dynamic behavior of websites. It runs in the browser as well as on servers through environments like Node.js.",

    examples:
      "Practical JavaScript examples include closures, promises, async/await for asynchronous code, array methods like map/filter/reduce, and event handling in the DOM.",

    api:
      "Important JavaScript APIs include Array methods (map, reduce, filter), Object utilities (keys, values, entries), Fetch API for HTTP requests, and built-in Date and Math objects."
  },

  node: {
    overview:
      "Node.js is a JavaScript runtime built on Chrome’s V8 engine that allows developers to run JavaScript on the server. It is commonly used to build scalable backend services and APIs.",

    examples:
      "Node.js examples include creating REST APIs with Express, handling file uploads, building authentication systems, and working with databases like MongoDB or MySQL.",

    api:
      "Key Node.js APIs include the fs module for file system access, http module for creating servers, path module for handling file paths, and process for environment and runtime control."
  }
};
