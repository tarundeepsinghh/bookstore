import { Grid2, Card, Skeleton, CardContent, Box } from "@mui/material";

export const BookListSkeleton = ({
  release = false,
}: {
  release?: boolean;
}) => (
  <>
    {release && (
      <Box sx={{ padding: 4 }}>
        <Skeleton
          variant='text'
          width='50%'
          height={40}
          sx={{ marginBottom: 2 }}
        />
        <Skeleton
          variant='text'
          width='80%'
          height={20}
          sx={{ marginBottom: 2 }}
        />
        <Skeleton
          variant='text'
          width='70%'
          height={20}
          sx={{ marginBottom: 2 }}
        />
        <Skeleton variant='rectangular' width={150} height={40} />
      </Box>
    )}
    <Grid2 container spacing={3} sx={{ padding: 3 }}>
      {Array.from(new Array(12)).map((_, index) => (
        <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
          <Card
            sx={{
              maxWidth: 300,
              display: "flex",
              flexDirection: "column",
            }}>
            <Skeleton variant='rectangular' width='100%' height={140} />
            <CardContent>
              <Skeleton variant='text' width='80%' height={30} />
              <Skeleton variant='text' width='60%' height={20} />
              <Skeleton
                variant='text'
                width='90%'
                height={20}
                sx={{ marginTop: 1 }}
              />
              <Skeleton
                variant='text'
                width='70%'
                height={20}
                sx={{ marginTop: 1 }}
              />
              <Skeleton
                variant='rectangular'
                width={120}
                height={30}
                sx={{ marginTop: 2 }}
              />
            </CardContent>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  </>
);
