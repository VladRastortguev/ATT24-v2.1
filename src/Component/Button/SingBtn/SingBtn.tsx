import { observer } from 'mobx-react-lite'
import React, { FC } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SingBtn:FC = () => {
    const navigate = useNavigate()

    return (
        <Button onClick={() => navigate('/login')} variant="outline-light" className='px-5'>Вход</Button>
    )
}

export default observer(SingBtn)