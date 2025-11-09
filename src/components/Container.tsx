import { Card, Typography } from "@mui/material";
import type { ReactNode } from "react";

interface Props {
  heading?: string;
  children: ReactNode;
}

const Container = ({ heading, children }: Props) => {
  return (
    <Card
      className="////container grid"
      sx={{
        p: 4,
        width: { xs: "90%", sm: "fit-content" },
        minWidth: { sm: "400px" },
        borderRadius: "8px",
        boxShadow: "0 0.3px 0.5px rgba(244, 67, 54, 0.6)",
      }}
    >
      {heading && (
        <Typography sx={{ fontSize: 30 }} fontWeight="bold" mb={3} color="#f44336">
          {heading}
        </Typography>
      )}
      {children}
    </Card>
  );
};

export default Container;
