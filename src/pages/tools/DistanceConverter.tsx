import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import React, { useMemo, useState } from 'react';
import { convertDistanceUnits, getDistanceAdornment } from '../../utils';
import { Currency, DistanceUnit } from '../../types';
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
        <Paper sx={{ mt: "1rem" }} elevation={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" color="text.secondary" gutterBottom>
                Converted Values
              </Typography>
              <Typography>
                <div>
                  {Object.keys(DistanceUnit).map((key) => (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <FormControl fullWidth sx={{ mb: "1rem" }}>
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
                  ))}
                </div>
              </Typography>
            </CardContent>
          </Card>
        </Paper>
      </Paper>
    </Box>
  );
};

export default DistanceConverter;
