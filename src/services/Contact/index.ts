import { api } from "../../utils/api";

type CreateSchema = {
  email: string;
  number: string;
  city: string;
  description: string;
}

export default class ContactService {
  public async create(data: CreateSchema){
    await api.post('/contacts', data);
    console.log("Enviado")
  }
}