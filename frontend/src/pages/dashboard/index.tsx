import { Grid2 } from "@mui/material";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NewReleases from "./components/new-release.component";
import { BookList } from "./components/book-list.component";

export function Component() {
  return (
    <Grid2 container spacing={3}>
      <Grid2 size={{ xs: 12 }}>
        <NewReleases />
      </Grid2>
      <Grid2 size={{ xs: 12 }}>
        <BookList />
      </Grid2>
    </Grid2>
  );
}

// If you want to customize the component display name in React dev tools:
Component.displayName = "DashboardPage";

export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <h1>
        {error.status} {error.statusText}
      </h1>
    );
  }
  const errMsg = error instanceof Error ? error.message : "Unknown error";
  return <h1>{errMsg}</h1>;
}
