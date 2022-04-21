import { CurrencyIcon } from "../../../components/currency-icon";
import { FunctionComponent, useMemo, useState } from "react";
import { Currency } from "../../../types";
import {
  Box,
  Card,
  CardContent,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { getConvertedCurrencyValue } from "../../../utils";
import OutlinedInput from "@mui/material/OutlinedInput";

const CurrencyConverter: FunctionComponent = () => {
  const [initialCurrency, setInitialCurrency] = useState<Currency>(
    Currency.GOLD
  );
  const [value, setValue] = useState(0);

  const handleChange2 = (event: SelectChangeEvent) => {
    setInitialCurrency(event.target.value as Currency);
  };

  const convertedValue = useMemo(
    () => (currency: Currency) =>
      getConvertedCurrencyValue(value, initialCurrency, currency),

    [initialCurrency, value]
  );

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        mb: "2rem",
      }}
    >
      <Grid>
        <Paper
          variant="outlined"
          sx={{ width: "100%", padding: 2, mb: "1rem" }}
        >
          <Typography variant="h6" gutterBottom component="div">
            Value to Convert
          </Typography>
          <FormControl fullWidth sx={{ mb: "1rem" }}>
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Select
                      size="small"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={initialCurrency}
                      onChange={handleChange2}
                    >
                      {Object.keys(Currency).map((key) => (
                        <MenuItem value={key as Currency}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <CurrencyIcon currency={key as Currency} />{" "}
                            <span style={{ marginLeft: ".5rem" }}>{key}</span>
                          </div>
                        </MenuItem>
                      ))}
                    </Select>
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <Paper elevation={3}>
            <Card>
              <CardContent>
                <Typography variant="h5" color="text.secondary" gutterBottom>
                  Converted Values
                </Typography>
                <Typography>
                  <div>
                    {Object.keys(Currency).map((key) => (
                      <div
                        key={key}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <FormControl fullWidth sx={{ mb: "1rem" }}>
                          <InputLabel htmlFor={`outlined-converted-${key}`}>
                            {key}
                          </InputLabel>
                          <OutlinedInput
                            id={`outlined-converted-${key}`}
                            label={key}
                            type="number"
                            value={convertedValue(key as Currency)}
                            disabled
                            readOnly
                            endAdornment={
                              <InputAdornment position="end">
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <CurrencyIcon currency={key as Currency} />{" "}
                                  <span style={{ marginLeft: ".5rem" }}>
                                    {key}
                                  </span>
                                </div>{" "}
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
      </Grid>
    </Box>
  );
};

export default CurrencyConverter;
