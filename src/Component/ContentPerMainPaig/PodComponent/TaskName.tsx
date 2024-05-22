import { observer } from 'mobx-react-lite'
import React, { FC } from 'react'
import { Form } from 'react-bootstrap'

import '../PodComponent/style.css'
import { TaskInterface } from '../Interface/TaskInterface'

const TaskName:FC<TaskInterface> = ( {InterfaceObj} ) => {
  return (
    <>
        <Form.Group className="mb-3" controlId="ControlInput1">
            <Form.Label>Наименование заявки:</Form.Label>
            <Form.Control 
              className='VR_TaskName' 
              type="text" 
              placeholder="Наименование..." 
              value={InterfaceObj.taskName}
              onChange={(e) => InterfaceObj.changeTaskName?.(e.target.value)} />
        
        </Form.Group>
    </>
  )
}

export default observer(TaskName)