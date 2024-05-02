import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToggleChangeEventDetail } from '@ionic/angular';
import { IonToggleCustomEvent } from '@ionic/core';
import { ConfiguracionService } from '../servicios/configuracion.service';

@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.page.html',
  styleUrls: ['./configuraciones.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ConfiguracionesPage implements OnInit {

  eliminarRegistrosCitas:boolean = false

  constructor( private configuracionService:ConfiguracionService) { }

  ngOnInit() {
    console.log("ConfiguracionPage::ngOnInit")
    this.eliminarRegistrosCitas = this.configuracionService.eliminarRegistros()
  }

  onCambioEnEliminacionCita($event: IonToggleCustomEvent<ToggleChangeEventDetail<any>>) {
    //const ordenar = $event.detail.checked        
    this.configuracionService.setEliminarRegistros(this.eliminarRegistrosCitas)
  }
}

