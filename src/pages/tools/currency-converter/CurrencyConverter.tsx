import { CurrencyIcon } from "../../../components/currency-icon";
import React, { FunctionComponent, useMemo, useState } from "react";
import { Currency } from "../../../types";
import { useDeviceSelectors } from "react-device-detect";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { getConvertedCurrencyValue } from "../../../utils";

const CurrencyConverter: FunctionComponent = () => {
  const [{ isMobile }] = useDeviceSelectors(window.navigator.userAgent);

  const [initialCurrency, setInitialCurrency] = useState<Currency>(
    Currency.GOLD
  );
  const [value, setValue] = useState(0);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: Currency
  ) => {
    setInitialCurrency(newAlignment);
  };

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
                onChange={(e) => setValue(Number(e.target.value))}
              />
            </FormControl>

            {isMobile ? (
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Initial Currency
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Initial Currency"
                  value={initialCurrency}
                  onChange={handleChange2}
                >
                  {Object.keys(Currency).map((key) => (
                    <MenuItem value={key as Currency}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        {key} <CurrencyIcon currency={key as Currency} />{" "}
                      </div>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : (
              <FormControl fullWidth>
                <ToggleButtonGroup
                  size="small"
                  color="primary"
                  value={initialCurrency}
                  exclusive
                  onChange={handleChange}
                >
                  {Object.keys(Currency).map((key) => (
                    <ToggleButton value={key as Currency}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        {key} <CurrencyIcon currency={key as Currency} />{" "}
                      </div>
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
              </FormControl>
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={3}>
          <Paper elevation={3}>
            <TableContainer>
              <Table size="small" aria-label="a dense table">
                <TableBody>
                  {Object.keys(Currency).map((key) => (
                    <TableRow>
                      <TableCell>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <span
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginRight: ".5rem",
                            }}
                          >
                            {convertedValue(key as Currency)}{" "}
                          </span>
                          <span
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginRight: ".5rem",
                            }}
                          >
                            <CurrencyIcon currency={key as Currency} />
                          </span>
                          <Typography
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              fontStyle: "italic",
                              fontSize: "xx-small",
                              fontWeight: 100,
                            }}
                          >
                            ({key})
                          </Typography>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CurrencyConverter;
