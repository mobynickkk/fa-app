import { TeacherRepositoryMock } from "../repository/TeacherRepositoryMock";
import {AuthService} from "../service/AuthService";

export const teacherRepository = new TeacherRepositoryMock();
export const accountRepository = new AccountRepository();
export const authService = new AuthService();
