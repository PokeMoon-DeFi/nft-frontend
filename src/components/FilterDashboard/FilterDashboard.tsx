import React, { FC, useEffect } from "react";
import { Grid, ListItemText } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from "@material-ui/core/styles";
import TypedChip from "components/Chip/TypeChip";
import { RarityChip } from "components/Chip/RarityChip";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "components/Button";
import TableChartIcon from "@material-ui/icons/TableChart";
import AppsSharpIcon from "@material-ui/icons/AppsSharp";
import { PM_TYPES } from "config/constants/nfts";
import { PackChip } from "components/Chip";
import { renamePack } from "utils";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
    chips: {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "column",
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
  })
);

const capitalize = (s: string) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
};

interface DashboardProps {
  onViewStateChange: (state: string) => void;
  onTypeFilterChange: (filter: string[]) => void;
  onRarityFilterChange: (filter: string[]) => void;
  onPackFilterChange: (filter: string[]) => void;
  onSearchFilterChange: (filter: string) => void;
}

const Dashboard: FC<DashboardProps> = (props) => {
  const {
    onViewStateChange,
    onTypeFilterChange,
    onRarityFilterChange,
    onPackFilterChange,
    onSearchFilterChange,
  } = props;
  const classes = useStyles();
  const theme = useTheme();

  const supportedTypes: string[] = Object.keys(PM_TYPES).map((key) =>
    capitalize(key)
  );

  const supportedRanks = Object.keys(theme.palette.rarity).map((key) =>
    capitalize(key)
  );
  const supportedPacks = ["Blast-Off!", "Amped Up", "Mean Greens"];

  const [activeTypes, setActiveTypes] = React.useState<string[]>([]);
  const [activeRanks, setActiveRanks] = React.useState<string[]>([]);
  const [activePacks, setActivePacks] = React.useState<string[]>([]);
  const [searchState, setSearchState] = React.useState<string>("");
  const [viewState, setViewState] = React.useState<string>("grid");

  const isGrid = viewState === "grid";

  const handleTypeChange = (event: any) => {
    const val = event.target.value;
    onTypeFilterChange(val);
    setActiveTypes(val);
  };

  const handleRankChange = (event: any) => {
    const val = event.target.value;
    onRarityFilterChange(val);
    setActiveRanks(val);
  };

  const handlePackChange = (event: any) => {
    const val = event?.target.value;
    onPackFilterChange(val);
    setActivePacks(val);
  };

  useEffect(() => {
    onViewStateChange(viewState);
  }, [viewState, onViewStateChange]);

  return (
    <Grid
      container
      style={{
        marginTop: 20,
        marginBottom: 20,
        alignItems: "center",
        verticalAlign: "baseline",
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "white",
        border: "purple",
        borderStyle: "solid",
        borderRadius: 25,
        borderWidth: 5,
        paddingBottom: 10,
      }}
    >
      {/* Search Bar */}
      <div>
        <TextField
          style={{ verticalAlign: "baseline", marginRight: 16 }}
          label="Search 🔍"
          placeholder=""
          onChange={(event) => {
            const val = event.target.value;
            if (val !== searchState) {
              setSearchState(val);
            }
          }}
        />
        <Button onClick={() => onSearchFilterChange(searchState)}>Go</Button>
      </div>
      {/* Type Chip */}
      <FormControl className={classes.formControl}>
        <InputLabel>Types</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={activeTypes}
          onChange={handleTypeChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {(selected as string[]).map((value) => (
                <TypedChip
                  type={value}
                  key={value}
                  label={value}
                  className={classes.chip}
                />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {supportedTypes.map((type, index) => {
            return (
              <MenuItem key={index} value={type}>
                <Checkbox checked={activeTypes.indexOf(type) > -1} />
                <ListItemText primary={type} />
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      {/* Rarity */}
      <FormControl className={classes.formControl}>
        <InputLabel>Rarity</InputLabel>
        <Select
          labelId="type-checkbox"
          id="type-checkbox"
          multiple
          value={activeRanks}
          onChange={handleRankChange}
          input={<Input id="select-rarity-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {(selected as string[]).map((value) => (
                <RarityChip
                  rarity={value}
                  key={value}
                  label={value}
                  className={classes.chip}
                />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {supportedRanks.map((type, index) => {
            return (
              <MenuItem key={index} value={type}>
                <Checkbox checked={activeRanks.indexOf(type) > -1} />
                <ListItemText primary={type} />
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      {/* Packs Filter */}
      <FormControl className={classes.formControl}>
        <InputLabel>Sets</InputLabel>
        <Select
          labelId="packs-checkbox"
          id="packs-checkbox"
          multiple
          value={activePacks}
          onChange={handlePackChange}
          input={<Input id="select-pack" />}
          renderValue={(selected) => {
            return (
              <div className={classes.chips}>
                {(selected as string[]).map((value) => (
                  <PackChip pack={renamePack(value)} className={classes.chip} />
                ))}
              </div>
            );
          }}
          MenuProps={MenuProps}
        >
          {supportedPacks.map((pack, index) => {
            return (
              <MenuItem key={index} value={pack}>
                <Checkbox checked={activePacks.indexOf(pack) > -1} />
                <ListItemText primary={pack} />
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <ButtonGroup>
        <Button
          style={{
            background:
              "linear-gradient(0deg, rgba(34,15,46,1) 0%, rgba(100,60,163,1) 100%)",
            border: "1px solid #ffffff",
          }}
          onClick={() => setViewState("table")}
        >
          <TableChartIcon style={{ fill: isGrid ? "black" : "white" }} />
        </Button>
        <Button
          style={{
            background:
              "linear-gradient(0deg, rgba(34,15,46,1) 0%, rgba(100,60,163,1) 100%)",
            border: "1px solid #ffffff",
          }}
          onClick={() => setViewState("grid")}
        >
          <AppsSharpIcon style={{ fill: !isGrid ? "black" : "white" }} />
        </Button>
      </ButtonGroup>
    </Grid>
  );
};

export default Dashboard;
