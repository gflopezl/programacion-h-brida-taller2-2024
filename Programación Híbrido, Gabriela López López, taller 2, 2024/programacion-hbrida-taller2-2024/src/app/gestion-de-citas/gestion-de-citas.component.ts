import { Component, OnInit } from '@angular/core';
import { FormularioCitasComponent } from '../formulario-citas/formulario-citas.component';
import { ListaDeCitasComponent } from '../lista-de-citas/lista-de-citas.component';
import { Cita } from '../modelo/citas';
import { CitaService } from '../servicios/citas.service';
import { ConfiguracionService } from '../servicios/configuracion.service';


@Component({
  selector: 'app-gestion-de-citas',
  templateUrl: './gestion-de-citas.component.html',
  styleUrls: ['./gestion-de-citas.component.scss'],
  standalone: true,
  imports: [FormularioCitasComponent,ListaDeCitasComponent]
})
export class GestionDeCitasComponent  implements OnInit {
  citas:Cita[] = [];
  eliminarCitasCelebres:boolean = false
  listaDeCitasComponent: any;

  constructor(
    private citaService:CitaService,
    private configuracionService:ConfiguracionService
  ) { }

  ngOnInit(): void {
    console.log("GestionDeCitasComponent::ngOnInit")
  }

  ngAfterViewInit(): void {
    console.log("GestionDeCitasComponent::ngAfterViewInit");
    if (this.listaDeCitasComponent) {
      this.listaDeCitasComponent.ionViewWillEnter();
    }
  }

  ionViewWillEnter():void {
    console.log("GestionDeCitasComponent::ionViewWillEnter")
    this.actualizar()
  }

  actualizar() {
    console.log("actualizando...");
    this.eliminarCitasCelebres = this.configuracionService.eliminarRegistros();
    this.citas = this.citaService.getCitas(); 
  }

  agregarCita(cita: { texto: string; autor: string }) {
    const nuevaCita = new Cita(this.citas.length + 1, cita.texto, cita.autor);
    this.citas.push(nuevaCita);
  }

  onCitaChange(c: Cita) {
    this.citaService.editar(c)
    this.actualizar() 
  }
}
