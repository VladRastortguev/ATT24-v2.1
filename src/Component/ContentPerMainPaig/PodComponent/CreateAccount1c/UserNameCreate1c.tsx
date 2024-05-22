import { observer } from 'mobx-react-lite'
import React, { FC } from 'react'
import { Form } from 'react-bootstrap'
import { CreaetAccount1cInterface } from '../../Interface/CreateAccount1cInterface'

const UserNameCreate1c:FC<CreaetAccount1cInterface> = ({ InterfaceObj }) => {
  return (
    <>
        <Form.Group className="mb-3" controlId="ControlTextarea1">
            <Form.Label>ФИО сотрудника которому необходима учетная запись:</Form.Label>
            <Form.Control 
                className='VR_TaskName' 
                type='text'
                placeholder='Имя сотрудника...'                
                value={InterfaceObj.userName}
                onChange={(e) => InterfaceObj.changeUserNameCreate1c?.(e.target.value)}/>
        </Form.Group>
    </>
  )
}

export default observer(UserNameCreate1c)