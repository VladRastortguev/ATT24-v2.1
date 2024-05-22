import { observer } from 'mobx-react-lite'
import React, { FC, useContext, useEffect } from 'react'

import { styled } from '@mui/system';
import { Tabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';

import Create1C from '../ContentPerMainPaig/Create1C/Create1C';
import CreateTex from '../ContentPerMainPaig/CreateTex/CreateTex';
import CreateAho from '../ContentPerMainPaig/CreateAho/CreateAho';
import CreateAnonym from '../ContentPerMainPaig/CreateAnonym/CreateAnonym';

import '../MainContent/MainContent.css'
import { useLocation } from 'react-router-dom';
import { Context } from '../..';
import UserService from '../../services/UserService';

const MainContent:FC = () => {
    const location = useLocation()
    const body = document.body

    const { store } = useContext(Context)

    if (String(location.pathname) != '/login') {
        body.style.overflow = 'scroll';
    }

    const blue = {
        50: '#F0F7FF',
        100: '#C2E0FF',
        200: '#80BFFF',
        300: '#66B2FF',
        // 400: '#3399FF',
        400: '#0b2140',
        // 500: '#007FFF',
        500: '#000',
        // 600: '#0072E5',
        600: '#fff',
        700: '#0059B2',
        800: '#004C99',
        900: '#003A75',
      };
  
      const Tab = styled(BaseTab)`
        font-family: 'IBM Plex Sans', sans-serif;
        color: white;
        cursor: pointer;
        font-size: 0.875rem;
        font-weight: bold;
        background-color: transparent;
        width: 100%;
        line-height: 1.5;
        padding: 8px 12px;
        margin: 6px;
        border: none;
        border-radius: 8px;
        display: flex;
        justify-content: center;
  
        &:hover {
            background-color: ${blue[400]};
        }
  
        &:focus {
            color: #fff;
            outline: 3px solid ${blue[200]};
        }
  
        &.${tabClasses.selected} {
            background-color: #212529;
            color: ${blue[600]};
        }
  
        &.${buttonClasses.disabled} {
            opacity: 0.5;
            cursor: not-allowed;
        }
      `;
  
      const TabPanel = styled(BaseTabPanel)`
          width: 100%;
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 0.875rem;
      `;
  
      const TabsList = styled(BaseTabsList)(
          ({ theme }) => `
          min-width: 400px;
          background-color: ${blue[500]};
          // border-radius: 12px;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          align-content: space-between;
          box-shadow: 0px 4px 6px ${
              theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.4)' : 'rgba(0,0,0, 0.2)'
          };
          `,
    );

    return (
        <>
            <Tabs defaultValue={1}>
              
                <TabsList>
                    <Tab value={1}>Задачи 1С</Tab>
                    <Tab value={2}>Задачи Тех.Поддержке</Tab>
                    <Tab value={3}>Задачи АХО</Tab>
                    <Tab value={4}>Анонимное письмо</Tab>
                </TabsList>
  
                <TabPanel value={1}>
                    <Create1C />
                </TabPanel>
                <TabPanel value={2}>
                    <CreateTex />
                </TabPanel>
                <TabPanel value={3}>
                    <CreateAho />
                </TabPanel>
                <TabPanel value={4}>
                    <CreateAnonym />
                </TabPanel>
            </Tabs>
        </>
    )
}

export default observer(MainContent)