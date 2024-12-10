import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import { DashboardLayout } from "./layout/dashboard-layout";
import { BookDetailSkeleton } from "./pages/book-detail/book-detail.skeleton";
import { BookListSkeleton } from "./pages/dashboard/components/book-list.skeleton";
import NotFoundPage from "./pages/not-found";
import CartPageSkeleton from "./pages/cart/cart.skeleton";

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

  const CartPage = lazy(() =>
    import("./pages/cart").then((module) => ({
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
              <Suspense fallback={<BookListSkeleton release />}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path='book-detail/:id'
            element={
              <Suspense fallback={<BookDetailSkeleton />}>
                <BookDetail />
              </Suspense>
            }
          />
          <Route
            path='cart'
            element={
              <Suspense fallback={<CartPageSkeleton />}>
                <CartPage />
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
