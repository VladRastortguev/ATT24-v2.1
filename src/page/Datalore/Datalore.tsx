import { observer } from 'mobx-react-lite'
import React, { FC, useContext, useEffect } from 'react'
import { Context } from '../..'
import Loginpage from '../Loginpage/Loginpage'
import { Container } from 'react-bootstrap'
import Header from '../../Component/Header/Header'
import DataloreContent from '../../Component/DataloreContent/DataloreContent'

const Datalore:FC = () => {
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

    const InterfaceObj = {
        pageName: 'Datalore'
    }

    if (!store.isAuth) {
        return(
            <Loginpage />
        )
    }

    return (
        <>
            <Header InterfaceObj={InterfaceObj} />
            <DataloreContent />                
        </>
    )
}

export default observer(Datalore)