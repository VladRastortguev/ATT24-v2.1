import { observer } from 'mobx-react-lite'
import React, { FC, useContext, useState } from 'react'

import TaskName from '../PodComponent/TaskName'
import TaskComment from '../PodComponent/TaskComment'

import '../CreateAnonym/CreateAnonym.css'
import { Button, Container, Form } from 'react-bootstrap'
import { Context } from '../../..'
import AuthService from '../../../services/AuthService'

const CreateAnonym:FC = () => {
    const [taskName, setTaskName] = useState('')
    const [taskComment, setTaskComment] = useState('')

    const { store } = useContext(Context)

    const handleSetTaskName = (newState: string) => {
        setTaskName(newState)
    }

    const handleSetTaskComment = (newState: string) => {
        setTaskComment(newState)
    }


    const InterfaceObj = {
        changeTaskName: handleSetTaskName,
        changeUserName: null,
        changeUserEmail: null,
        changeTaskOrganization: null,
        changeTaskInfluence: null,
        changeTaskInfluenceDescr: null,
        changeTaskUrgency: null,
        changeTaskUrgencyDescr: null,
        changeTaskComment: handleSetTaskComment,
        taskName: taskName,
        userName: "",
        userEmail: "",
        taskOrganization: "",
        taskInfluence: "",
        taskInfluenceDescr: "",
        taskUrgency: "",
        taskUrgencyDescr: "",
        taskComment: taskComment
    }

    async function setNewTask() {
        if (
            !taskName.trim()           ||
            !taskComment.trim()
        ) {
            alert('Заполните все поля!')
            return
        }
    
        let taskObj = [
            {
                ТипЗадачи             : "Анонимное письмо",
                Наименование          : taskName,
                Описание              : taskComment
            }
        ]
    
        store.setLoading(true)
    
        try {
            const res = AuthService.setNewTask(taskObj, 'Аноним')
    
            console.log(res);
        } catch (e) {
            console.log(e);
        } finally {
            store.setLoading(false)
        }
        
        setTaskName("")
        setTaskComment("")

        handleSetTaskName("")
        handleSetTaskComment("")
    
        alert("Задача создана!")
    }

    if (store.isLoading) {
        return (
            <Container>
                ...Загрузка
            </Container>
        )
    }

    return (
        <>
            <Container className='VR_Container_Header'>
                <Container className='VR_Container_Title'>
                    <h1>Анонимное письмо</h1>
                </Container>

                <Form>
                    <TaskName InterfaceObj={InterfaceObj}/>
                    <TaskComment InterfaceObj={InterfaceObj}/>

                    <Button onClick={() => {
                        setNewTask()                
                    }} className='mb-5 mt-3 ps-5 pe-5' variant="outline-dark">Создать</Button>      
                </Form>
            </Container>
        </>
    )
}

export default observer(CreateAnonym)