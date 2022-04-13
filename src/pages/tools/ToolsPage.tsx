import React, { FunctionComponent } from "react";
import { PageContainer } from "../../components/page";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { Box, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import DiamondIcon from "@mui/icons-material/Diamond";

type ToolsPageProps = {};

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

const ToolsPage: FunctionComponent<ToolsPageProps> = ({}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <PageContainer>
      <Box>
        <Tabs
          value={value}
          sx={{width:'100%'}}
          onChange={handleChange}
          aria-label="icon label tabs example"
        >
          <Tab icon={<CurrencyExchangeIcon />} label="Converter" />
          <Tab icon={<FavoriteIcon />} label="FAVORITES" />
          <Tab icon={<PersonPinIcon />} label="NEARBY" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <div style={{ display: "flex", alignItems: "center" }}>
            Platinum <DiamondIcon sx={{ color: "#C0C0C0" }} />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            GOLD <CircleIcon sx={{ color: "#ffb01c" }} />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            Electrum <CircleIcon sx={{ color: "#4682B4" }} />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            Silver <CircleIcon sx={{ color: "#C0C0C0" }} />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            Copper <CircleIcon sx={{ color: "#b87333" }} />
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          FAVORITE
        </TabPanel>
        <TabPanel value={value} index={2}>
          NEARBY
        </TabPanel>
      </Box>
    </PageContainer>
  );
};

export default ToolsPage;
