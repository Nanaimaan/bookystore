import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Button } from "@mui/material";
import "./css/filter.css";

function valuetext(value) {
  return `${value}°C`;
}
const minVal = 0;
const maxVal = 100;
export default function Filter({
  searchParams,
  setSearchParams,
  dispatch,
  getProducts,
}) {
  const [value, setValue] = React.useState([
    searchParams.get("price_gte") || minVal,
    searchParams.get("price_lte") || maxVal,
  ]);

  const [type, setType] = React.useState(searchParams.get("genre") || "all");

  useEffect(() => {
    let object = {
      price_gte: value[0],
      price_lte: value[1],
      q: searchParams.get("q") ? searchParams.get("q") : "",
    };
    if (type != "all") {
      object.genre = type;
    }
    setSearchParams(object);

    dispatch(getProducts());
  }, [value, type]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleType = (e) => {
    if (e === "all") {
      searchParams.delete("genre");
      setSearchParams(searchParams);
    }
    setType(e);
  };
  const handleReset = () => {
    setSearchParams({});
    setType("");
    setValue([minVal, maxVal]);
    dispatch(getProducts());
  };

  return (
    <div className='filter-type-container'>
      <div className='test'>
        <button
          className='flex-button'
          sx={{ color: "#21272D", fontWeight: "600" }}
          onClick={() => handleType("all")}
        >
          All
        </button>
        <button
          className='flex-button'
          sx={{ color: "#21272D", fontWeight: "600" }}
          onClick={() => handleType("fantasy")}
        >
          Fantasy
        </button>
        <button
          className='flex-button'
          sx={{ color: "#21272D", fontWeight: "600" }}
          onClick={() => handleType("fiction")}
        >
          Fiction
        </button>
        <button
          className='flex-button'
          sx={{ color: "#21272D", fontWeight: "600" }}
          onClick={() => handleType("romance")}
        >
          Romance
        </button>
        <button
          className='flex-button'
          sx={{ color: "#21272D", fontWeight: "600" }}
          onClick={() => handleType("self-help")}
        >
          Self-help
        </button>

        {/* <Button
          sx={{ color: "#21272D", fontWeight: "600" }}
          onClick={handleReset}
        >
          Clear
        </Button> */}

        {/* <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="all"
          name="radio-buttons-group"
          value={type}
          onChange={(e) => handleType(e.target.value)}
        >
          <FormControlLabel value="all" control={<Radio />} label="All" />
          <FormControlLabel
            value="fantasy"
            control={<Radio />}
            label="Fantasy"
          />
          <FormControlLabel
            value="self-help"
            control={<Radio />}
            label="Self-help"
          />
          <FormControlLabel
            value="romance"
            control={<Radio />}
            label="Romance"
          />
        </RadioGroup>
      </FormControl> */}
        {/* <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={minVal}
        max={maxVal}
      /> */}
      </div>
    </div>
  );
}
