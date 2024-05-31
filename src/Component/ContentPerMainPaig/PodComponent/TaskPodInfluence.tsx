import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { Form } from 'react-bootstrap';
import { TaskInterface } from '../Interface/TaskInterface';

const TaskPodInfluence:FC<TaskInterface> = ({InterfaceObj}) => {
    return (
        <>
            <Form.Group className="mb-3" controlId="ControlSelect3">
                <Form.Label>Пояснение приоритета:</Form.Label>
                <Form.Select 
                    className='VR_TaskName' 
                    aria-label="Пояснение приоритета:"
                    value={InterfaceObj.taskPodInfluence}
                    onChange={(e) => InterfaceObj.changeTaskPodInfluence?.(e.target.value)}>
                
                    <option></option>
                    <option value="Полная потеря функциональности продукта">Полная потеря функциональности продукта</option>
                    <option value="Проблема затрагивает большое количество пользователей">Проблема затрагивает большое количество пользователей</option>
                    <option value="Проблема не влияет на работу большого количества пользователей">Проблема не влияет на работу большого количества пользователей</option>
                    <option value="Значительное снижение функциональности">Значительное снижение функциональности</option>
                    <option value="Проблема затрагивает ограниченное количество пользователей">Проблема затрагивает ограниченное количество пользователей</option>
                    <option value="Частичное снижение функциональности">Частичное снижение функциональности</option>
                    <option value="Проблема имеет временное решение">Проблема имеет временное решение</option>
                    <option value="Проблема не имеет временного решения">Проблема не имеет временного решения</option>
                    <option value="Незначительные проблемы">Незначительные проблемы</option>
                    <option value="Нет непосредственной угрозы функциональности">Нет непосредственной угрозы функциональности</option>
                </Form.Select>
            </Form.Group>
        </>
    );
};

export default observer(TaskPodInfluence);