import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CalculoCdbResponse } from '../models/CalculoCdb';

@Injectable({
  providedIn: 'root'
})
export class CalculoCdbService {

  constructor(private http: HttpClient){}

  protected UrlServiceV1: string = "https://avaliacao-b3-cxd4b2hrc4etc9hz.brazilsouth-01.azurewebsites.net/api/";

  calcularCdb(valorInvestido: number, prazoMeses: number) {
    return this.http.post(`${this.UrlServiceV1}Cdb/calcular`, {ValorInvestido: valorInvestido, PrazoMeses: prazoMeses})
  };
}
