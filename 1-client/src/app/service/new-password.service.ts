import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { enviroment } from '../../environments/environment';

import { MailRespone as PasswordRespone } from '../modules/models/Mail';

@Injectable({
  providedIn: 'root'
})
export class NewPasswordService {
  headers = new HttpHeaders()
    .set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) { }

  forgotPassword(email: string): Observable<PasswordRespone> {
    return this.http.post<PasswordRespone>(`${enviroment.rootURL}/forgot-password`, email, { headers: this.headers });
  }

  resetPassword(passwords: string): Observable<PasswordRespone> {
    let token: string;
    this.activatedRoute.queryParams.subscribe(params => {
        token = params['token'];
    });

    return this.http.post<PasswordRespone>(`${enviroment.rootURL}/reset-password?token=${token}`, passwords, { headers: this.headers });
  }
}
