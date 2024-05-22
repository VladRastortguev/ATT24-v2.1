import { observer } from 'mobx-react-lite'
import React, { FC } from 'react'
import { Form } from 'react-bootstrap'

import '../PodComponent/style.css'
import { TaskInterface } from '../Interface/TaskInterface'

const TaskOrganization:FC<TaskInterface> = ({InterfaceObj}) => {
  return (
    <>
        <Form.Group className="mb-3" controlId="ControlSelect1">
            <Form.Label>Ваша Организация:</Form.Label>                
            <Form.Select 
              className='VR_TaskName' 
              aria-label="Ваша организация:"
              value={InterfaceObj.taskOrganization}
              onChange={(e) => InterfaceObj.changeTaskOrganization?.(e.target.value)}>
            
                <option></option>
                <option value="Алтын Тулпар">Алтын Тулпар</option>
                <option value="Джи Моторс">Джи Моторс</option>
                <option value="ДТ Техник">ДТ Техник</option>
                <option value="БАКР">БАКР</option>
                <option value="Киа Моторс">Киа Моторс</option>
                <option value="ПрофПерспектива">ПрофПерспектива</option>
                <option value="Тойота Центр">Тойота Центр</option>
                <option value="Форвард Трейд">Форвард Трейд</option>
                <option value="Эстокада ">Эстокада</option>
            </Form.Select>
        </Form.Group>
    </>
  )
}

export default observer(TaskOrganization)