import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NumeroService } from 'src/app/services/numero.service';
import { Numero } from '../../models/numero';
declare var M:any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public service: NumeroService) { }

  ngOnInit(): void {
    this.getNumeros();
  }
  
  intento(form: NgForm){
    M.toast({html: 'Has seleccionado el número ' +  this.service.selectedNumero.value});
   
    this.service.intento();
  }

  getNumeros(){
    this.service.getNumeros()
      .subscribe(res =>{
        this.service.allNumeros = res as Numero[];
        console.log(res);
      });
  }

}
