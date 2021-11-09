export class SignUpInfo{
    username: string;
    email: string;
    password: string;
    lastName: string;
    firstName: string;
    patronymic: string;
    role: string[];

    constructor(username: string, email: string, password: string, lastName: string, firstName: string, patronymic: string){
        this.username = username;
        this.email = email;
        this.firstName = firstName;
        this.password = password;
        this.lastName = lastName;
        this.patronymic = patronymic;
        this.role = ['user'];
    }

}