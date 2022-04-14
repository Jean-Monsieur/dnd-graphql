import CurrencyConverter from './currency-converter/CurrencyConverter';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import React, { FunctionComponent } from 'react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { Box, Typography } from '@mui/material';
import { PageContainer } from '../../components/page';

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
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="icon label tabs example"
        >
          <Tab icon={<CurrencyExchangeIcon />} label="Converter" />
          <Tab icon={<FavoriteIcon />} label="FAVORITES" />
          <Tab icon={<PersonPinIcon />} label="NEARBY" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <CurrencyConverter />
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
