import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import SoglPageOk from '../../Component/ContentPerSoglPage/SoglPageOk';
import SoglPageNotOk from '../../Component/ContentPerSoglPage/SoglPageNotOk';

const SoglPage:FC = () => {
    const { ok } = useParams()
    
    return (
        <>

            {String(ok) == "1" ? (
                <SoglPageOk />
            ) : (
                <SoglPageNotOk />
            ) }

        </>
    );
};

export default observer(SoglPage);