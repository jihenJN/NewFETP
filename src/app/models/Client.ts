export class Client {

    id:string;
    name:string;
    phone:number;
    address:string;
    email:string;

    
    constructor() {
      this.id='';
      this.name= '';
      this.phone=0;
      this.address= '';
      this.email='';
    }
}

export interface ClientDto {
  id:string;
  name:string;
  phone:number;
  address:string;
  email:string;
}