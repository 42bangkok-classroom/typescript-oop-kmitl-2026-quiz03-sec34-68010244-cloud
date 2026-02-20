export class User {
    firstname:string = '';
    lastname:string = '';
    private age:number = 0
    static BIRTH_YEAR = 2000


    setFirstname(firstname:string){
        this.firstname = firstname
    }

    setLastname(lastname:string){
        this.lastname = lastname
    }

    getFullName() {
        return  (`${this.firstname} ${this.lastname}`).trim()
    }

    setAge(age:number) {
        this.age = age
    }

    getAge(){
        return this.age
    }

    
}
