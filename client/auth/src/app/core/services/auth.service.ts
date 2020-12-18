import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../Models/user';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private router:Router) { }

  login(user:User) : any{

  return this.http.post<User>(`${environment.api}/auth/login` , user);

  }

  register(user:User): Observable<any>{

    return this.http.post(`${environment.api}/auth/register` , user);

  }

  loguot(){
    localStorage.removeItem('token');
    this.router.navigate(['/events/guests']);
  }

  getToken(){
    return localStorage.getItem('token');

  }

  isLogesIn(){
    return !!localStorage.getItem('token');
  }


}
