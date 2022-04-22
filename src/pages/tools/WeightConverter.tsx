import convertWeightUnit from '../../utils/convertWeightUnit';
import getWeightAdornment from '../../utils/getWeightAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import React, { FunctionComponent, useMemo, useState } from 'react';
import { convertDistanceUnits, getDistanceAdornment } from '../../utils';
import { Currency, DistanceUnit, WeightUnit } from '../../types';
import {
  Box,
  Card,
  CardContent,
  FormControl,
  InputAdornment,
  Paper,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
type WeightConverterProps = {};
const WeightConverter: FunctionComponent<WeightConverterProps> = ({}) => {
  const [value, setValue] = useState(0);

  const [initialUnit, setInitialUnit] = useState<WeightUnit>(WeightUnit.LBS);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newValue: WeightUnit
  ) => {
    setInitialUnit(newValue);
  };

  const convertedValue = useMemo(
    () => (unit: WeightUnit) => convertWeightUnit(value, initialUnit, unit),
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
        <Paper variant="outlined" sx={{ padding: 2 }}>
          <Typography variant="h6" gutterBottom component="div">
            Value to Convert
          </Typography>
          <FormControl sx={{ mr: "1rem" }}>
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              value={value}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {getWeightAdornment(initialUnit)}
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
              {Object.keys(WeightUnit).map((key) => (
                <ToggleButton value={key as WeightUnit}>{key}</ToggleButton>
              ))}
            </ToggleButtonGroup>
          </FormControl>
          <Paper sx={{ mt: "1rem" }} elevation={3}>
            <Card>
              <CardContent>
                <Typography variant="h5" color="text.secondary" gutterBottom>
                  Converted Values
                </Typography>
                <Typography>
                  <div>
                    {Object.keys(WeightUnit).map((key) => (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <FormControl fullWidth sx={{ mb: "1rem" }}>
                          <InputLabel htmlFor={`outlined-converted-${key}`}>
                            {key}
                          </InputLabel>
                          <OutlinedInput
                            id={`outlined-converted-${key}`}
                            label={key}
                            type="number"
                            value={convertedValue(key as WeightUnit)}
                            disabled
                            readOnly
                            endAdornment={
                              <InputAdornment position="end">
                                {getWeightAdornment(key as WeightUnit)}
                              </InputAdornment>
                            }
                            onChange={(e) => setValue(Number(e.target.value))}
                          />
                        </FormControl>
                      </div>
                    ))}
                  </div>
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Paper>
      </Box>
    </>
  );
};

export default WeightConverter;
