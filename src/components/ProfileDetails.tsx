import { Box, Container, Grid2, Typography } from '@mui/material'
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { FC } from 'react';

export const Toppings = () => {
  return (
    <>
      <Container sx={{ backgroundColor: "#15161a", border: 1, borderRadius: "calc(infinity * 1px)", borderColor: "#232941", display: "flex", padding: "1rem 0px 1rem 0px", marginTop: "1rem", maxHeight: "4.68rem", alignItems: "center" }}>
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"} sx={{ borderRight: 1, borderRightColor: "#232941", width: "6.5rem", paddingRight: ".5rem" }}>
          <StarRoundedIcon sx={{ fontSize: "3rem" }} />
          <Box sx={{ width: "50%" }}>
            <Typography sx={{ borderRadius: "calc(infinity * 1px)", backgroundColor: "#013071", color: "#228BCD", fontWeight: "bold", fontSize: ".9rem" }}>
              DEC
            </Typography>
            <Typography sx={{ color: "#32B2F2", textAlign: "start" }}>
              +12
            </Typography>
          </Box>
        </Box>
        <Box sx={{ marginLeft: "1rem", textAlign: "start" }}>
          <Typography sx={{ fontSize: ".8rem" }}>Cooldown 1.7%</Typography>
          <Typography sx={{ fontSize: ".8rem" }}>DMG Resist +5%</Typography>
          <Typography sx={{ fontSize: ".8rem" }}>ATK 4%</Typography>
        </Box>
      </Container>
    </>
  )
}

interface ProfileDetailsProps {
  power: number,
}

const ProfileDetails: FC<ProfileDetailsProps> = ({ power }) => {
  return (
    <Box component={"section"} className="cookie__stats" sx={{ textAlign: "center" }} width={"100%"} maxWidth={"50%"}>
      <Box component={"section"} display={"flex"} className="cookie__stats">
        <Box className="cookie__stats__general mt-2" maxWidth={"50%"}>

          <Box className="cookie__stats_power border m-4 pt-2 rounded-full" sx={{ backgroundColor: "#15161a", borderColor: "#232941", maxHeight: "4.68rem" }}>
            <Typography variant="h3" sx={{ fontSize: "1rem" }}>Power</Typography>
            <Typography variant="body1" sx={{ fontSize: "2.3rem", color: "#d0f472", fontWeight: "600", marginTop: "-8px" }}>{power.toLocaleString("en-US") || '0'}</Typography>
          </Box>

          <Grid2 container spacing={2} className="cookie__stats__stars m-4" >
            <Grid2 size={6} className="p-1 rounded-full border" sx={{ backgroundColor: "#15161a", borderColor: "#232941" }}>
              <Box display={"flex"} justifyContent={"space-around"}>
                <StarRoundedIcon></StarRoundedIcon>
                <Typography>100,000</Typography>
              </Box>
            </Grid2>
            <Grid2 size={6} className="p-1 rounded-full border" sx={{ backgroundColor: "#15161a", borderColor: "#232941" }}>
              <Box display={"flex"} justifyContent={"space-around"}>
                <StarRoundedIcon></StarRoundedIcon>
                <Typography>100,000</Typography>
              </Box>
            </Grid2>
            <Grid2 size={6} className="p-1 rounded-full border" sx={{ backgroundColor: "#15161a", borderColor: "#232941" }}>
              <Box display={"flex"} justifyContent={"space-around"}>
                <StarRoundedIcon></StarRoundedIcon>
                <Typography>100,000</Typography>
              </Box>
            </Grid2>
            <Grid2 size={6} className="p-1 rounded-full border" sx={{ backgroundColor: "#15161a", borderColor: "#232941" }}>
              <Box display={"flex"} justifyContent={"space-around"}>
                <StarRoundedIcon></StarRoundedIcon>
                <Typography>100,000</Typography>
              </Box>
            </Grid2>
          </Grid2>

          <Box className="cookie__stats__effect border m-4 p-4 rounded-3xl" sx={{ backgroundColor: "#15161a", borderColor: "#232941" }}>
            <Box width={"50%"} maxWidth={"40%"} className="border-2 rounded-full m-auto" sx={{ backgroundColor: "#384474", borderColor: "#2289cd", position: "relative", bottom: "30px" }}>
              <Typography className="p-1" variant="h3" sx={{ fontSize: "1rem" }}>
                Effect
              </Typography>
            </Box>
            <Box className="text-start" sx={{ marginTop: "-20px" }}>
              <Typography className="pb-2">
                <span className="font-semibold">ATK</span> 5.0%
              </Typography>
              <Typography className="pb-2">
                <span className="font-semibold">HP</span> -
              </Typography>
              <Typography className="pb-2">
                <span className="font-semibold">CRIT%</span> 5.0%
              </Typography>
            </Box>
          </Box>

        </Box>

        <Box className="cookie__stats__detail mt-2" maxWidth={"50%"}>

          <Toppings />
          <Toppings />
          <Toppings />
          <Toppings />
          <Toppings />

          <Box sx={{ borderRadius: "calc(infinity * 1px)", backgroundColor: "#CF68FF", color: "#0A0B21", fontWeight: "bold", marginTop: "1rem", marginLeft: "0.1875rem", marginBottom: "2rem", width: "50%" }}>
            Cooldown +5%
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export { ProfileDetails }