import { Injectable } from '@angular/core';
import { Cita } from '../modelo/citas';


@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private _citas:Cita[] = [
    new Cita (1, ' Lo peor que hacen los malos es obligarnos a dudar de los buenos.', 'Jacinto Benavente'),
    new Cita (2, 'Cada día sabemos más y entendemos menos.', 'Albert Einstein'),
    new Cita (3, 'El dinero no puede comprar la vida.', 'Bob Marley'),
    new Cita (4, 'Vivir sola es como estar en una fiesta donde nadie te hace caso.', 'Marilyn Monroe'),
    new Cita (5, 'Lo que no te mata, te hace más fuerte.', 'Friedrich Nietzsche'),
    new Cita (6, 'Estoy recién pisando las nubes, para lograr soñar terminarlo.', 'Gabriela López')
  ]

  constructor() {
   }

  agregarCita(cita: Cita) {
    cita.id =Date.now()
    this._citas.push(cita);
  }

  getCitas(): Cita[]  {
    console.dir(this._citas)
    return this._citas
  }

  private getIndice(cita:Cita):number {
    return this._citas.findIndex(citita => citita.id === cita.id)
  }

  deleteCita(cita:Cita) {
    const indice = this.getIndice(cita)
    if( indice >= 0) {
      this._citas.splice(indice, 1)
    }    
  }

  editar(cita:Cita) {
    const indice = this.getIndice(cita)
    if( indice >= 0) {
      this._citas[indice] = cita
    }    
  }

  getRandomCita() {
    const randomIndex = Math.floor(Math.random() * this._citas.length);
    return {
      ...this._citas[randomIndex]
    };
  }
  
}
