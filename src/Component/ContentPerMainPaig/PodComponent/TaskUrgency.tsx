import { observer } from 'mobx-react-lite'
import React, { FC } from 'react'
import { Form } from 'react-bootstrap'

import '../PodComponent/style.css'
import { TaskInterface } from '../Interface/TaskInterface'

const TaskUrgency:FC<TaskInterface> = ({InterfaceObj}) => {
  return (
    <>
        <Form.Group className="mb-3" controlId="ControlSelect3">
            <Form.Label>Срочность вашей задачи:</Form.Label>
            <Form.Select 
                className='VR_TaskName' 
                aria-label="Срочность вашей задачи:"
                value={InterfaceObj.taskUrgency}
                onChange={(e) => InterfaceObj.changeTaskUrgency?.(e.target.value)}>
                
                <option></option>
                <option value='Низкая'>Низкая</option>
                <option value='Средняя'>Средняя</option>
                <option value='Высокая'>Высокая</option>
                <option value='Критическая'>Критическая</option>
            </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="ControlTextarea2">
            <Form.Label>Опишите срочность вашей задачи:</Form.Label>
            <Form.Control 
                className='VR_TaskName' 
                as="textarea" 
                rows={3} 
                value={InterfaceObj.taskUrgencyDescr}
                onChange={(e) => InterfaceObj.changeTaskUrgencyDescr?.(e.target.value)}/>
        </Form.Group>
    </>
  )
}

export default observer(TaskUrgency)