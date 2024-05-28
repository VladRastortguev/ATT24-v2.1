import { observer } from 'mobx-react-lite'
import React, { FC, useContext, useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import TaskName from '../PodComponent/TaskName'
import UserName from '../PodComponent/UserName'
import UserEmail from '../PodComponent/UserEmail'
import TaskOrganization from '../PodComponent/TaskOrganization'
import TaskInfluence from '../PodComponent/TaskInfluence'
import TaskUrgency from '../PodComponent/TaskUrgency'

import '../Create1C/Create1C.css'
import RightContent from '../RightContent/RightContent'
import TaskComment from '../PodComponent/TaskComment'
import { Context } from '../../..'
import AuthService from '../../../services/AuthService'
import { TaskFunction } from '../Interface/TaskFunction'
import UserService from '../../../services/UserService'
import UserNameCreate1c from '../PodComponent/CreateAccount1c/UserNameCreate1c'
import UserCompanyCreate1c from '../PodComponent/CreateAccount1c/UserCompanyCreate1c'
import UserEmailCreate1c from '../PodComponent/CreateAccount1c/UserEmailCreate1c'
import UserJobtitelCreate1c from '../PodComponent/CreateAccount1c/UserJobtitelCreate1c'
import UserArrowJod from '../PodComponent/CreateAccount1c/UserArrowJod'
import ModalEmptyForm from '../../AlertModal/ModalEmptyForm/ModalEmptyForm'
import ModalSucces from '../../AlertModal/ModalSuccess/ModalSucces'

const Create1C:FC= () => {
    const [taskService, setTaskService] = useState('')

    const [taskName, setTaskName] = useState('')
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [taskOrganization, setTaskOrganization] = useState('')

    const [taskInfluence, setTaskInfluence] = useState('')
    const [taskInfluenceDescr, setTaskInfluenceDescr] = useState('')
    const [taskPodInfluence, setTaskPodInfluence] = useState('')
    
    const [taskUrgency, setTaskUrgency] = useState('')
    const [taskUrgencyDescr, setTaskUrgencyDescr] = useState('')
    const [taskComment, setTaskComment] = useState('')

    const [userNameCreate1c, setUserNameCreate1c] = useState('')
    const [userCompanyCreate1c, setUserCompanyCreate1c] = useState('')
    const [userEmailCreate1c, setUserEmailCreate1c] = useState('')
    const [userJobtitelCreate1c, setUserJobtitelCreate1c] = useState('')
    const [userJobArrowCreate1c, setUserJobArrowCreate1c] = useState('')

    const [modalEmpty, setModalEmpty] = useState(false)
    const [modalSuccess, setModalSuccess] = useState(false)

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

    const handleSetPodTaskInfluence = (newState: string) => {
        setTaskPodInfluence(newState)
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



    const handleSetUserNameCreate1c = (newState: string) => {
        setUserNameCreate1c(newState)
    }

    const handleSetUserCompanyCreate1c = (newState: string) => {
        setUserCompanyCreate1c(newState)
    }

    const handleSetUserEmailCreate1c = (newState: string) => {
        setUserEmailCreate1c(newState)
    }

    const handleSetUserJobtitelCreate1c = (newState: string) => {
        setUserJobtitelCreate1c(newState)
    }

    const handleSetUserJobArrow = (newState: string) => {
        setUserJobArrowCreate1c(newState)
    }


    const handleChangeButtonModalEmpty = (newState: boolean) => {
        setModalEmpty(newState)
    }

    const handleChangeButtonModalSuccess = (newState: boolean) => {
        setModalSuccess(newState)
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

    const InterfaceObjCreate1c = {
        changeUserNameCreate1c: handleSetUserNameCreate1c,
        changeUserCompanyCreate1c: handleSetUserCompanyCreate1c,
        changeUserEmailCreate1c: handleSetUserEmailCreate1c,
        changeUserJobtitelCreate1c: handleSetUserJobtitelCreate1c,
        changeUserJobArrow: handleSetUserJobArrow,
        resetJobTitel: setNewTask,
        userName: userNameCreate1c,
        userCompany: userCompanyCreate1c,
        userEmail: userEmailCreate1c,
        userJobtitel: userJobtitelCreate1c,
        userJobArrow: userJobArrowCreate1c
    }

    const InterfaceObjModal = {
        changeButtonEmpty: handleChangeButtonModalEmpty,
        changeButtonSuccess: handleChangeButtonModalSuccess
    }

    function changeArrowContent(UserArrowJob:string) {
        switch (UserArrowJob) {
            case 'CR':
                return(
                    <>
                        <option value=""></option>
                        <option value="Администратор торгового зала">Администратор торгового зала</option>
                        <option value="Старший администратор торгового зала">Старший администратор торгового зала</option>
                    </>
                )
            case 'HR':
                return (
                    <>
                        <option value=""></option>
                        <option value="HR Директор">HR Директор</option>
                        <option value="HR специалист">HR специалист</option>
                        <option value="Специалист по подбору персонала">Специалист по подбору персонала</option>                    
                    </>
                )
            case 'Контакт центр':
                return (
                    <>
                        <option value=""></option>
                        <option value="Оператор Call-центра">Оператор Call-центра</option>
                        <option value="Старший оператор Call-центра">Старший оператор Call-центра</option>
                    </>
                )
            case 'КСО': 
                return (
                    <>
                        <option value=""></option>
                        <option value="Менеджер КСО">Менеджер КСО</option>
                    </>
                )
            case 'ППО':
                return (
                    <>
                        <option value=""></option>
                        <option value="Автоэлектрик">                             Автоэлектрик</option>
                        <option value="Автоэлектрик-инжекторщик">                 Автоэлектрик-инжекторщик</option>
                        <option value="Администратор мойки">                      Администратор мойки</option>
                        <option value="Заведующий складом">                       Заведующий складом</option>
                        <option value="Инженер по гарантии">                      Инженер по гарантии</option>
                        <option value="Кладовщик">                                Кладовщик</option>
                        <option value="Маляр">                                    Маляр</option>
                        <option value="Мастер АКПП/ДВС">                          Мастер АКПП/ДВС</option>
                        <option value="Мастер по ремонту кузовной части">         Мастер по ремонту кузовной части</option>
                        <option value="Мастер цеха">                              Мастер цеха</option>
                        <option value="Механик">                                  Механик</option>
                        <option value="Мойщик авто">                              Мойщик авто</option>
                        <option value="Моторист">                                 Моторист</option>
                        <option value="Оператор сервиса">                         Оператор сервиса</option>
                        <option value="Перегонщик авто">                          Перегонщик авто</option>
                        <option value="Полировщик">                               Полировщик</option>
                        <option value="Помощник заведующего складом">             Помощник заведующего складом</option>
                        <option value="Помощник технического специалиста">        Помощник технического специалиста</option>
                        <option value="Развал схождение">                         Развал схождение</option>
                        <option value="Руководитель TDS">                         Руководитель TDS</option>
                        <option value="Руководитель малярно-кузовного цеха">      Руководитель малярно-кузовного цеха</option>
                        <option value="Руководитель отдела зап.частей">           Руководитель отдела зап.частей</option>
                        <option value="Руководитель сервисного бюро">             Руководитель сервисного бюро</option>
                        <option value="Сервис-консультант">                       Сервис-консультант</option>
                        <option value="Специалист Детейлинг">                     Специалист Детейлинг</option>
                        <option value="Специалист отдела зап частей">             Специалист отдела зап частей</option>
                        <option value="Специалист отдела продаж запасных частей"> Специалист отдела продаж запасных частей</option>
                        <option value="Специалист по детейлингу">                 Специалист по детейлингу</option>
                        <option value="Старший кладовщик">                        Старший кладовщик</option>
                        <option value="Технический директор">                     Технический директор</option>
                    </>
                )
            case 'Продажи':
                return (
                    <>
                        <option value=""></option>
                        <option value="Директор по корпоративным продажам">         Директор по корпоративным продажам</option>
                        <option value="Коммерческий директор">                      Коммерческий директор</option>
                        <option value="Менеджер по тендерам">                       Менеджер по тендерам</option>
                        <option value="Руководитель отдела продаж авто">            Руководитель отдела продаж авто</option>
                        <option value="Руководитель отдела продаж авто с пробегом"> Руководитель отдела продаж авто с пробегом</option>
                        <option value="Руководитель отдела проката автомобилей">    Руководитель отдела проката автомобилей</option>
                        <option value="Специалист отдела проката автомобилей">      Специалист отдела проката автомобилей</option>
                        <option value="Специалист по продажам авто с пробегом">     Специалист по продажам авто с пробегом</option>
                        <option value="Специалист по продажам автомобилей">         Специалист по продажам автомобилей</option>
                    </>
                )
            case 'Финансовый департамент':
                return (
                    <>
                        <option value=""></option>
                        <option value="Бухгалтер">                     Бухгалтер</option>
                        <option value="Главный бухгалтер">             Главный бухгалтер</option>
                        <option value="Кассир">                        Кассир</option>
                        <option value="Специалист финансового отдела"> Специалист финансового отдела</option>
                        <option value="Финансовый менеджер">           Финансовый менеджер</option>
                        <option value="Финансовый специалист">         Финансовый специалист</option>
                    </>
                )
        }
    }

    function changeInfluenceContent(taskInfluence:string) {
        switch (taskInfluence) {
            case 'Критический':
                return (
                    <>
                        <option value=""></option>
                        <option value="Полная потеря функциональности продукта">Полная потеря функциональности продукта</option>
                        <option value="Проблема затрагивает большое количество пользователей">Проблема затрагивает большое количество пользователей</option>
                        <option value="Проблема не влияет на работу большого количества пользователей">Проблема не влияет на работу большого количества пользователей</option>
                    </>
                )
            case 'Высокий':
                return (
                    <>
                        <option value=""></option>
                        <option value="Значительное снижение функциональности">Значительное снижение функциональности</option>
                        <option value="Проблема затрагивает ограниченное количество пользователей">Проблема затрагивает ограниченное количество пользователей</option>
                        <option value="Проблема не влияет на работу большого количества пользователей">Проблема не влияет на работу большого количества пользователей</option>
                    </>
                )
            case 'Средний':
                return (
                    <>
                        <option value=""></option>
                        <option value="Частичное снижение функциональности">Частичное снижение функциональности</option>
                        <option value="Проблема имеет временное решение">Проблема имеет временное решение</option>
                        <option value="Проблема не имеет временного решения">Проблема не имеет временного решения</option>
                    </>
                )
            case 'Низкий':
                return (
                    <>
                        <option value=""></option>
                        <option value="Незначительные проблемы">Незначительные проблемы</option>
                        <option value="Нет непосредственной угрозы функциональности">Нет непосредственной угрозы функциональности</option>
                    </>
                )    
        }
    }

    async function setNewTask() {
        if (
            !taskService.trim()        ||
            !userName.trim()           ||
            !userEmail.trim()          ||
            !taskOrganization.trim()   ||
            !taskName.trim()           ||            
            !taskComment.trim()
        ) {
            setModalEmpty(true)
            return
        }
        
        if (taskService == 'Создание учетной записи АА6') {
            if (
                !userNameCreate1c.trim()     ||
                !userCompanyCreate1c.trim()  ||
                !userEmailCreate1c.trim()    ||
                !userJobtitelCreate1c.trim() ||
                !userJobArrowCreate1c.trim()
            ) {
                setModalEmpty(true)
                return
            } 
        } else if (
            !taskInfluence.trim()      ||
            !taskInfluenceDescr.trim() ||
            !taskUrgency.trim()        ||
            !taskUrgencyDescr.trim()
        ) {
            setModalEmpty(true)
            return
        }

        let taskObj = [
            {
                ТипЗадачи             : "Задачи 1С",
                ПодтипЗадачи          : taskService,
                Наименование          : taskName,
                ИмяПользователя       : userName,
                email                 : userEmail,
                КомпанияЗаказчик      : taskOrganization,
                ВлияниеЗадачи         : taskInfluence,
                ВлияниеЗадачиПодробно : `Влияние задачи подробно: ${taskInfluenceDescr}. Обоснование влияния из выбора: ${taskPodInfluence}`,
                Срочность             : taskUrgency,
                СрочностьПодробно     : `Срочность задачи подробно: ${taskUrgencyDescr}`,
                Описание              : taskComment,

                ПользовательУчеткиАА6 : userNameCreate1c,
                КомпанияУчеткиАА6     : userCompanyCreate1c,
                ПочтаУчеткиАА6        : userEmailCreate1c,
                ДолжностьУчеткиАА6    : userJobtitelCreate1c,
                НаправлениеУчеткиАА6  : userJobArrowCreate1c
            }
        ]

        if (taskService == 'Создание учетной записи АА6') {
            taskObj[0].ВлияниеЗадачи = "Среднее"
            taskObj[0].ВлияниеЗадачиПодробно = "Влияние задачи подробно: Создание новой учетки"
            taskObj[0].Срочность = "Средняя"
            taskObj[0].СрочностьПодробно = "Срочность задачи подробно: Создание новой учетки"
        }

        // console.log(taskObj);

        try {
            store.setLoading(true)

            const res = AuthService.setNewTask(taskObj, String(localStorage.getItem('userEmail')))

            console.log(res);
        } catch (e) {
            console.log(e);
        } finally {
            store.setLoading(false)
        }

        setModalSuccess(true)

        setTaskService("")

        handleSetTaskComment("")
        handleSetTaskInfluence("")
        handleSetTaskInfluenceDescr("")
        handleSetTaskName("")
        handleSetTaskOrganization("")
        handleSetTaskUrgency("")
        handleSetTaskUrgencyDescr("")
        handleSetUserEmail("")
        handleSetUserName("")

        handleSetUserNameCreate1c("")
        handleSetUserCompanyCreate1c("")
        handleSetUserEmailCreate1c("")
        handleSetUserJobtitelCreate1c("")
        handleSetUserJobArrow("")
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
                    <h1>Задача 1С</h1>
                </Container>            
                    <Form className='VR_Container_Flex_Form'>
                        <Form.Group className="mb-3" controlId="ControlSelect1">
                            <Form.Label>Выберите вашу задачу:</Form.Label>
                            <Form.Select 
                                className='VR_TaskName' 
                                aria-label="Ваша задача:"
                                value={taskService}
                                onChange={(e) => setTaskService(e.target.value)}>
                                
                                <option></option>
                                <option value="Доработка 1С">Доработка 1С</option>
                                <option value="Разработка 1С">Разработка 1С</option>
                                <option value="Создание учетной записи АА6">Создание учетной записи АА6</option>
                            </Form.Select>
                        </Form.Group>     

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

                        {taskService == 'Создание учетной записи АА6' ? (
                            null
                        ) : (
                            <>
                                {/* <TaskInfluence InterfaceObj={InterfaceObj} />   
                                <TaskUrgency InterfaceObj={InterfaceObj} />                             */}

                                <div className='VR_taskType_FlexLine'>
                                    <div className='VR_taskType_type'>
                                        <Form.Group className="mb-3" controlId="ControlSelect2">
                                            <Form.Label>Приоритет Вашей задачи:</Form.Label>                
                                            <Form.Select
                                                className='VR_TaskName' 
                                                aria-label="Влияние вашей задачи:"
                                                value={taskInfluence}
                                                onChange={(e) => handleSetTaskInfluence(e.target.value)}>
            
                                                <option></option>
                                                <option value='Низкий'>Низкий</option>
                                                <option value='Средний'>Средний</option>
                                                <option value='Высокий'>Высокий</option>
                                                <option value='Критический'>Критический</option>
                                            </Form.Select>            
                                        </Form.Group>                                        
                                    </div>

                                    <div className='VR_taskType_service'>
                                        <Form.Group>
                                            <Form.Label>Пояснение приоритета:</Form.Label>
                                            <Form.Select
                                                // className='VR_TaskName'
                                                aria-label='Пояснение приоритета:'
                                                value={taskPodInfluence}
                                                onChange={(e) => setTaskPodInfluence(e.target.value)}>

                                                {changeInfluenceContent(taskInfluence)}

                                            </Form.Select>
                                        </Form.Group>                                
                                    </div>
                                </div>

                                <Form.Group className="mb-3" controlId="ControlTextarea1">
                                    <Form.Label>Опишите влияние вашей задачи:</Form.Label>
                                    <Form.Control 
                                        className='VR_TaskName' 
                                        as="textarea" 
                                        rows={3}
                                        value={taskInfluenceDescr} 
                                        onChange={(e) => handleSetTaskInfluenceDescr(e.target.value)}/>
                                </Form.Group>

                                <TaskUrgency InterfaceObj={InterfaceObj} />
                            </>
                        )}

                        {taskService == 'Создание учетной записи АА6' ? (
                            <>
                                <UserNameCreate1c InterfaceObj={InterfaceObjCreate1c} />
                                <UserCompanyCreate1c InterfaceObj={InterfaceObjCreate1c}/>  
                                <UserEmailCreate1c InterfaceObj={InterfaceObjCreate1c} />
                                <UserArrowJod InterfaceObj={InterfaceObjCreate1c} />
                                {/* <UserJobtitelCreate1c InterfaceObj={InterfaceObjCreate1c} />                         */}
                            
                                <Form.Group className="mb-3" controlId="ControlSelect3">
                                    <Form.Label>Должность сотрудника которому необходима учетная запись:</Form.Label>
                                    <Form.Select 
                                        className='VR_TaskName' 
                                        aria-label="Срочность вашей задачи:"
                                        value={userJobtitelCreate1c}
                                        onChange={(e) => handleSetUserJobtitelCreate1c(e.target.value)}>
                
                                            {changeArrowContent(userJobArrowCreate1c)}
                                    </Form.Select>
                                </Form.Group>
                            </>
                        ) : (
                            null
                        )}


                        <TaskComment InterfaceObj={InterfaceObj}/>

                        {modalEmpty ? (
                            <div className='ModalEmpty_HeaderBlock'>
                                <ModalEmptyForm InterfaceObj={InterfaceObjModal} />
                            </div>
                        ) : (
                            <></>
                        )}

                        {modalSuccess ? (
                            <div className='ModalSuccess_headerBlock'>
                                <ModalSucces InterfaceObj={InterfaceObjModal} />
                            </div>
                        ) : (
                            <></>
                        )}
                        
                        <Button onClick={() => {
                            setNewTask()
                            // window.location.reload()
                        }} className='mb-5 mt-3 ps-5 pe-5' variant="outline-dark">Создать</Button>      
                    </Form>

            </Container> 
        </>
    )
}

export default observer(Create1C)