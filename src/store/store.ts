import { makeAutoObservable, makeObservable } from "mobx";
import { IUser } from "../models/IUser";
import AuthService from "../services/AuthService";
import axios from "axios";
import { AuthResponce } from "../models/response/AuthResponse";
import { API_TASKS, API_URL } from "../http";
import { itilEmail } from "../models/itil/itilAllEmailModels";
import UserService from "../services/UserService";
// import { TaskItemResponse } from "../models/response/TaskItemResponse";

export default class Store {
    user = {} as IUser;
    isAuth = false;
    isLoading = false;
    aa6Success = false;
    
    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: IUser) {
        this.user = user;
    }

    setLoading(bool: boolean) {
        this.isLoading = bool;
    }

    setAa6Success(bool: boolean) {
        this.aa6Success = bool
    }

    async login(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password);

            console.log(response);

            localStorage.setItem('token', response.data.accesToken);

            this.setAuth(true);
            this.setUser(response.data.user);

            return response.status
        } catch (e) {
            console.log(e);
        }   
    }

    async registration(email: string, password: string) {
        try {
            const response = await AuthService.registration(email, password);
            console.log(response);
            this.setAuth(true);
            this.setUser(response.data.user);

            return response.status
        } catch (e) {
            console.log(e);
        }   
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            
            localStorage.removeItem('token');
            localStorage.removeItem('userEmail');
            localStorage.removeItem('UserName');
            localStorage.removeItem('company');
            localStorage.removeItem('UserUID');
            localStorage.removeItem('admin');

            this.setAuth(false);
            this.setUser({} as IUser);
        } catch (e) {
            console.log(e);
        }   
    }

    async checkAuth() {
        this.setLoading(true);
        try {
            const response = await axios.get<AuthResponce>(`${API_URL}/refresh`, {withCredentials: true})
            // console.log(response);
            localStorage.setItem('token', response.data.accesToken);
            localStorage.setItem('admin', String(this.user.admin))
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch(e) {
            console.log(e);
        } finally {
            this.setLoading(false);
        }
    }

    async checkAa6Success(email: string) {
        this.setLoading(true)

        try {
            const response = await UserService.getAA6Users(email)

            console.log(response);            

            if (response.data[0]) {
                this.setAa6Success(true)
                // console.log(true);                
            } 
        } catch (e) {
            console.log(e);            
        } finally {
            this.setLoading(false)
        }
    }
}