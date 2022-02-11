import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OeuvresService } from 'src/app/service/oeuvres.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage {
  oeuvres: any;
  loading = true;

  constructor(route: ActivatedRoute, private oeuvresService: OeuvresService) { 
    const id = parseInt(route.snapshot.params.id, 10);
    this.load(id);
  }

  load(id: number) {
    this.oeuvresService.getSolo(id).subscribe(data=>{
      this.oeuvres = data;
      this.loading = false;
        }, () => {
            this.loading = false;
    })
  }

}
