import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Numero } from '../models/numero';
declare var M:any;

@Injectable({
  providedIn: 'root'
})
export class NumeroService {
  readonly URL = 'http://localhost:3000/api/numeros';
  selectedNumero: Numero;
  allNumeros: Numero[];

  constructor(public http: HttpClient) { 
    this.selectedNumero = new Numero();
  }
  
  getNumeros(){
    return this.http.get(this.URL);
  }

  intento(){
    let acierto = false;
    for (let x = 0; x < this.allNumeros.length; x++){
      if(this.allNumeros[x].value == this.selectedNumero.value){
        acierto = true;
        this.selectedNumero = this.allNumeros[x];
      }   
    }

    if(acierto){
      switch (this.selectedNumero.tipoPremio){
        case 1:
          M.toast({html: "<br>¡¡¡¡TE HA TOCADO EL PREMIO GORDO!!!<br>1g de Flor a Elegir. <br>2 Cervezas Amnesia 0.5l. <br> Librillo Papel de Cáñamo.<br>Caja de Galletas de Cáñamo <br>10 Piruletas Cannabis. <br><br>", time: 5000});
          break;
        case 2:
          M.toast({html: "<br> TIENES PREMIO:<br> " +
          "<br>Bolso Verde. <br>" +
          "<br>Paquete de Chicles. <br>" + 
          "<br>Sobre de Galletas. <br>" + 
          "<br>2 Piruletas Cannabis.  <br><br>", time: 5000});
          break;
        case 3:
          M.toast({html: "<br>TIENES PREMIO: <br> " +
          "<br>Paraguas Cannabis Store Verde. <br>" +
          "<br>Bebida Energética Amnesia. <br>" + 
          "<br>Sobre de Galletas. <br>" + 
          "<br>2 Piruletas Cannabis.  <br><br>", time: 5000});
          break;
        case 4:
          M.toast({html: "<br>TIENES PREMIO:<br> " +
          "<br>Té Verde Energizante White Widow. <br>" +
          "<br>Porta L's verde. <br>" + 
          "<br>Sobre de Galletas. <br>" + 
          "<br>2 Piruletas Cannabis.  <br><br>", time: 5000});
          break;
        case 6:
          M.toast({html: "<br>TIENES PREMIO:<br> " +
          "<br>Pitillera Cannabis Store Verde. <br>" +
          "<br>Blunt Original. <br>" + 
          "<br>Sobre de Galletas. <br>" + 
          "<br>2 Piruletas Cannabis.  <br><br>", time: 5000});
          break;
      }
    this.selectedNumero = new Numero();
    }else{
      M.toast({html: "<br> Lo siento, otra vez será... <br><br>", time: 5000});
    }
  }
}
