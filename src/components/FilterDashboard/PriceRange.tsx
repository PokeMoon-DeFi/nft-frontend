import React, { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import Slider from "@material-ui/core/Slider";
import Button from "components/Button";
import Popover from "@material-ui/core/Popover";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import Box from "@material-ui/core/Box";

const MAX_AMOUNT = 100000;

const PriceRange = () => {
  const [range, setRange] = useState<number[]>([0, MAX_AMOUNT]);
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const ref = React.useRef(null);

  const open = Boolean(anchorEl);

  return (
    <>
      <FormControl>
        <Button
          ref={ref}
          onClick={(event) => {
            setAnchorEl(event.currentTarget);
          }}
        >
          Price
        </Button>
      </FormControl>
      <Popover
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
      >
        <Box paddingLeft={4} paddingRight={4} paddingTop={2}>
          <Typography style={{ marginBottom: 4 }}>Price Range</Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Input
                value={range[0]}
                onChange={(event) => {
                  const val =
                    event.target.value === ""
                      ? MAX_AMOUNT
                      : Number(event.target.value);
                  const updatedRange = [val, range[1]];
                  setRange(updatedRange);
                }}
                inputProps={{
                  step: 10,
                  min: 0,
                  max: MAX_AMOUNT,
                  type: "number",
                  "aria-labelledby": "input-slider",
                }}
              />
            </Grid>
            <Grid style={{ width: 80 }} item xs>
              <Slider
                value={range}
                max={MAX_AMOUNT}
                onChange={(event, val) => setRange(val as number[])}
              />
            </Grid>
            <Grid item>
              <Input
                value={range[1]}
                onChange={(event) => {
                  const val =
                    event.target.value === ""
                      ? MAX_AMOUNT
                      : Number(event.target.value);
                  const updatedRange = [range[0], val];
                  setRange(updatedRange);
                }}
                inputProps={{
                  step: 10,
                  min: 0,
                  max: MAX_AMOUNT,
                  type: "number",
                  "aria-labelledby": "input-slider",
                }}
              />
            </Grid>
          </Grid>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
              marginTop: 12,
              marginBottom: 12,
            }}
          >
            <Button
              onClick={(event) => {
                setRange([0, MAX_AMOUNT]);
              }}
              size={"small"}
            >
              Reset
            </Button>
            <Button onClick={() => setAnchorEl(null)} size={"small"}>
              Confirm
            </Button>
          </div>
        </Box>
      </Popover>
    </>
  );
};

export default PriceRange;
