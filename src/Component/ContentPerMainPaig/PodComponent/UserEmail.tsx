import { observer } from 'mobx-react-lite'
import React, { FC } from 'react'
import { Form } from 'react-bootstrap'
import { TaskInterface } from '../Interface/TaskInterface'

const UserEmail:FC<TaskInterface> = ({InterfaceObj}) => {
  return (
    <>
        <Form.Group className="mb-3" controlId="ControlInput3">
            <Form.Label>Ваша почта:</Form.Label>
            <Form.Control 
              className='VR_TaskName' 
              type="Email" 
              placeholder="Ваша почта..."
              value={InterfaceObj.userEmail} 
              onChange={(e) => InterfaceObj.changeUserEmail?.(e.target.value)}/>
        </Form.Group>
    </>
  )
}

export default observer(UserEmail)