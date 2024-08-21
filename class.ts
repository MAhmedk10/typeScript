class UserProfile {
   protected name:string;
   protected email:string;
   protected password:string | number;
   protected username:string;

    constructor(name:string,password:string|number,){
        this.name = name
        this.password = password
        this.username = name + name.length
        this.email = `${this.name + name.length}@gmail.com`
    }
}

let User1 = new UserProfile("Muhammad Ahmed",101323)
console.log(User1)