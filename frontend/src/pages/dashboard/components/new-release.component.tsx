import { StyledButton } from "@/components/button/button.component";
import { Box, Grid2, Typography } from "@mui/material";

const NewReleases = () => {
  return (
    <Box
      sx={{
        padding: { xs: "20px", sm: "30px", md: "40px" },
        textAlign: { xs: "center", sm: "left" },
      }}>
      <Grid2
        container
        spacing={3}
        direction={{ xs: "column", sm: "row" }}
        alignItems='center'>
        <Grid2 size={{ xs: 12, sm: 7 }}>
          <Typography
            variant='h4'
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            }}>
            New Releases This Week
          </Typography>
          <Typography
            variant='body1'
            sx={{
              marginTop: "15px",
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
              color: "#494949",
            }}>
            It's time to update your reading list with some of the latest and
            greatest releases in the literary world. From heart-pumping
            thrillers to captivating memoirs, this week's new releases offer
            something for everyone.
          </Typography>
          <StyledButton
            sx={{
              padding: "10px 20px",
              marginTop: "20px",
            }}>
            Subscribe
          </StyledButton>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default NewReleases;
