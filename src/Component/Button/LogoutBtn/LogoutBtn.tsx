import { observer } from 'mobx-react-lite'
import React, { FC, useContext } from 'react'
import { Button } from 'react-bootstrap'
import { Context } from '../../..'

const LogoutBtn:FC = () => {
    
    const { store } = useContext(Context)

    async function logout() {
        await store.logout()
    }

    return (
        <>
            <Button onClick={() => logout()} variant="outline-danger" className='px-5'>Выход</Button>
        </>
    )
}

export default observer(LogoutBtn)