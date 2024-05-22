import { observer } from 'mobx-react-lite'
import React, { FC, useContext, useEffect } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../image/logo ATT gold 64.png'
import Header from '../../Component/Header/Header';
import MainContent from '../../Component/MainContent/MainContent';
import { Context } from '../..';
import { useNavigate } from 'react-router-dom';
import Loginpage from '../Loginpage/Loginpage';



const Homepage:FC = () => {
    const { store } = useContext(Context)
    const navigate = useNavigate()
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                await store.checkAuth()
            } catch (e) {
                alert(e)
            }
        }

        fetchData()
    }, [])
    
    const InterfaceObj = {
        pageName: 'Homepage'
    }

    if (!store.isAuth) {
        return(
            <Loginpage />
        )
    } 

    return (
        <>
            <Header InterfaceObj={InterfaceObj} />
            <MainContent />            
        </>
    )
}

export default observer(Homepage)
