import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  postRegister(register: any) {
    return this.http.post('http://localhost:8080/api/register', register);
  }

  getAllRegisters() {
    return this.http.get('http://localhost:8080/api/register');
  }

  getRegisterById(id: string) {
    return this.http.get(`http://localhost:8080/api/register/${id}`);
  }

  updateRegister(id: string, register: any) {
    return this.http.put(`http://localhost:8080/api/register/${id}`, register);
  }

  deleteRegister(id: string) {
    return this.http.delete(`http://localhost:8080/api/register/${id}`);
  }

}
