import Home from "./pages/Home";
import DocsLayout from "./layouts/DocsLayout";
import Topics from "./pages/Topics";
import Overview from "./pages/Overview";
import Examples from "./pages/Examples";
import API from "./pages/API";
import RootLayout from "./layouts/RootLayout";
import DocsHome from "./pages/DocsHome"
const Day9Routes = {
  path: "day9",
  element: <RootLayout />,
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: "docs",
      element: <DocsLayout />,
      children: [
        {
          index: true,
          element: <DocsHome />,
        },
        {
          path: ":topicId",
          element: <Topics />,
          children: [
            {
              index: true,
              element: <Overview />,
            },
            {
              path: "examples",
              element: <Examples />,
            },
            {
              path: "api",
              element: <API />,
            },
          ],
        },
      ],
    },
  ],
};

export default Day9Routes;
