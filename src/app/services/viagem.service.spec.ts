import { TestBed } from '@angular/core/testing';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ViagemService {

  url = '//etec-boa-viagem-api.herokuapp.com/viagens';

  constructor(private httpClient: HttpClient) {}

  listarTodas():Observable<any> {
    return this.httpClient.get(this.url);
  }
}

describe('ViagemService', () => {
  let service: ViagemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViagemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
