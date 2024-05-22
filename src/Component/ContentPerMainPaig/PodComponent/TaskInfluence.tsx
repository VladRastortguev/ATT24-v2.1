import { observer } from 'mobx-react-lite'
import React, { FC } from 'react'
import { Form } from 'react-bootstrap'

import '../PodComponent/style.css'
import { TaskInterface } from '../Interface/TaskInterface'

const TaskInfluence:FC<TaskInterface> = ({InterfaceObj}) => {
  return (
    <>
        <Form.Group className="mb-3" controlId="ControlSelect2">
            <Form.Label>Влияние вашей задачи:</Form.Label>                
            <Form.Select
                className='VR_TaskName' 
                aria-label="Влияние вашей задачи:"
                value={InterfaceObj.taskInfluence}
                onChange={(e) => InterfaceObj.changeTaskInfluence?.(e.target.value)}>
            
                <option></option>
                <option value='Низкое'>Низкое</option>
                <option value='Среднее'>Среднее</option>
                <option value='Высокое'>Высокое</option>
                <option value='Критическое'>Критическое</option>
            </Form.Select>            
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="ControlTextarea1">
            <Form.Label>Опишите влияние вашей задачи:</Form.Label>
            <Form.Control 
                className='VR_TaskName' 
                as="textarea" 
                rows={3}
                value={InterfaceObj.taskInfluenceDescr} 
                onChange={(e) => InterfaceObj.changeTaskInfluenceDescr?.(e.target.value)}/>
        </Form.Group>
    </>
  )
}

export default observer(TaskInfluence)