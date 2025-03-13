import { Box, ImageList, ImageListItem, ImageListItemBar } from "@mui/material"

const ProfileImage = () => {
  return (
    <Box component={"section"} className="cookie__profile" width={"90%"} maxWidth={"50%"}>
      <ImageList
        sx={{ height: "100%" }}
        variant="standard"
        cols={1}
      >
        <ImageListItem>
          <img
            src="https://static1.srcdn.com/wordpress/wp-content/uploads/2025/01/cookie-run-kingdom-shadow-milk-cookie.jpg?q=70&fit=crop&w=1140&h=&dpr=1"
            alt="{item.title}"
            loading="lazy"
            className="image-gradient"
          />

          {/* HEADER */}
          <ImageListItemBar
            sx={{
              padding: ".5rem",
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              "& .MuiImageListItemBar-title": { fontWeight: "bold", marginRight: ".2rem" },
              "& .MuiImageListItemBar-subtitle": { color: "rgba(255, 255, 255, .5)" },
            }}
            title="CocoaMixtle "
            subtitle="- Michi Cookie"
            position="top"
          />

          {/* FOOTER */}
          <ImageListItemBar
            sx={{
              textAlign: "center",
              justifyContent: "center",
              background: "rgba(0, 0, 0, 0)"
            }}
            actionIcon={
              <img className="p-4 w-[11rem]" src="public/img/Ascension_star_2.webp" alt="Ascension star 2" />
            }
          >
          </ImageListItemBar>
        </ImageListItem>
      </ImageList>
    </Box>
  )
}

export { ProfileImage }