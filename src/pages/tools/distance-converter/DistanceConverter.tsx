import React, { useMemo, useState } from "react";
import { Currency, DistanceUnit } from "../../../types";
import {
  Box,
  FormControl,
  Grid,
  InputAdornment,
  Paper,
  TableCell,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";

import { convertDistanceUnits, getDistanceAdornment } from "../../../utils";

const DistanceConverter = () => {
  const [initialUnit, setInitialUnit] = useState<DistanceUnit>(
    DistanceUnit.METER
  );

  const [value, setValue] = useState(0);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newValue: DistanceUnit
  ) => {
    setInitialUnit(newValue);
  };

  const convertedDistanceValue = useMemo(
    () => (unit: DistanceUnit) =>
      convertDistanceUnits(value, initialUnit, unit),
    [initialUnit, value]
  );

  return (
    <>
      {" "}
      <Box
        sx={{
          display: "flex",
          mb: "2rem",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={9}>
            <Paper variant="outlined" sx={{ padding: 2 }}>
              <FormControl>
                <TextField
                  id="outlined-number"
                  label="Number"
                  type="number"
                  value={value}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {getDistanceAdornment(initialUnit)}
                      </InputAdornment>
                    ),
                  }}
                  onChange={(e) => setValue(Number(e.target.value))}
                />
              </FormControl>

              <FormControl>
                <ToggleButtonGroup
                  color="primary"
                  value={initialUnit}
                  exclusive
                  onChange={handleChange}
                >
                  {Object.keys(DistanceUnit).map((key) => (
                    <ToggleButton value={key as Currency}>{key}</ToggleButton>
                  ))}
                </ToggleButtonGroup>
              </FormControl>
            </Paper>

            <Paper elevation={3}>
              <div>
                {Object.keys(DistanceUnit).map((key) => (
                  <div>
                    <TableCell>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <FormControl>
                          <InputLabel htmlFor={`outlined-converted-${key}`}>
                            {key}
                          </InputLabel>
                          <OutlinedInput
                            id={`outlined-converted-${key}`}
                            label={key}
                            type="number"
                            value={convertedDistanceValue(key as DistanceUnit)}
                            disabled
                            readOnly
                            endAdornment={
                              <InputAdornment position="end">
                                {getDistanceAdornment(key as DistanceUnit)}
                              </InputAdornment>
                            }
                            onChange={(e) => setValue(Number(e.target.value))}
                          />
                        </FormControl>
                      </div>
                    </TableCell>
                  </div>
                ))}
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} md={12} lg={3}></Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DistanceConverter;
