class User {
    id:number;
    firstName:string;
    lastName?:string;
    email:string;

    constructor(id:number, firstName:string, email?:string){
        this.id = id;
        this.firstName = firstName;
    }

    login(){
        console.log('>> login');
    }

}

class Teacher extends User{
    tId:string;
    constructor(id:number, firstName:string, tId:string){
        super(id,firstName);
        this.tId = tId;
    }
}

class Student extends User{
    sId:string;
    constructor(id:number, firstName:string, sId:string,email?:string){
        super(id,firstName,email);
        this.sId = sId;
    }
}

let luis = new Teacher(1,'Juanito','T01');
let esmeralda = new Student(2,'Esmeralda','S01');

console.log(luis.firstName);
luis.login();