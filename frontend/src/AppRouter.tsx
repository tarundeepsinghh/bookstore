import { Box, CircularProgress } from "@mui/material";
import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import { DashboardLayout } from "./layout/dashboard-layout";
import NotFoundPage from "./pages/not-found";

function AppRouter() {
  const Dashboard = lazy(() =>
    import("./pages/dashboard").then((module) => ({
      default: module.Component,
    }))
  );

  const BookDetail = lazy(() =>
    import("./pages/book-detail").then((module) => ({
      default: module.Component,
    }))
  );

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Navigate to='/dashboard' replace />} />
        <Route path='/' element={<DashboardLayout />}>
          <Route
            path='dashboard'
            element={
              <Suspense
                fallback={
                  <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    style={{ height: "100vh" }}>
                    <Box textAlign='center'>
                      <CircularProgress title='progress loader' />
                      <p>Loading...</p>
                    </Box>
                  </Box>
                }>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path='book-detail/:id'
            element={
              <Suspense
                fallback={
                  <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    style={{ height: "100vh" }}>
                    <Box textAlign='center'>
                      <CircularProgress title='progress loader' />
                      <p>Loading...</p>
                    </Box>
                  </Box>
                }>
                <BookDetail />
              </Suspense>
            }
          />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default AppRouter;
