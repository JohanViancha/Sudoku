export class Repetidos {
    
    constructor(private _cuadricula:number, private _valor:number, private _posicion:number){
        this._cuadricula = _cuadricula;
        this._valor = _valor;
        this._posicion = _posicion;
    }

    get valor(){
        return this._valor;
    }

    get posicion(){
        return this._posicion;
    }

    get cuadricula(){
        return this._cuadricula;
    }
}