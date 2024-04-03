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

  public async findMany(){
    const response = await api.get('/contacts');
    return response.data;
  }

  public async findById(id: string){
    const response = await api.get(`/contacts/${id}`)
    return response.data;
  }

}