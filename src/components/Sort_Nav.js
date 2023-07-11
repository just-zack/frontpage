import { Card, CardActions, IconButton, Typography } from "@mui/material";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";

export default function Sort() {
  return (
    <Card
      raised
      sx={{
        display: "flex",
        alignItems: "center",
        marginTop: "20px",
        padding: "10px",
      }}
    >
      <Typography variant="h6" sx={{ paddingLeft: "30px" }}>
        Popular Posts:{" "}
      </Typography>
      <CardActions disableSpacing>
        <IconButton aria-label="hot" sx={{ borderRadius: "0px", gap: "10px" }}>
          <LocalFireDepartmentIcon />
          <Typography>HOT</Typography>
        </IconButton>
        <IconButton aria-label="new" sx={{ borderRadius: "0px", gap: "10px" }}>
          <HistoryOutlinedIcon />
          <Typography>NEW</Typography>
        </IconButton>
        <IconButton aria-label="top" sx={{ borderRadius: "0px", gap: "10px" }}>
          <AutoGraphOutlinedIcon />
          <Typography>TOP</Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
}
