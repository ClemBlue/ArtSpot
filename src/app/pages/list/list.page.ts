import { Component } from '@angular/core';
import { OeuvresService } from 'src/app/service/oeuvres.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage {
  oeuvres:Array<any>;
  loading = true;

  constructor(private oeuvreService: OeuvresService) { 
    this.load();
  }

  load() {
    this.oeuvreService.getAll().subscribe(data=>{
      this.oeuvres = data;
      this.loading = false;
    }, () => {
        this.loading = false;
    })
  }

}
