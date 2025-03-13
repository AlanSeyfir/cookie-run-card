import { Container } from "@mui/material"
import { ProfileImage } from "./ProfileImage";
import { ProfileDetails } from "./ProfileDetails";
import './style.css';
import { Information } from "./Information";
import { useState } from "react";

const Card = () => {
    const [power, setPower] = useState<number>(0);
    return (
        <>
            <Container component={"article"} maxWidth="lg"
                sx={{
                    display: "flex",
                    borderRadius: "10px",
                    overflow: "hidden",
                    padding: 0,
                }}
                style={{ padding: 0, backgroundColor: "#191b27", justifyContent: "space-between" }}
            >

                <ProfileImage />
                <ProfileDetails power={power} />

            </Container>

            <Information setPower={setPower} power={power} />
        </>
    )
}

export { Card }