import React, { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import Slider from "@material-ui/core/Slider";
import Button from "components/Button";
import Popover from "@material-ui/core/Popover";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import Box from "@material-ui/core/Box";
import useMarket from "hooks/useMarket";
import { MAX_KOBAN_PRICE } from "config";

const PriceRange = () => {
  const [localRange, setLocalRange] = useState([0, MAX_KOBAN_PRICE]);
  const { setPriceRange } = useMarket();
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
                value={localRange[0]}
                onChange={(event) => {
                  const val =
                    event.target.value === ""
                      ? MAX_KOBAN_PRICE
                      : Number(event.target.value);
                  const updatedRange = [val, localRange[1]];
                  setLocalRange(updatedRange);
                }}
                inputProps={{
                  step: 10,
                  min: 0,
                  max: MAX_KOBAN_PRICE,
                  type: "number",
                  "aria-labelledby": "input-slider",
                }}
              />
            </Grid>
            <Grid style={{ width: 80 }} item xs>
              <Slider
                value={localRange}
                max={MAX_KOBAN_PRICE}
                onChange={(event, val) => setLocalRange(val as number[])}
              />
            </Grid>
            <Grid item>
              <Input
                value={localRange[1]}
                onChange={(event) => {
                  const val =
                    event.target.value === ""
                      ? MAX_KOBAN_PRICE
                      : Number(event.target.value);
                  const updatedRange = [localRange[0], val];
                  setLocalRange(updatedRange);
                }}
                inputProps={{
                  step: 10,
                  min: 0,
                  max: MAX_KOBAN_PRICE,
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
                setLocalRange([0, MAX_KOBAN_PRICE]);
                setPriceRange([0, MAX_KOBAN_PRICE]);
              }}
              size={"small"}
            >
              Reset
            </Button>
            <Button
              onClick={() => {
                setPriceRange(localRange);
                setAnchorEl(null);
              }}
              size={"small"}
            >
              Confirm
            </Button>
          </div>
        </Box>
      </Popover>
    </>
  );
};

export default PriceRange;
