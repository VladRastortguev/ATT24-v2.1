import { observer } from 'mobx-react-lite'
import React, { FC } from 'react'
import { Form } from 'react-bootstrap'
import { TaskInterface } from '../Interface/TaskInterface'

const UserName:FC<TaskInterface> = ({InterfaceObj}) => {
  return (
    <>
        <Form.Group className="mb-3" controlId="ControlInput2">
            <Form.Label>Ваше имя:</Form.Label>
            <Form.Control 
              className='VR_TaskName' 
              type="text" 
              placeholder="Ваше имя..." 
              value={InterfaceObj.userName}
              onChange={(e) => InterfaceObj.changeUserName?.(e.target.value)}/>
        </Form.Group>
    </>
  )
}

export default observer(UserName)