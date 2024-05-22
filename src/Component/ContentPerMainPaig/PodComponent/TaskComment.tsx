import { observer } from 'mobx-react-lite'
import React, { FC } from 'react'
import { Form } from 'react-bootstrap'
import { TaskInterface } from '../Interface/TaskInterface'

const TaskComment:FC<TaskInterface> = ({InterfaceObj}) => {
  return (
    <>
        <Form.Group className="mb-3" controlId="ControlTextarea1">
            <Form.Label>Комментарий:</Form.Label>
            <Form.Control 
                className='VR_TaskName' 
                as="textarea" 
                rows={4}
                value={InterfaceObj.taskComment}
                onChange={(e) => InterfaceObj.changeTaskComment?.(e.target.value)}/>
        </Form.Group>
    </>
  )
}

export default observer(TaskComment)