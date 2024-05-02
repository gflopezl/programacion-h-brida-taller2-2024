import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-formulario-citas',
  templateUrl: './formulario-citas.component.html',
  styleUrls: ['./formulario-citas.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})


export class FormularioCitasComponent implements OnInit {
  textoCita: string = ""; 
  autorCita: string = ""; 

  @Output() onCitaAgregada = new EventEmitter<{ texto: string, autor: string }>();

  constructor() {}

  ngOnInit() {}

  agregarCita() {
    if (this.textoCita && this.autorCita) {
      this.onCitaAgregada.emit({
        texto: this.textoCita,
        autor: this.autorCita
      });
      this.textoCita = "";
      this.autorCita = "";
    }
  }
}