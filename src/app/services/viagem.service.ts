import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViagemService {

url = "//etec-boa-viagem.api.herokuapp.com/viagens";
  constructor(private HttpClient: HttpClient) { }

  listarTodas(): Observable<any> {
    return this.httpClient.get<>(this.url);
  }
}

