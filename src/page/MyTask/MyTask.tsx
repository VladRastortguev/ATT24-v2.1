import { observer } from 'mobx-react-lite';
import React, { FC, useContext, useEffect } from 'react';
import { Context } from '../..';
import { useNavigate } from 'react-router-dom';
import Loginpage from '../Loginpage/Loginpage';
import Header from '../../Component/Header/Header';
import MyTaskContent from '../../Component/MyTaskContent/MyTaskContent';

const MyTask:FC = () => {
    const { store } = useContext(Context)
    const navigate = useNavigate()
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                await store.checkAuth()
            } catch(e) {
                console.log(e);                
            }
        }

        fetchData()
    }, [])

    const InterfaceObj = {
        pageName: 'MyTask'
    }

    if (!store.isAuth) {
        return (
            <Loginpage />
        )
    }

    return (
        <>
            <Header InterfaceObj={InterfaceObj} />
            <MyTaskContent />
        </>
    );
};

export default observer(MyTask);