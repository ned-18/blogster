import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { enviroment } from '../../environments/environment';

import { MailRespone as EmailVerificationRespone } from '../modules/models/Mail';

@Injectable({
  providedIn: 'root'
})
export class EmailVerificationService {
  headers = new HttpHeaders()
    .set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) { }

  emailVerification(): Observable<EmailVerificationRespone>{
    let token: string;
    this.activatedRoute.queryParams.subscribe(params => {
        token = params['token'];
    });

    return this.http.get<EmailVerificationRespone>(`${enviroment.rootURL}/verification?token=${token}`, { headers: this.headers });
  }
}

