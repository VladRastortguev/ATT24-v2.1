import { observer } from 'mobx-react-lite'
import React, { FC, useContext } from 'react'
import { Container } from 'react-bootstrap'
import Header from '../../Component/Header/Header'
import LoginContent from '../../Component/LoginContent/LoginContent'
import { useNavigate } from 'react-router-dom'
import { Context } from '../..'

const Loginpage:FC = () => {

    const InterfaceObj = {
        pageName: 'Loginpage'
    }

    return (
        <>
            <Header InterfaceObj={InterfaceObj}/>
            <LoginContent />
        </>
  )
}

export default observer(Loginpage)