import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviroment } from '../../environments/environment';

import { Mail, MailRespone } from '../modules/models/Mail';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  headers = new HttpHeaders()
    .set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  // Send mail
  sendEmail(mail: Mail): Observable<MailRespone> {
    return this.http.post<MailRespone>(`${enviroment.rootURL}/contact-me`, mail, { headers: this.headers });
  }
}
