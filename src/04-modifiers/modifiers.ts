class User {

    readonly MAX_CONNECTINS: number;
    
    //Parameter properties
    constructor(protected id:number,protected firstName:string,protected email?:string){ 
        this.MAX_CONNECTINS = 3;
    }

    public login(){
        console.log('>> login');
    }

}

class Teacher extends User{
    private _tId:string;
    constructor(id:number, firstName:string, tId:string){
        super(id,firstName);
        this._tId = tId;
    }
    get tId(){
        return this._tId;
    }

    set tId(tId : string){
        this.tId = tId;
    }
}

class Student extends User{
    private sId:string;
    constructor(id:number, firstName:string, sId:string,email?:string){
        super(id,firstName,email);
        this.sId = sId;
    }
    
}

let luis = new Teacher(1,'Juanito','Teacher ID 01');
let esmeralda = new Student(2,'Esmeralda','S01');

luis.tId = 'Teacher ID 1005';
console.log(luis.tId);
luis.login();