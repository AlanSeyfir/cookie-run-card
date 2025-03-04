import { Box, Button, Rating } from "@mui/material"

const Card = () => {
    return (
        <>
            <Box sx={{ width: "100vw", display: "flex", justifyContent: "center" }}>
                <section>
                    Card
                    <Button variant="contained">Hello Cookies</Button>
                </section>
                <section className="cookie__stats">
                    <div className="">
                        <div>
                            <h4>Power</h4>
                            <p>500,000</p>
                        </div>
                        <div>4 ESTRELLAS</div>
                        <div>Effectos</div>
                    </div>
                    <div>
                        <div>Artefacto1</div>
                        <div>Artefacto2</div>
                        <div>Artefacto3</div>
                        <div>Artefacto4</div>
                        <div>Artefacto5</div>
                        <div>Cooldown +5%</div>
                    </div>
                </section>
                <Rating value={1.5} />
            </Box>
        </>
    )
}

export { Card }