import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Oeuvres } from '../../models/oeuvres';
import { OeuvresService } from 'src/app/service/oeuvres.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.page.html',
  styleUrls: ['./ajout.page.scss'],
})
export class AjoutPage {
  oeuvres = new Oeuvres();

  constructor(private router: Router, private toastCtrl: ToastController, private oeuvresService: OeuvresService) { }

  save() {
    this.oeuvresService.add(this.oeuvres).subscribe(async () => {
      const toast = await this.toastCtrl.create({
        message: 'Votre oeuvre à été ajoutée',
        duration: 5000,
        color: 'success',
    });
    toast.present();
    this.router.navigate(['/list']);
    })
  }

}
