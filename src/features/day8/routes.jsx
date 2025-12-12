import { lazy, Suspense } from "react";
import PageLoader from "../../components/PageLoader";

const Day8Page = lazy(() => import("../day8/Day8Page"));
const UserList = lazy(() => import("../day8/pages/UserList"));
const UserProfile = lazy(() => import("../day8/pages/UserProfile"));

const Day8Routes = {
  path: "day8",
  element: <Day8Page />,
  children: [
    {
      index: true,
      element: (
        <Suspense fallback={<PageLoader size="20" />}>
          <UserList />
        </Suspense>
      ),
    },
    {
      path: "user/:id",
      element: (
        <Suspense fallback={<PageLoader size ="20"/>}>
          <UserProfile />
        </Suspense>
      )
    },
  ],
};

export default Day8Routes;
