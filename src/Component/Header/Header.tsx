import { observer } from 'mobx-react-lite'
import React, { FC, useContext, useEffect } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../image/logo ATT gold 64.png'
import SingBtn from '../Button/SingBtn/SingBtn';
import { HeaderInterface } from './HeaderInterface';
import BackBtn from '../Button/BackBtn/BackBtn';
import { useNavigate } from 'react-router-dom';
import { Context } from '../..';
import LogoutBtn from '../Button/LogoutBtn/LogoutBtn';
// import { Switch } from '@mui/material';

const Header:FC<HeaderInterface> = ({InterfaceObj}) => {
    const navigate = useNavigate()

    const { store } = useContext(Context)

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

    function returnHeaderBtn(pageName:string) {
        switch (pageName) {
            case 'Homepage':                
                return (    
                    store.isAuth ? (<LogoutBtn />) : (<SingBtn />)                            
                )
            case 'Loginpage':
                return (
                    // <BackBtn />
                    null
                )
            case 'Datalore':
                return (
                    <BackBtn />
                )
        }
    }

    function returnLinkList(pageName:string) {
        switch (pageName) {
            case 'Homepage':
                return (
                    <>
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => navigate('/datalore')}>База знаний</Nav.Link>
                            {/* <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing"></Nav.Link> */}
                        </Nav>
                    </>
                )
            case 'Loginpage':
                return (
                    <>
                        <Nav className="me-auto">
                            {/* <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link> */}
                        </Nav>
                    </>
                )
        }
    }

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand onClick={() => navigate('/')}><a><img src={logo} width='50px' className='me-3' /></a></Navbar.Brand>
                    {returnLinkList(InterfaceObj.pageName)}

                    {returnHeaderBtn(InterfaceObj.pageName)}
                </Container>
            </Navbar>
        </>
    )
}

export default observer(Header)

// export default observer()