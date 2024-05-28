import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';

import '../ModalSuccess/ModalSuccess.css'

import { ModalInterface } from '../ModalInterface';
import { Button } from 'react-bootstrap';

const ModalSucces:FC<ModalInterface> = ({InterfaceObj}) => {
    return (
        <>
            <div className='VR_ModalEmpty_All_HeaderBlock'>
                <div className='VR_ModalEmpty_Title_Block'>
                    <h3>Задача успешно создана!</h3>
                </div>

                <div className='VR_ModalEmpty_Btn_Block'>
                    <Button variant='outline-success' className='ps-5 pe-5 ms-2' onClick={() => {
                        InterfaceObj.changeButtonSuccess?.(false)
                    }}>Закрыть</Button>
                </div>
            </div> 
        </>
    );
};

export default observer(ModalSucces);