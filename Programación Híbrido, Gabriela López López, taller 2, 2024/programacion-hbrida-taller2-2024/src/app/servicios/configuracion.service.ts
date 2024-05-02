import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {

  private _eliminar:boolean = false

  constructor() { }

  eliminarRegistros():boolean {
    return this._eliminar
  }

  setEliminarRegistros(_eliminar:boolean) {
    this._eliminar = _eliminar
  }
}
