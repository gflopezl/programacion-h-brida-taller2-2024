import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonFab,IonFabButton,IonCardContent, IonCardTitle, IonCardHeader,IonCard,IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircleOutline, settingsOutline } from 'ionicons/icons'
import { CommonModule } from '@angular/common';
import { CitaService } from '../servicios/citas.service';
import { Cita } from '../modelo/citas';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule,IonFab,IonFabButton,IonCardContent, IonCardTitle, IonCardHeader,IonCard,IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton,IonIcon,RouterModule],
})

export class HomePage implements OnInit {

  citaAleatoria!: Cita;

  constructor(private citaService: CitaService) {
    addIcons({
      settingsOutline,
      addCircleOutline
    })
  }
  ngOnInit(): void {
    this.cargarCitaAleatoria();  }
  
    cargarCitaAleatoria() {
      this.citaAleatoria = this.citaService.getRandomCita();
    }

}