import { observer } from 'mobx-react-lite'
import React, { FC } from 'react'
import { Form } from 'react-bootstrap'
import { CreaetAccount1cInterface } from '../../Interface/CreateAccount1cInterface'

const UserJobtitelCreate1c:FC<CreaetAccount1cInterface> = ({ InterfaceObj }) => {
  return (
    <>
        <Form.Group className="mb-3" controlId="ControlSelect3">
            <Form.Label>Должность сотрудника которому необходима учетная запись:</Form.Label>
            <Form.Select 
                className='VR_TaskName' 
                aria-label="Срочность вашей задачи:"
                value={InterfaceObj.userJobtitel}
                onChange={(e) => InterfaceObj.changeUserJobtitelCreate1c?.(e.target.value)}>
                
                {InterfaceObj.resetJobTitel ? InterfaceObj.userJobArrow : ''}
            </Form.Select>
        </Form.Group>
    </>
  )
}

export default observer(UserJobtitelCreate1c)