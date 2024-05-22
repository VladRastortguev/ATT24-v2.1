import { observer } from 'mobx-react-lite'
import React, { FC } from 'react'

import '../RightContent/RightContent.css'

const RightContent:FC = () => {
  return (
    <>
        <div className='VR_NowTask'>
            <div className='VR_NowTask_All'>

            </div> 
            <div className='VR_NowTask_Not_Urgency'>

            </div>
            <div className='VR_NowTask_Urgency'>

            </div>
        </div>
    </>
  )
}

export default observer(RightContent)