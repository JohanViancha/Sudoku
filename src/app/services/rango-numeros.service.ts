import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RangoNumerosService {
  
  
  numerosRangos:number[][];
  constructor() {
    this.numerosRangos = new Array();
    this.generarNumeros();
   }

  generarNumeros(){
    for (let i = 0; i <=8 ; i++) {
        for (let j = 0; j <=8; j++) {        
          this.numerosRangos[i][j] = j;
        }     
    }
  }


}
