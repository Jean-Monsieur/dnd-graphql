import CurrencyConverter from "./currency-converter/CurrencyConverter";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import React, { FunctionComponent } from "react";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { Box, Typography } from "@mui/material";
import { PageContainer } from "../../components/page";
import DistanceConverter from "./distance-converter/DistanceConverter";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import BalanceIcon from "@mui/icons-material/Balance";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const ToolsPage: FunctionComponent = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <PageContainer>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="icon label tabs example"
        >
          <Tab icon={<CurrencyExchangeIcon />} label="Currency Converter" />
          <Tab icon={<SquareFootIcon />} label="Distance Converter" />
          <Tab icon={<BalanceIcon />} label="Weight Converter" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <CurrencyConverter />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <DistanceConverter />
        </TabPanel>
        <TabPanel value={value} index={2}>
          En construction
        </TabPanel>
      </Box>
    </PageContainer>
  );
};

export default ToolsPage;
