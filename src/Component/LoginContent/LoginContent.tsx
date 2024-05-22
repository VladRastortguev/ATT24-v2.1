import { observer } from 'mobx-react-lite'
import React, { FC, useContext, useState } from 'react'

import '../LoginContent/LoginContent.css'
import { useLocation, useNavigate } from 'react-router-dom'

import { IconButton, Input, InputAdornment, TextField, Theme, ThemeProvider, createTheme, outlinedInputClasses, useTheme } from '@mui/material';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button } from 'react-bootstrap';
import { Context } from '../..';
import UserService from '../../services/UserService';

const LoginContent:FC = () => {
    const [singIn, setSingIn] = useState(true)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [emailReg, setEmailReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')

    const { store } = useContext(Context)

    const navigate = useNavigate()

    const location = useLocation()

    const body = document.body


    if (String(location.pathname) == '/' && !store.isAuth) {
        body.style.overflow = 'hidden'
        body.style.height = '100%'
    }


    async function validationPasswordLenght() {
        if (String(passwordReg).length < 5) {
            alert('Длина пароля должна составлять не меньше 5')
            return 2;
        } else {
            return 1;
        }
    }

    async function setLocalUsername(email:string) {
        const userRes = await UserService.getItilUser()

        userRes.data.map((item) => {
            if (String(email) == item.email) {
                localStorage.setItem('UserName', item.name)
                localStorage.setItem('UserUID', item.uid)
                return                    
            }
        })        
    }

    async function setLocalCompany() {
        const companyRes = await UserService.getCompanyItil()


        companyRes.data.map ((item) => {
            localStorage.setItem('company', item.company)
        })
    }

    async function checkNormalizeAuth() {
        const res = await store.login(email, password)                

        if (String(res) == '200') { 
            localStorage.setItem('userEmail', email)

            await setLocalUsername(email)
            await setLocalCompany()

            navigate('/')
        } else {
            alert('Неправильный логин или пароль!')
        }
    }

    async function checkNormalizeReg() {
        let validationRegIndex = await validationPasswordLenght()
        
        if (validationRegIndex == 1) {
            const res = await store.registration(emailReg, passwordReg)

            if (String(res) == '200') { 
                localStorage.setItem('userEmail', emailReg)
                navigate('/')
            } else {
                alert('Неправильный логин или пароль!')
            }
        } else if (validationRegIndex == 2) {
            setPasswordReg('')
            return
        }        
    }
    
    const customTheme = (outerTheme: Theme) => createTheme({
        palette: {
            mode: outerTheme.palette.mode,
        },
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        '& .MuiInputBase-input': {
                            color: '#fff'
                        },
                        '& .MuiInputLabel-root': {
                            color: '#fff'
                        },
                        // '--TextField-brandBorderColor': '#E0E3E7',
                        '--TextField-brandBorderColor': '#fff',
                        // '--TextField-brandBorderHoverColor': '#B2BAC2',
                        '--TextField-brandBorderHoverColor': '#fff',
                        // '--TextField-brandBorderFocusedColor': '#6F7E8C',
                        '--TextField-brandBorderFocusedColor': '#fff',
                        '& label.Mui-focused': {
                            color: 'var(--TextField-brandBorderFocusedColor)',
                        },
                    },
                },
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    notchedOutline: {
                        borderColor: 'var(--TextField-brandBorderColor)',
                    },
                    root: {
                        [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                            borderColor: 'var(--TextField-brandBorderHoverColor)',
                        },
                        [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                            borderColor: 'var(--TextField-brandBorderFocusedColor)',
                        },
                    },
                },
            },
            MuiFilledInput: {
                styleOverrides: {
                    root: {
                        '&::before, &::after': {
                            borderBottom: '2px solid var(--TextField-brandBorderColor)',
                        },
                        '&:hover:not(.Mui-disabled, .Mui-error):before': {
                            borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
                        },
                        '&.Mui-focused:after': {
                            borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
                        },
                    },
                },
            },
            MuiInput: {
                styleOverrides: {
                    root: {
                        '&::before': {
                            borderBottom: '2px solid var(--TextField-brandBorderColor)',
                        },
                        '&:hover:not(.Mui-disabled, .Mui-error):before': {
                            borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
                        },
                        '&.Mui-focused:after': {
                            borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
                        },
                    },
                },
            },
        },
    });

    const ourthTheme = useTheme()
    

    return (
        
        <div className='VR_loginContent_AllHeader'>
            <div className='VR_loginContent_NoAllHeader'>

            <div className='VR_loginContainer'>
                <div className='VR_loginPodContainer'>                
                    <div className='VR_loginCheckBox'>
                        <ul>
                            <li><a className={`VR_LoginLink ${singIn ? 'VR_singInActive' : 'VR_singUpActive'} `} onClick={() => setSingIn(true)}>Вход</a></li>
                            <li><a className={`VR_LoginLink ${singIn ? 'VR_singUpActive' : 'VR_singInActive'} `} onClick={() => setSingIn(false)}>Регистрация</a></li>
                        </ul>
                    </div>

                    {singIn ? (
                        <div className='VR_SingIn'>                                                
                            <div className='VR_SingInContainer'>
                                <ThemeProvider theme={customTheme(ourthTheme)}>
                                    <TextField 
                                        className='VR_Email_Input' 
                                        id="standard-basic" 
                                        label="Email" 
                                        variant="standard"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} 
                                    />                                

                                    <TextField 
                                        className='VR_Password_Input mt-3'
                                        id='standart-basic' 
                                        label='Password' 
                                        variant='standard' 
                                        type='password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}                                 
                                    />
                                </ThemeProvider>

                                <div className='VR_CreateBtn'>
                                    <Button 
                                        onClick={() => checkNormalizeAuth()} 
                                        variant="outline-light" 
                                        className='px-5 mb-4 VR_Button_Login'>Вход</Button>
                                </div>                                            
                            </div>
                        </div>
                    ) : (
                        <div className='VR_SingIn'>                                                
                            <div className='VR_SingInContainer'>
                                <ThemeProvider theme={customTheme(ourthTheme)}>
                                    <TextField 
                                        className='VR_Email_Input' 
                                        id="standard-basic" 
                                        label="Email" 
                                        variant="standard"
                                        value={emailReg}
                                        onChange={(e) => setEmailReg(e.target.value)} 
                                    />                                

                                    <TextField 
                                        className='VR_Password_Input mt-3'
                                        id='standart-basic' 
                                        label='Password' 
                                        variant='standard' 
                                        type='password'
                                        value={passwordReg}
                                        onChange={(e) => setPasswordReg(e.target.value)}                                 
                                    />
                                </ThemeProvider>

                                <div className='VR_CreateBtn'>
                                    <Button 
                                        onClick={() => checkNormalizeReg()} 
                                        variant="outline-light" 
                                        className='px-5 mb-4 VR_Button_Login'>Регистрация</Button>
                                </div>                                            
                            </div>
                        </div>
                    )}

                </div>
                </div>
            </div>
        </div>
    )
}

export default observer(LoginContent)