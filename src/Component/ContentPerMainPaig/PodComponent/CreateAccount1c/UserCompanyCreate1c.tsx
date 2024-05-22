import { observer } from 'mobx-react-lite'
import React, { FC } from 'react'
import { Form } from 'react-bootstrap'
import { CreaetAccount1cInterface } from '../../Interface/CreateAccount1cInterface'

const UserCompanyCreate1c:FC<CreaetAccount1cInterface> = ({ InterfaceObj }) => {
  return (
    <>
        <Form.Group className="mb-3" controlId="ControlTextarea1">
            <Form.Label>Подразделение сотрудника которому необходима учетная запись:</Form.Label>
            <Form.Control 
                className='VR_TaskName' 
                type='text'
                placeholder='Подразделение сотрудника...'                
                value={InterfaceObj.userCompany}
                onChange={(e) => InterfaceObj.changeUserCompanyCreate1c?.(e.target.value)}/>
        </Form.Group>
    </>
  )
}

export default observer(UserCompanyCreate1c)