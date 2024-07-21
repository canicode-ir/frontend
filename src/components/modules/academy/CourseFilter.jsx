'use client';

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function ScrollableTabsButtonAuto({setIsAllCourses, setIsJuniorCourses, setIsMidLevelCourses, setIsSeniorCourses}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const showAllCourses = () => {
    setIsAllCourses(true);
    setIsJuniorCourses(false);
    setIsMidLevelCourses(false);
    setIsSeniorCourses(false);
  }

  const showJuniorCourses = () => {
    setIsJuniorCourses(true);
    setIsAllCourses(false);
    setIsMidLevelCourses(false);
    setIsSeniorCourses(false);
  }

  const showMidLevelCourses = () => {
    setIsMidLevelCourses(true);
    setIsJuniorCourses(false);
    setIsAllCourses(false);
    setIsSeniorCourses(false);
  }

  const showSeniorCourses = () => {
    setIsSeniorCourses(true);
    setIsJuniorCourses(false);
    setIsAllCourses(false);
    setIsMidLevelCourses(false);
  }

  const tabs = [
    {id: 'allCourses', label: 'همه دوره ها', handler: showAllCourses},
    {id: 'juniorCourses', label: 'دوره ها مقدماتی', handler: showJuniorCourses},
    {id: 'midLevelCourses', label: 'دوره ها میدلول', handler: showMidLevelCourses},
    {id: 'seniorCourses', label: 'دوره ها متخصص فرانت', handler: showSeniorCourses},
  ]


  return (
    <Box sx={{ display: 'flex', width: '100%', m: '30px auto 0', alignItems: 'center', p: '0 24px'}}>
      <Tabs
        sx={{display: 'flex', flexDirection: 'row-reverse', width: 'fit-content', justifyContent: 'center',
        bgcolor:'#f9fafb', m: '0 auto', borderRadius: '8px' }}
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={true}
        allowScrollButtonsMobile
        aria-label="scrollable auto tabs example"
        TabScrollButtonProps={{sx:{color: '#3730a3'}}}
      >
        {tabs.map(tab => 
          <Tab key={tab.id} label={tab.label} onClick={tab.handler} sx={{fontFamily: 'dana', 
          fontWeight: '110', color: '#a5b4fc', fontSize: '13px', p: 1, m: '0 0 0 10px', 
          borderRadius: '8px'}}/>)}
      </Tabs>
    </Box>
  );
}