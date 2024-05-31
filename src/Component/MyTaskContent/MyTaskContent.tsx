import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';

import '../MyTaskContent/MyTaskContent.css'

const MyTaskContent:FC = () => {
    return (
        <div className='VR_MyTaskHeaderDiv'>
            <h1>Добрый день! <br /> К сожалению данный блок, <br /> сейчас находиться в разработке.</h1> 
        </div>
    );
};

export default observer(MyTaskContent);