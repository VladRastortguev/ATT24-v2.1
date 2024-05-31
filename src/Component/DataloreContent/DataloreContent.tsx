import { observer } from 'mobx-react-lite'
import React, { FC } from 'react'
import { Accordion, Container } from 'react-bootstrap'

import pdf from '../../pdfAgregator'

import './DataloreContent.css'

const DataloreContent:FC = () => {
    
    const Администрирование_РЛС = pdf('Администрирование_РЛС_и_пользователей.pdf')
    const Бонусная_система_АТТ = pdf('АТТ_Бонусная система_Инструкция.pdf')
    const Дорожная_Карта_МОП = pdf('Дорожная карта МОП.pdf')
    const Дорожная_Карта_СК = pdf('Дорожная карта сервисного консультанта.pdf')
    const Заказ_И_Резирвирование_ЗН = pdf('Заказ_и_резервирование_товаров,_под_Заказ_наряд_2.pdf')
    const Бесплатные_Заказ_Наряды = pdf('Инструкция_по_работе_с_бесплатными_заказ_нарядами.pdf')
    const Кредитные_программы = pdf('Кредитные программы.pdf')
    const Выдача_Авто_После_Обслуживания = pdf('Процедура выдачи автомобиля после обслуживания.pdf')
    const Выдача_SST = pdf('Процедура выдачи SST.pdf')
    const Выставление_Гарантийных_Требований = pdf('Процедура выставления гарантийных требований.pdf')    
    const Качественный_Ремонта_С_Первого_Раза = pdf('Процедура качественного ремонта с первого раза.pdf')
    const Контроль_Ам_Находящихся_Ожидающих_Ремонта = pdf('Процедура Контроль ам находящихся на внутренней парковке которые ожидают з.ч. или ремонта.pdf')
    const Контроль_Хода_Работ = pdf('Процедура Контроль хода работ.pdf')
    const Мойка_И_Уборки_автомобиля_На_СО = pdf('Процедура мойки и уборки автомобиля на сервисное обслуживание_.pdf')    
    const Написание_Запросов_На_Тех_Поддержку_RSR = pdf('Процедура написания запросов на техническую поддержку RSR.pdf')
    const Ознакомление_С_Сервисными_Бюллетенями_И_Тех_Информацией = pdf('Процедура ознакомления с Сервисными бюллетенями и Технической информацией.pdf')
    const Отправка_Зч_В_ТМР = pdf('Процедура отправки зч в ТМР.pdf')
    const Отслеживание_И_Оповещение_Клиента_О_Поступлении_Зч = pdf('Процедура Отслеживания и оповещения клиента о поступлении зч.pdf')
    const Подготовка_К_Визиту_На_ТО_И_ТР = pdf('Процедура подготовка к визиту на ТО и ТР.pdf')
    const Порядок_Проведения_Кругового_Осмотра_Авто_При_Приемке = pdf('Процедура Порядок проведения кругового осмотра авто при приемке.pdf')
    const Предварительная_Запись_На_ТО_И_ТР = pdf('Процедура Предварительная запись на ТО и ТР.pdf')
    const Предварительный_Подбор_И_Выдачи_Запасных_Частей = pdf('Процедура Предварительного подбора и выдачи запасных частей.pdf')
    const Прием_Автомобиля_Клиента_На_ТО_И_ТР = pdf('Процедура прием автомобиля клиента на ТО и ТР.pdf')
    const Прием_И_Оприходование_ЗЧ = pdf('Процедура Прием и оприходование з.ч..pdf')
    const Проведения_Контроля_Качества = pdf('Процедура проведения контроля качества.pdf')    
    const Проведения_Спец_Сервисных_Компаний_NEW = pdf('Процедура проведения спец сервисных компаний NEW.pdf')
    const Продажа_Заказ_И_Выдача_ЗЧ_Клиенту = pdf('Процедура Продажа, заказ и выдача з.ч. клиенту.pdf')
    const Работы_С_Рекламациями_И_Повторными_Ремонтами = pdf('Процедура работы с рекламациями и повторными ремонтами.pdf')
    const Расчет_Первоначального_Запаса_Деталей = pdf('Процедура расчета первоначального запаса деталей для проведения ССК при ....pdf')
    const Система_Распределения_Резервов = pdf('Процедура Система распределения резервов и визуализации запасных частей по клиентским заказам (P to P  - вариант реализации в DMS).pdf')
    const Согласование_С_Клиентами_Доп_работ = pdf('Процедура Согласование с клиентами дополнительных работ и изменение сроков ремонта.._.pdf')
    const Формирования_И_Загрузка_Отчета_VOC = pdf('Процедура формирования и загрузка отчета VOC.pdf')
    const Формирования_И_Размещения_Заказов_Запасных_Частей_Типа_VOR = pdf('Процедура формирования и размещения заказов запасных частей типа VOR.pdf')
    const Хранение_И_Обслуживание_АКБ = pdf('Процедура Хранение и обслуживание АКБ.pdf')
    const Хранение_Запасных_Частей_И_Агрегатов = pdf('Процедура хранения  запасных частей и агрегатов.pdf')
    const Хранение_И_Утилизации_Запасных_Частей_По_Гарантии = pdf('Процедура хранения и утилизации запасных частей замененных по гарантии.pdf')
    const ПФ_Заявление_Покупателя = pdf('ПФ заявление покупателя.pdf')
    const Ручное_Планирование = pdf('Ручное планирование.pdf')
    const Создание_Сотрудника_И_Влияние_Реквизитов = pdf('Создание_сотрудника_и_влияние_реквизитов.pdf')
    const установка_Цен = pdf('установка цен (2).pdf')
    const Инструкция_ОПА = pdf('instruction_OPA.pdf')
    const Инструкция_По_АА6_Том_1 = pdf('Автосалон 6_1_2023_08_04_том1.pdf')
    const Инструкция_По_АА6_Том_2 = pdf('Автосалон 6_1_2023_08_04_том2.pdf')
    const Инструкция_По_АА6_Том_3 = pdf('Автосалон 6_1_2023_08_04_том3.pdf')
    const АрендаАвто = pdf('rukovodstvo_polzovatelya_alfa_avto_arenda_avtomobiley_6.pdf')
    
    return (
        <>
            <Container>
                <div className='VR_Accordion_Content_Header mt-5'>
                    <Accordion>
                        <Accordion.Item eventKey='0'>
                            <Accordion.Header className='VR_All_Header_Accordion'>Альфа-6</Accordion.Header>
                            <Accordion.Body>

                                <Accordion>
                                    <Accordion.Item eventKey='0'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>Администрирование РЛС</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                            <a target='_blank' href={`Datalorepdf/${Администрирование_РЛС}`}>Просмотреть</a>
                                            <a className='ms-3' download href={`Datalorepdf/${Администрирование_РЛС}`}>Скачать</a>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='5'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>Аренда автомобиля</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                           <div>
                                                <p className='mb-3 ms-2'>Руководство пользователя по Аренде автомобилей</p>

                                                <div>
                                                    <a className='ms-2'  target='_blank' href={`Datalorepdf/${АрендаАвто}`}>Просмотреть</a>
                                                    <a className='ms-3' download href={`Datalorepdf/${АрендаАвто}`}>Скачать</a>
                                                </div>
                                           </div>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='1'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>Бонусная система АТТ</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                            <a target='_blank' href={`Datalorepdf/${Бонусная_система_АТТ}`}>Просмотреть</a>
                                            <a className='ms-3' download href={`Datalorepdf/${Бонусная_система_АТТ}`}>Скачать</a>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='8'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>Выдача автобиля после обслуживания</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                            <a target='_blank' href={`Datalorepdf/${Выдача_Авто_После_Обслуживания}`}>Просмотреть</a>
                                            <a className='ms-3' download href={`Datalorepdf/${Выдача_Авто_После_Обслуживания}`}>Скачать</a>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='9'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>Выдача SST</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                            <a target='_blank' href={`Datalorepdf/${Выдача_SST}`}>Просмотреть</a>
                                            <a className='ms-3' download href={`Datalorepdf/${Выдача_SST}`}>Скачать</a>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='10'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>Выставление гарантийных требований</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                            <a target='_blank' href={`Datalorepdf/${Выставление_Гарантийных_Требований}`}>Просмотреть</a>
                                            <a className='ms-3' download href={`Datalorepdf/${Выставление_Гарантийных_Требований}`}>Скачать</a>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='2'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>Дорожная карта МОП</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                            <a target='_blank' href={`Datalorepdf/${Дорожная_Карта_МОП}`}>Просмотреть</a>
                                            <a className='ms-3' download href={`Datalorepdf/${Дорожная_Карта_МОП}`}>Скачать</a>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='3'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>Дорожная карта сервисного консультанта</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                            <a target='_blank' href={`Datalorepdf/${Дорожная_Карта_СК}`}>Просмотреть</a>
                                            <a className='ms-3' download href={`Datalorepdf/${Дорожная_Карта_СК}`}>Скачать</a>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='4'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>Заказ и резервирование товара, под заказ наряд</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                           <div>
                                                <p className='mb-3 ms-2'>Руководство пользователя по Заказы и резервированию товаров, из «Заявки на ремонт», из «Заказ-наряда»</p>

                                                <div>
                                                    <a className='ms-2'  target='_blank' href={`Datalorepdf/${Заказ_И_Резирвирование_ЗН}`}>Просмотреть</a>
                                                    <a className='ms-3' download href={`Datalorepdf/${Заказ_И_Резирвирование_ЗН}`}>Скачать</a>
                                                </div>
                                           </div>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='6'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>Инструкция по работе с бесплатными заказ нарядами</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                            <a target='_blank' href={`Datalorepdf/${Бесплатные_Заказ_Наряды}`}>Просмотреть</a>
                                            <a className='ms-3' download href={`Datalorepdf/${Бесплатные_Заказ_Наряды}`}>Скачать</a>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='41'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>Инструкция ОПА</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                            <a target='_blank' href={`Datalorepdf/${Инструкция_ОПА}`}>Просмотреть</a>
                                            <a className='ms-3' download href={`Datalorepdf/${Инструкция_ОПА}`}>Скачать</a>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='42'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>Инструкция по АА6 том 1</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                            <a target='_blank' href={`Datalorepdf/${Инструкция_По_АА6_Том_1}`}>Просмотреть</a>
                                            <a className='ms-3' download href={`Datalorepdf/${Инструкция_По_АА6_Том_1}`}>Скачать</a>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='43'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>Инструкция по АА6 том 2</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                            <a target='_blank' href={`Datalorepdf/${Инструкция_По_АА6_Том_2}`}>Просмотреть</a>
                                            <a className='ms-3' download href={`Datalorepdf/${Инструкция_По_АА6_Том_2}`}>Скачать</a>
                                        </Accordion.Body>
                                    </Accordion.Item> 

                                    <Accordion.Item eventKey='44'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>Инструкция по АА6 том 3</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                            <a target='_blank' href={`Datalorepdf/${Инструкция_По_АА6_Том_3}`}>Просмотреть</a>
                                            <a className='ms-3' download href={`Datalorepdf/${Инструкция_По_АА6_Том_3}`}>Скачать</a>
                                        </Accordion.Body>
                                    </Accordion.Item>   

                                    <Accordion.Item eventKey='7'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>Кредитные программы</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                            <a target='_blank' href={`Datalorepdf/${Кредитные_программы}`}>Просмотреть</a>
                                            <a className='ms-3' download href={`Datalorepdf/${Кредитные_программы}`}>Скачать</a>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='12'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>Контроль ам ожидающих ремонта</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                            <a target='_blank' href={`Datalorepdf/${Контроль_Ам_Находящихся_Ожидающих_Ремонта}`}>Просмотреть</a>
                                            <a className='ms-3' download href={`Datalorepdf/${Контроль_Ам_Находящихся_Ожидающих_Ремонта}`}>Скачать</a>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='13'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>Контроль хода работ</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                            <a target='_blank' href={`Datalorepdf/${Контроль_Хода_Работ}`}>Просмотреть</a>
                                            <a className='ms-3' download href={`Datalorepdf/${Контроль_Хода_Работ}`}>Скачать</a>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='14'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>Мойка и уборки автомобиля на СО</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                            <a target='_blank' href={`Datalorepdf/${Мойка_И_Уборки_автомобиля_На_СО}`}>Просмотреть</a>
                                            <a className='ms-3' download href={`Datalorepdf/${Мойка_И_Уборки_автомобиля_На_СО}`}>Скачать</a>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='15'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>Написание запросов на тех поддержку RSR</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                            <a target='_blank' href={`Datalorepdf/${Написание_Запросов_На_Тех_Поддержку_RSR}`}>Просмотреть</a>
                                            <a className='ms-3' download href={`Datalorepdf/${Написание_Запросов_На_Тех_Поддержку_RSR}`}>Скачать</a>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='16'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>Ознакомление с сервисными бюллетенями и тех информацией</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                            <a target='_blank' href={`Datalorepdf/${Ознакомление_С_Сервисными_Бюллетенями_И_Тех_Информацией}`}>Просмотреть</a>
                                            <a className='ms-3' download href={`Datalorepdf/${Ознакомление_С_Сервисными_Бюллетенями_И_Тех_Информацией}`}>Скачать</a>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='17'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>Отправка з.ч. в ТМР</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                            <a target='_blank' href={`Datalorepdf/${Отправка_Зч_В_ТМР}`}>Просмотреть</a>
                                            <a className='ms-3' download href={`Datalorepdf/${Отправка_Зч_В_ТМР}`}>Скачать</a>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='18'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>Отслеживание и оповещение клиента о поступлении з.ч.</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                            <a target='_blank' href={`Datalorepdf/${Отслеживание_И_Оповещение_Клиента_О_Поступлении_Зч}`}>Просмотреть</a>
                                            <a className='ms-3' download href={`Datalorepdf/${Отслеживание_И_Оповещение_Клиента_О_Поступлении_Зч}`}>Скачать</a>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='19'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>Подготовка у визиту на ТО и ТР</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                            <a target='_blank' href={`Datalorepdf/${Подготовка_К_Визиту_На_ТО_И_ТР}`}>Просмотреть</a>
                                            <a className='ms-3' download href={`Datalorepdf/${Подготовка_К_Визиту_На_ТО_И_ТР}`}>Скачать</a>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='20'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>Порядок проведения кругового осмотра авто при приемке</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                            <a target='_blank' href={`Datalorepdf/${Порядок_Проведения_Кругового_Осмотра_Авто_При_Приемке}`}>Просмотреть</a>
                                            <a className='ms-3' download href={`Datalorepdf/${Порядок_Проведения_Кругового_Осмотра_Авто_При_Приемке}`}>Скачать</a>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='21'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>Предварительная запись на ТО и ТР</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                            <a target='_blank' href={`Datalorepdf/${Предварительная_Запись_На_ТО_И_ТР}`}>Просмотреть</a>
                                            <a className='ms-3' download href={`Datalorepdf/${Предварительная_Запись_На_ТО_И_ТР}`}>Скачать</a>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='22'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>Предварительный подбор и выдачи запасных частей</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                            <a target='_blank' href={`Datalorepdf/${Предварительный_Подбор_И_Выдачи_Запасных_Частей}`}>Просмотреть</a>
                                            <a className='ms-3' download href={`Datalorepdf/${Предварительный_Подбор_И_Выдачи_Запасных_Частей}`}>Скачать</a>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='23'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>Прием автомобиля клиента на ТО и ТР</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                            <a target='_blank' href={`Datalorepdf/${Прием_Автомобиля_Клиента_На_ТО_И_ТР}`}>Просмотреть</a>
                                            <a className='ms-3' download href={`Datalorepdf/${Прием_Автомобиля_Клиента_На_ТО_И_ТР}`}>Скачать</a>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='24'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>Прием и оприходование з.ч.</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                            <a target='_blank' href={`Datalorepdf/${Прием_И_Оприходование_ЗЧ}`}>Просмотреть</a>
                                            <a className='ms-3' download href={`Datalorepdf/${Прием_И_Оприходование_ЗЧ}`}>Скачать</a>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='25'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>Проведения контроля качества</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                            <a target='_blank' href={`Datalorepdf/${Проведения_Контроля_Качества}`}>Просмотреть</a>
                                            <a className='ms-3' download href={`Datalorepdf/${Проведения_Контроля_Качества}`}>Скачать</a>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='26'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>Проведение спец сервисных компаний</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                            <a target='_blank' href={`Datalorepdf/${Проведения_Спец_Сервисных_Компаний_NEW}`}>Просмотреть</a>
                                            <a className='ms-3' download href={`Datalorepdf/${Проведения_Спец_Сервисных_Компаний_NEW}`}>Скачать</a>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='27'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>Продажа заказ и выдача з.ч. клиенту</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                            <a target='_blank' href={`Datalorepdf/${Продажа_Заказ_И_Выдача_ЗЧ_Клиенту}`}>Просмотреть</a>
                                            <a className='ms-3' download href={`Datalorepdf/${Продажа_Заказ_И_Выдача_ЗЧ_Клиенту}`}>Скачать</a>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='28'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>Работы с рекламациями и повторными ремонтами</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                            <a target='_blank' href={`Datalorepdf/${Работы_С_Рекламациями_И_Повторными_Ремонтами}`}>Просмотреть</a>
                                            <a className='ms-3' download href={`Datalorepdf/${Работы_С_Рекламациями_И_Повторными_Ремонтами}`}>Скачать</a>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='29'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>Расчет первоначального запаса деталей</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                            <a target='_blank' href={`Datalorepdf/${Расчет_Первоначального_Запаса_Деталей}`}>Просмотреть</a>
                                            <a className='ms-3' download href={`Datalorepdf/${Расчет_Первоначального_Запаса_Деталей}`}>Скачать</a>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='30'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>Система распределения резервов</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                            <a target='_blank' href={`Datalorepdf/${Система_Распределения_Резервов}`}>Просмотреть</a>
                                            <a className='ms-3' download href={`Datalorepdf/${Система_Распределения_Резервов}`}>Скачать</a>
                                        </Accordion.Body>
                                    </Accordion.Item> 

                                    <Accordion.Item eventKey='31'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>Согласование с клиентами доп. работ</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                            <a target='_blank' href={`Datalorepdf/${Согласование_С_Клиентами_Доп_работ}`}>Просмотреть</a>
                                            <a className='ms-3' download href={`Datalorepdf/${Согласование_С_Клиентами_Доп_работ}`}>Скачать</a>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='32'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>Формирования и загрузка отчета VOC</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                            <a target='_blank' href={`Datalorepdf/${Формирования_И_Загрузка_Отчета_VOC}`}>Просмотреть</a>
                                            <a className='ms-3' download href={`Datalorepdf/${Формирования_И_Загрузка_Отчета_VOC}`}>Скачать</a>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='33'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>Формирования и размещения заказов запасных частей типа VOR</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                            <a target='_blank' href={`Datalorepdf/${Формирования_И_Размещения_Заказов_Запасных_Частей_Типа_VOR}`}>Просмотреть</a>
                                            <a className='ms-3' download href={`Datalorepdf/${Формирования_И_Размещения_Заказов_Запасных_Частей_Типа_VOR}`}>Скачать</a>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='34'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>Хранение и обслуживание АКБ</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                            <a target='_blank' href={`Datalorepdf/${Хранение_И_Обслуживание_АКБ}`}>Просмотреть</a>
                                            <a className='ms-3' download href={`Datalorepdf/${Хранение_И_Обслуживание_АКБ}`}>Скачать</a>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='35'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>Хранение запасных частей и агрегатов</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                            <a target='_blank' href={`Datalorepdf/${Хранение_Запасных_Частей_И_Агрегатов}`}>Просмотреть</a>
                                            <a className='ms-3' download href={`Datalorepdf/${Хранение_Запасных_Частей_И_Агрегатов}`}>Скачать</a>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='36'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>Хранение и утилизации запасных частей по гарантии</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                            <a target='_blank' href={`Datalorepdf/${Хранение_И_Утилизации_Запасных_Частей_По_Гарантии}`}>Просмотреть</a>
                                            <a className='ms-3' download href={`Datalorepdf/${Хранение_И_Утилизации_Запасных_Частей_По_Гарантии}`}>Скачать</a>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='37'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>ПФ заявление покупателя</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                            <a target='_blank' href={`Datalorepdf/${ПФ_Заявление_Покупателя}`}>Просмотреть</a>
                                            <a className='ms-3' download href={`Datalorepdf/${ПФ_Заявление_Покупателя}`}>Скачать</a>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='38'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>Ручное планирование</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                            <a target='_blank' href={`Datalorepdf/${Ручное_Планирование}`}>Просмотреть</a>
                                            <a className='ms-3' download href={`Datalorepdf/${Ручное_Планирование}`}>Скачать</a>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='39'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>Создание сотрудника и влияние реквизитов</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                            <a target='_blank' href={`Datalorepdf/${Создание_Сотрудника_И_Влияние_Реквизитов}`}>Просмотреть</a>
                                            <a className='ms-3' download href={`Datalorepdf/${Создание_Сотрудника_И_Влияние_Реквизитов}`}>Скачать</a>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey='40'>
                                        <Accordion.Header className='VR_Datalore_Header VR_Accordion_Item'>Установка цен</Accordion.Header>
                                        <Accordion.Body className='VR_Datalore_ButtonGroup'>
                                           <div>
                                                <p className='mb-3 ms-2'>Руководство пользователя по Установке Цен на товары</p>

                                                <div>
                                                    <a className='ms-2'  target='_blank' href={`Datalorepdf/${установка_Цен}`}>Просмотреть</a>
                                                    <a className='ms-3' download href={`Datalorepdf/${установка_Цен}`}>Скачать</a>
                                                </div>
                                           </div>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    

                                    

                                                                                                     
                                </Accordion>                                
                                                                                                           
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey='1'>
                            <Accordion.Header className='VR_All_Header_Accordion'>Полезные советы</Accordion.Header>
                            <Accordion.Body>Ссылка на скачивание</Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </Container>
        </>
    )
}

export default observer(DataloreContent)