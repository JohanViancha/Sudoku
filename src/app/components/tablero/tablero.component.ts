import { Component, OnInit, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Repetidos } from 'src/app/models/Repetidos';
import { MensajesService } from 'src/app/services/mensajes.service';


@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {
  formSudoku: FormGroup;
  numerosColumna:any[][] = [[0,1,2],[3,4,5],[6,7,8]];
  numerosFila:any[][] = [[0,3,6],[1,4,7],[2,5,8]];
  constructor(private fb:FormBuilder, private _serviceMensaje:MensajesService) {
    this.formSudoku = fb.group({
      cuadri1cuado1:['', Validators.required],
      cuadri1cuado2:['',Validators.required],
      cuadri1cuado3:['',Validators.required],
      cuadri1cuado4:['',Validators.required],
      cuadri1cuado5:['',Validators.required],
      cuadri1cuado6:['',Validators.required],
      cuadri1cuado7:['',Validators.required],
      cuadri1cuado8:['',Validators.required],
      cuadri1cuado9:['',Validators.required],

      cuadri2cuado1:['',Validators.required],
      cuadri2cuado2:['',Validators.required],
      cuadri2cuado3:['',Validators.required],
      cuadri2cuado4:['',Validators.required],
      cuadri2cuado5:['',Validators.required],
      cuadri2cuado6:['',Validators.required],
      cuadri2cuado7:['',Validators.required],
      cuadri2cuado8:['',Validators.required],
      cuadri2cuado9:['',Validators.required],

      cuadri3cuado1:['',Validators.required],
      cuadri3cuado2:['',Validators.required],
      cuadri3cuado3:['',Validators.required],
      cuadri3cuado4:['',Validators.required],
      cuadri3cuado5:['',Validators.required],
      cuadri3cuado6:['',Validators.required],
      cuadri3cuado7:['',Validators.required],
      cuadri3cuado8:['',Validators.required],
      cuadri3cuado9:['',Validators.required],

      cuadri4cuado1:['',Validators.required],
      cuadri4cuado2:['',Validators.required],
      cuadri4cuado3:['',Validators.required],
      cuadri4cuado4:['',Validators.required],
      cuadri4cuado5:['',Validators.required],
      cuadri4cuado6:['',Validators.required],
      cuadri4cuado7:['',Validators.required],
      cuadri4cuado8:['',Validators.required],
      cuadri4cuado9:['',Validators.required],

      cuadri5cuado1:['',Validators.required],
      cuadri5cuado2:['',Validators.required],
      cuadri5cuado3:['',Validators.required],
      cuadri5cuado4:['',Validators.required],
      cuadri5cuado5:['',Validators.required],
      cuadri5cuado6:['',Validators.required],
      cuadri5cuado7:['',Validators.required],
      cuadri5cuado8:['',Validators.required],
      cuadri5cuado9:['',Validators.required],

      cuadri6cuado1:['',Validators.required],
      cuadri6cuado2:['',Validators.required],
      cuadri6cuado3:['',Validators.required],
      cuadri6cuado4:['',Validators.required],
      cuadri6cuado5:['',Validators.required],
      cuadri6cuado6:['',Validators.required],
      cuadri6cuado7:['',Validators.required],
      cuadri6cuado8:['',Validators.required],
      cuadri6cuado9:['',Validators.required],

      cuadri7cuado1:['',Validators.required],
      cuadri7cuado2:['',Validators.required],
      cuadri7cuado3:['',Validators.required],
      cuadri7cuado4:['',Validators.required],
      cuadri7cuado5:['',Validators.required],
      cuadri7cuado6:['',Validators.required],
      cuadri7cuado7:['',Validators.required],
      cuadri7cuado8:['',Validators.required],
      cuadri7cuado9:['',Validators.required],

      cuadri8cuado1:['',Validators.required],
      cuadri8cuado2:['',Validators.required],
      cuadri8cuado3:['',Validators.required],
      cuadri8cuado4:['',Validators.required],
      cuadri8cuado5:['',Validators.required],
      cuadri8cuado6:['',Validators.required],
      cuadri8cuado7:['',Validators.required],
      cuadri8cuado8:['',Validators.required],
      cuadri8cuado9:['',Validators.required],

      cuadri9cuado1:['',Validators.required],
      cuadri9cuado2:['',Validators.required],
      cuadri9cuado3:['',Validators.required],
      cuadri9cuado4:['',Validators.required],
      cuadri9cuado5:['',Validators.required],
      cuadri9cuado6:['',Validators.required],
      cuadri9cuado7:['',Validators.required],
      cuadri9cuado8:['',Validators.required],
      cuadri9cuado9:['',Validators.required],
    }) 
  }

  

  ngOnInit(): void {
    console.log(this.formSudoku.controls);
 }

  async revisarForm(){
   const numberInput = await this.revisarInputVacio();
   if(numberInput.length>0){
      await this.setearError(numberInput,'vacio');
      this._serviceMensaje.mostrarMensaje('Error','Hay error en el sudoku!','warning').then(()=>{
        setTimeout(()=>{
          this.quitarColor(numberInput);
        },3000)
      });
   }

   await this.setearError(this.revisarCuadriculaRepetida(),'repetido');;
   await this.setearError(this.revisarCuadriculaFila(),'repetido');

  }

  async revisarInputVacio(){
      let inputVacios:number[]=[];
      Object.values(this.formSudoku.controls).forEach((element,index)=>{
        if(!element.value){
          inputVacios.push(index);
        }
      })

      return await inputVacios;
  }

  revisarCuadriculaFila(){
    let limite = 0;
    let inicio = 0;
    let array:number[] = [];
    let repetidos:Repetidos[] = [];
    let fila = 1;

    Object.values(this.formSudoku.controls).forEach( element =>{
      array.push(element.value);
    });

    for (let i = 0; i <= 8; i++) {
      limite = inicio;

      //Limita el array por un rango de filas
      let limitArray:any = array.slice(limite,limite+=3).concat(array.slice(limite+=6,limite+=3).concat(array.slice(limite+=6,limite+=3)));

      //Se recorre cada posición del array limite
      limitArray.forEach((element:any,index:any)=>{   
        let posicionRepetido = -1;
        let posicionToArray = -1;
  
        posicionRepetido = limitArray.findIndex((numero:any,posicion:any)=>{
          if(numero === element && posicion !== index){
            let cuadricula = fila+this.retornarCuadricula(posicion,'columna');
            posicionToArray = ((cuadricula-1)*9)+(3*this.retornarCuadricula(i,'fila'))+(this.retornarCuadricula(posicion ,'fila'));

            if(repetidos.reduce((sum,element)=>element.posicion===posicionToArray?sum++:sum,0) === 0){
              return index;
            }
            if(!repetidos.some(repetido=> repetido.posicion == posicionToArray)){

                return posicion;
            }
          } 
       });
      
          if(element && posicionRepetido>=0){       
            let cuadricula = fila+this.retornarCuadricula(posicionRepetido,'columna');
            let rep:Repetidos = new Repetidos(cuadricula, element,((cuadricula-1)*9)+(3*this.retornarCuadricula(i,'fila'))+(this.retornarCuadricula(posicionRepetido ,'fila')));
            repetidos.push(rep);     
          }
        
    
      });
     
        //Cuando la fila está en un multiplo de 3
        if((i+1) % 3 == 0){ 
          if((i+1)==6){
            inicio = 51;
            fila = 7;
          }else{
            if((i+1)==3){
              fila = 4;
            }
            inicio=limite-3;        
          }     
        }
        inicio+=3;
    }

    console.log(repetidos);
    return repetidos;
  }

   revisarCuadriculaRepetida(){
    let limitMax = 0;
    let limitMin = 0;
    let array:number[] = [];
    let repetidos:Repetidos[] = [];
    Object.values(this.formSudoku.controls).forEach( element =>{
      array.push(element.value);
    });

    for (let i = 0; i <= 8; i++) {
      limitMin=limitMax;
      limitMax+=9;
      let limitArray = array.slice(limitMin,limitMax);

      limitArray.forEach((element,index)=>{
        const numeroRepetido = limitArray.find((numero,i)=> (numero === element && i !== index));
        if(numeroRepetido){
            let rep:Repetidos = new Repetidos(i+1, numeroRepetido,limitMin+index);
            repetidos.push(rep);
        }
      });
    }

    return repetidos;

  }

  async setearError(number:any[],tipoError:string){
    for (let index = 0; index < number.length; index++) {
      if(tipoError === 'vacio'){
        this.formSudoku.get(Object.keys(this.formSudoku.controls)[number[index]])?.setErrors({vacio:true});
      }else{
        this.formSudoku.get(Object.keys(this.formSudoku.controls)[number[index].posicion])?.setErrors({repetido:true});
      }
    }   
  }

  quitarColor(number:number[]){
    for (let index = 0; index < number.length; index++) {  
      this.formSudoku.get(Object.keys(this.formSudoku.controls)[number[index]])?.setErrors({vacio:false});
    }   
  }

  ordenarArray(x:any, y:any){
    return x.valor.localeCompare(y.valor);
  }

  retornarCuadricula(posicion:number, tipo:string){
    let num = 0;

    let numeros = tipo==='fila'?this.numerosFila:this.numerosColumna;
    numeros.forEach((element,index)=>{
      if(element.findIndex((numero:any)=>numero==posicion)>=0){
        num = index;
      }
    })

    return num;
  }



}
