import { Box, Container, Grid2, ImageList, ImageListItem, ImageListItemBar, Typography } from "@mui/material"
import './style.css';

const Card = () => {
    return (
        <>
            <Container component={"article"} maxWidth="lg" sx={{ display: "flex", borderRadius: "10px", overflow: "hidden" }} style={{ padding: 0, backgroundColor: "#191b27", justifyContent: "space-between" }}>

                {/* IMAGE */}
                <Box component={"section"} className="cookie__profile" width={"90%"} maxWidth={"50%"}>
                    <ImageList
                        sx={{ height: "100%" }}
                        variant="standard"
                        cols={1}
                    >
                        <ImageListItem>
                            <img
                                // srcSet="../assets/design/image.png"
                                src="https://static1.srcdn.com/wordpress/wp-content/uploads/2025/01/cookie-run-kingdom-shadow-milk-cookie.jpg?q=70&fit=crop&w=1140&h=&dpr=1"
                                alt="{item.title}"
                                loading="lazy"
                                className="image-gradient"
                            />

                            {/* HEADER */}
                            <ImageListItemBar
                                sx={{
                                    padding:".5rem",
                                    background:
                                        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                                    "& .MuiImageListItemBar-title": { fontWeight:"bold", marginRight:".2rem" },
                                    "& .MuiImageListItemBar-subtitle": { color:"rgba(255, 255, 255, .5)" },
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

                {/* DETAILS */}
                <Box component={"section"} className="cookie__stats" sx={{ textAlign: "center" }} width={"100%"} maxWidth={"50%"}>
                    <Box component={"section"} display={"flex"} className="cookie__stats">
                        <Box className="cookie__stats__general mt-2" maxWidth={"50%"}>

                            <Box className="cookie__stats_power border m-4 pt-2 rounded-full" sx={{ backgroundColor: "#15161a", borderColor: "#232941" }}>
                                <Typography variant="h3" sx={{ fontSize: "1rem" }}>Power</Typography>
                                <Typography variant="body1" sx={{ fontSize: "2.3rem", color: "#b3dcb4", fontWeight: "600" }}>500,000</Typography>
                            </Box>

                            <Grid2 container spacing={2} className="cookie__stats__stars m-4" >
                                <Grid2 size={6} className="p-1 rounded-full border" sx={{ backgroundColor: "#15161a", borderColor: "#232941" }}>
                                    <Box display={"flex"} justifyContent={"space-around"}>
                                        <span>⭐</span>
                                        <Typography>100,000</Typography>
                                    </Box>
                                </Grid2>
                                <Grid2 size={6} className="p-1 rounded-full border" sx={{ backgroundColor: "#15161a", borderColor: "#232941" }}>
                                    <Box display={"flex"} justifyContent={"space-around"}>
                                        <span>⭐</span>
                                        <Typography>100,000</Typography>
                                    </Box>
                                </Grid2>
                                <Grid2 size={6} className="p-1 rounded-full border" sx={{ backgroundColor: "#15161a", borderColor: "#232941" }}>
                                    <Box display={"flex"} justifyContent={"space-around"}>
                                        <span>⭐</span>
                                        <Typography>100,000</Typography>
                                    </Box>
                                </Grid2>
                                <Grid2 size={6} className="p-1 rounded-full border" sx={{ backgroundColor: "#15161a", borderColor: "#232941" }}>
                                    <Box display={"flex"} justifyContent={"space-around"}>
                                        <span>⭐</span>
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
                                <Box className="text-start">
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
                            <Container sx={{ backgroundColor: "#15161a", border: 1, borderColor: "#232941", display: "flex", borderRadius: "calc(infinity * 1px)", padding: "0.5rem", marginTop: "1rem" }}>
                                <Box display={"flex"} alignItems={"center"} justifyContent={"center"} sx={{ paddingRight: "1rem", borderRight: 1, borderRightColor: "#232941" }}>
                                    <Typography sx={{ fontSize: "2.5rem" }}>⭐</Typography>
                                    <Box>
                                        <Typography sx={{ borderRadius: "calc(infinity * 1px)", padding: ".3rem", backgroundColor: "#013071", color: "#228BCD" }}>
                                            DEC
                                        </Typography>
                                        <Typography sx={{ color: "#32B2F2", textAlign: "start" }}>
                                            +12
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ marginLeft: "1rem", textAlign: "start" }}>
                                    <Typography>Cooldown 1.7%</Typography>
                                    <Typography>DMG Resist +5%</Typography>
                                    <Typography>ATK 4%</Typography>
                                </Box>
                            </Container>
                            <Box sx={{ borderRadius: "calc(infinity * 1px)", backgroundColor: "#CF68FF", color: "#0A0B21", marginTop: "1rem", marginLeft: "0.1875rem", width: "50%" }}>
                                Cooldown +5%
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export { Card }