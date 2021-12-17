import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
import { Repetidos } from '../models/Repetidos';


@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor() { }

  mostrarMensaje(title:string, mensaje:string, tipo:any):Promise<any>{
    return new Promise((resolver, reject)=>{
      Swal.fire({
        title: title,
        text: mensaje,
        icon: tipo,
      }).then(()=>{ 
        resolver(true);
      })
    });  
  }

  mostrarMensajeArray(numerosRepetidos:Repetidos[]):Promise<any>{
    let titulo = 'Campos repetidos';
    let mensaje = '';
    return new Promise((resolver, reject)=>{
      numerosRepetidos.forEach(repetido=>{
        mensaje += `
        El numero ${repetido.valor} ubicado en la cuadricula ${repetido.cuadricula} está repetido en la posición ${repetido.posicion}
        `
      });

      Swal.fire({
        title: titulo,
        text: mensaje,
        icon: 'warning',
      }).then(()=>{ 
        resolver(true);
      })


    })
  }
}
