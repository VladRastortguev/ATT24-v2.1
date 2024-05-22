import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { Form } from 'react-bootstrap';
import { CreaetAccount1cInterface } from '../../Interface/CreateAccount1cInterface';

const UserArrowJod:FC<CreaetAccount1cInterface> = ( { InterfaceObj } ) => {
    return (
        <>
            <Form.Group className="mb-3" controlId="ControlSelect3">
                <Form.Label>Должность сотрудника которому необходима учетная запись:</Form.Label>
                <Form.Select 
                    className='VR_JobArrow' 
                    aria-label="Направление сотрудника который нуждается в учетке:"
                    value={InterfaceObj.userJobArrow}
                    onChange={(e) => InterfaceObj.changeUserJobArrow?.(e.target.value)}>
                
                    <option></option>
                    <option value='CR'>CR</option>
                    <option value='HR'>HR</option>                
                    <option value='Контакт центр'>Контакт центр</option>
                    <option value='КСО'>КСО</option>
                    <option value='ППО'>ППО</option>
                    <option value='Продажи'>Продажи</option>
                    <option value='Финансовый департамент'>Финансовый департамент</option>
                </Form.Select>
            </Form.Group>
        </>
    );
};

export default observer(UserArrowJod);