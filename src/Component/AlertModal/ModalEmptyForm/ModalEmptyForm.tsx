import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { ModalInterface } from '../ModalInterface';

import '../ModalEmptyForm/ModalEmptyForm.css'
import { Button } from 'react-bootstrap';

const ModalEmptyForm:FC<ModalInterface> = ( {InterfaceObj} ) => {
    return (
        <>
            <div className='VR_ModalEmpty_All_HeaderBlock'>
                <div className='VR_ModalEmpty_Title_Block'>
                    <h3>Заполните все поля!</h3>
                </div>

                <div className='VR_ModalEmpty_Btn_Block'>
                    <Button variant='outline-danger' className='ps-5 pe-5 ms-2' onClick={() => {
                        InterfaceObj.changeButtonEmpty?.(false)
                    }}>Закрыть</Button>
                </div>
            </div> 
        </>
    );
};

export default observer(ModalEmptyForm);