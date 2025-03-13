import { Box, Container, TextField } from "@mui/material";
import { FC } from "react";

interface InformationProps {
  power: number;
  setPower: React.Dispatch<React.SetStateAction<number>>;
}

const Information: FC<InformationProps> = ({ power, setPower }) => {

  return (
    <Container component={"article"} maxWidth="lg"
      sx={{
        borderRadius: "10px",
        overflow: "hidden",
        padding: "1rem",
        marginTop: "1rem",
        backgroundColor: "#191b27",
      }}
    >
      <Box>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={(e) => setPower(Number(e.target.value) || 0)} type="number" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Box>
      Power is: {power.toLocaleString("en-US")}
    </Container>
  )
}

export { Information }