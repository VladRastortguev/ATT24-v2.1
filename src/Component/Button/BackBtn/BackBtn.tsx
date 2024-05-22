import { observer } from 'mobx-react-lite'
import React, { FC } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const BackBtn:FC = () => {
    const navigate = useNavigate()

    return (
        <Button onClick={() => navigate('/')} variant="outline-light" className='px-5'>Назад</Button>
    )
}

export default observer(BackBtn)