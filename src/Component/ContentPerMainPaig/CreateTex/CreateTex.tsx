import { observer } from 'mobx-react-lite'
import React, { FC, useContext, useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import TaskName from '../PodComponent/TaskName'
import UserName from '../PodComponent/UserName'
import UserEmail from '../PodComponent/UserEmail'
import TaskOrganization from '../PodComponent/TaskOrganization'
import TaskInfluence from '../PodComponent/TaskInfluence'
import TaskUrgency from '../PodComponent/TaskUrgency'
import { Context } from '../../..'
import AuthService from '../../../services/AuthService'

import '../CreateTex/CreateTex.css'
import TaskComment from '../PodComponent/TaskComment'

const CreateTex:FC = () => {
    const [taskType, setTaskType] = useState('')

    const [taskService, setTaskService] = useState('')

    const [taskName, setTaskName] = useState('')
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [taskOrganization, setTaskOrganization] = useState('')
    const [taskInfluence, setTaskInfluence] = useState('')
    const [taskInfluenceDescr, setTaskInfluenceDescr] = useState('')
    const [taskUrgency, setTaskUrgency] = useState('')
    const [taskUrgencyDescr, setTaskUrgencyDescr] = useState('')
    const [taskComment, setTaskComment] = useState('')

    const { store } = useContext(Context)

    useEffect(() => {
        const fetchData = async () => {
            try {
                store.setLoading(true)
                await store.checkAuth()
            } catch (e) {
                alert(e)
            } finally {
                store.setLoading(false)
            }
        }

        fetchData()
    }, [])
  
    useEffect(() => {
        if (store.isAuth) {
            try {
                setUserName(String(localStorage.getItem('UserName')))
                setUserEmail(String(localStorage.getItem('userEmail')))
                setTaskOrganization(String(localStorage.getItem('company')))
            } catch (e) {
                alert(e)                
            }
        }
    }, [store.isAuth])
    
    const handleSetTaskName = (newState: string) => {
        setTaskName(newState)
    }

    const handleSetUserName = (newState: string) => {
        setUserName(newState)
    }

    const handleSetUserEmail = (newState: string) => {
        setUserEmail(newState)
    }

    const handleSetTaskOrganization = (newState: string) => {
        setTaskOrganization(newState)
    }

    const handleSetTaskInfluence = (newState: string) => {
        setTaskInfluence(newState)
    }

    const handleSetTaskInfluenceDescr = (newState: string) => {
        setTaskInfluenceDescr(newState)
    }

    const handleSetTaskUrgency = (newState: string) => {
        setTaskUrgency(newState)
    }

    const handleSetTaskUrgencyDescr = (newState: string) => {
        setTaskUrgencyDescr(newState)
    }

    const handleSetTaskComment = (newState: string) => {
        setTaskComment(newState)
    }

    const InterfaceObj = {
      changeTaskName: handleSetTaskName,
      changeUserName: handleSetUserName,
      changeUserEmail: handleSetUserEmail,
      changeTaskOrganization: handleSetTaskOrganization,
      changeTaskInfluence: handleSetTaskInfluence,
      changeTaskInfluenceDescr: handleSetTaskInfluenceDescr,
      changeTaskUrgency: handleSetTaskUrgency,
      changeTaskUrgencyDescr: handleSetTaskUrgencyDescr,
      changeTaskComment: handleSetTaskComment,
      taskName: taskName,
      userName: userName,
      userEmail: userEmail,
      taskOrganization: taskOrganization,
      taskInfluence: taskInfluence,
      taskInfluenceDescr: taskInfluenceDescr,
      taskUrgency: taskUrgency,
      taskUrgencyDescr: taskUrgencyDescr,
      taskComment: taskComment
  }

  async function setNewTask() {
    if (
        !taskService.trim()        ||
        !taskName.trim()           ||
        !userName.trim()           ||
        !userEmail.trim()          ||
        !taskOrganization.trim()   ||
        !taskInfluence.trim()      ||
        !taskInfluenceDescr.trim() ||
        !taskUrgency.trim()        ||
        !taskUrgencyDescr.trim()   ||
        !taskComment.trim()
    ) {
        alert('Заполните все поля!')
        return
    }

    let taskObj = [
        {
            ТипЗадачи             : "Задача Тех. Поддержке",
            ПодтипЗадачи          : taskService,
            Наименование          : taskName,
            ИмяПользователя       : userName,
            email                 : userEmail,
            КомпанияЗаказчик      : taskOrganization,
            ВлияниеЗадачи         : taskInfluence,
            ВлияниеЗадачиПодробно : `Влияние задачи подробно: ${taskInfluenceDescr}`,
            Срочность             : taskUrgency,
            СрочностьПодробно     : `Срочность задачи подробно: ${taskUrgencyDescr}`,
            Описание              : taskComment
        }
    ]

    store.setLoading(true)

    try {
        const res = AuthService.setNewTask(taskObj, String(localStorage.getItem('userEmail')))

        console.log(res);
    } catch (e) {
        console.log(e);
    } finally {
        store.setLoading(false)
    }

    setTaskType("")
    setTaskService("")

    handleSetTaskName("")
    handleSetUserName("")    
    handleSetUserEmail("") 
    handleSetTaskOrganization("") 
    handleSetTaskInfluence("") 
    handleSetTaskInfluenceDescr("")
    handleSetTaskUrgency("") 
    handleSetTaskUrgencyDescr("")
    handleSetTaskComment("")

    alert("Задача создана!")
  }

  function resetTaskType(tasktype:string) {
      switch (tasktype){
          case 'Настройки':
              return (
                  <>
                      <option value=""></option>
                      <option value="Подготовка электронных карт доступа">Подготовка электронных карт доступа</option>
                      <option value="Создание кода отпечатков пальцев">Создание кода отпечатков пальцев</option>
                      <option value="Настройки прав доступа в общие папки">Настройки прав доступа в общие папки</option>
                      <option value="Создание почты">Создание почты</option>
                      <option value="Настройка принтера">Настройка принтера</option>
                      <option value="Установка программного обеспечения">Установка программного обеспечения</option>
                      <option value="Настройка удаленного доступа">Настройка удаленного доступа</option>
                      <option value="Настройка сканера">Настройка сканера</option>
                      <option value="Подготовка нового компьютера">Подготовка нового компьютера</option>
                      <option value="Установка операционной системы">Установка операционной системы</option>
                      <option value="Настройка почты на телефон">Настройка почты на телефон</option>
                      <option value="Настройка почты на рабочий компьютер">Настройка почты на рабочий компьютер</option>
                      <option value="Блокировка почты">Блокировка почты</option>
                      <option value="Блокировка карты доступа">Блокировка карты доступа</option>
                      <option value="Настройка доступа в 1С">Настройка доступа в 1С</option>
                      <option value="Настройка камер на рабочий компьютер">Настройка камер на рабочий компьютер</option>
                      <option value="Настройка камер на личный телефон">Настройка камер на личный телефон</option>
                  </>
              )
          case 'Обслуживание':
              return (
                  <>
                      <option value=""></option>
                      <option value="Профилактика компьютера">Профилактика компьютера</option>                      
                      <option value="Обслуживание сервера">Обслуживание сервера</option>
                      <option value="Обслуживание камеры">Обслуживание камеры</option>
                      <option value="Обслуживание точки доступа">Обслуживание точки доступа</option>                      
                      <option value="Обслуживание принтера">Обслуживание принтера</option>
                  </>
              )
          case 'Ремонт':
              return (
                  <>
                      <option value=""></option>
                      <option value="Ремонт оргтехники">Ремонт оргтехники</option>
                      <option value="Закупка оргтехники">Закупка оргтехники</option>
                      <option value="Профилактика оргтехники">Профилактика оргтехники</option>
                      <option value="Заправка картриджей">Заправка картриджей</option>
                      <option value="Ремонт монитора">Ремонт монитора</option>
                      <option value="Ремонт ноутбука">Ремонт ноутбука</option>
                      <option value="Ремонт системного блока">Ремонт системного блока</option>
                      <option value="Ремонт устройства ввода">Ремонт устройства ввода</option>
                      <option value="Ремонт принтера">Ремонт принтера</option>
                  </>
                )
          case 'Сбои':
              return (
                    <>
                        <option value=""></option>
                        <option value="Сбой в работе электронной почты">Сбой в работе электронной почты</option>
                        <option value="Сбой при подключении к 1С">Сбой при подключении к 1С</option>                
                        <option value="Сбой в работе wifi">Сбой в работе wifi</option>
                    </>
                )
          default:
              return (
                  <>
                      <option value=""></option>
                  </>
              )
      }
          
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
                    <h1>Задача Тех. Поддержке</h1>
                </Container>  

                <Form.Group className="mb-3" controlId="ControlSelect1">
                    <div className='VR_taskType_FlexLine'>
                        <div className='VR_taskType_type'>
                            <Form.Label>Выберите тип задачи:</Form.Label>
                            <Form.Select 
                                className='VR_TaskName' 
                                aria-label="Тип задачи:"
                                value={taskType}
                                onChange={(e) => setTaskType(e.target.value)}>
                                
                                <option></option>
                                <option value="Настройки">Настройки</option>
                                <option value="Обслуживание">Обслуживание</option>
                                <option value="Ремонт">Ремонт</option>
                                <option value="Сбои">Сбои</option>
                            </Form.Select>
                        </div>

                        <div className='VR_taskType_service'>
                            <Form.Label>Выберите задачу:</Form.Label>
                            <Form.Select
                                aria-label='Ваша задача:'
                                value={taskService}
                                onChange={(e) => setTaskService(e.target.value)}>

                                {resetTaskType(taskType)} 
                            </Form.Select>
                        </div>
                    </div>
                </Form.Group>  

                <Form>
                        <TaskName InterfaceObj={InterfaceObj} />
                        
                        {store.isAuth ? (
                            null
                        ) : (
                            <>
                                <UserName InterfaceObj={InterfaceObj} />
                                <UserEmail InterfaceObj={InterfaceObj} /> 
                                <TaskOrganization InterfaceObj={InterfaceObj} />
                            </>
                        )}
                        <TaskInfluence InterfaceObj={InterfaceObj} />   
                        <TaskUrgency InterfaceObj={InterfaceObj} />
                        <TaskComment InterfaceObj={InterfaceObj}/>

                    <Button onClick={() => {
                        setNewTask()
                        window.location.reload()                
                    }} className='mb-5 mt-3 ps-5 pe-5' variant="outline-dark">Создать</Button>      
                </Form>
            </Container>
        </>
    )
}

export default observer(CreateTex)