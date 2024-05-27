import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const SoglPageNotOk:FC = () => {
    const location = useLocation()
    const body = document.body;

    const navigate = useNavigate()

    if (String(location.pathname) == "/sogl/2") {
        body.style.overflow = 'hidden'
    }
    
    return (
        <div className='VR_All_Header_Sogl'>
            <Container className='VR_Header_Container_BT_sogl'>
                <div className='VR_Header_Container_sogl'>
                    <div className='VR_Modal_Container_sogl_none'>
                        
                        <div className='VR_Modal_Main_sogl_none'>
                            <h3>Добрый день!</h3>
                            <p>К сожалению, Вы отклонили заявку!</p>

                            <div className='VR_Modal_Main_Btn_Block_sogl'>
                                <Button variant='outline-danger' className='ps-5 pe-5 ms-2' onClick={() => {
                                    navigate('/')
                                }}>Закрыть</Button>
                            </div>
                        </div>
                    </div>
                </div>            
            </Container>
        </div>
    );
};

export default observer(SoglPageNotOk);