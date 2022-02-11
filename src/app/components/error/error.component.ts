import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {

  @Input() message = 'Oops, quelque chose c\'est mal passé, merci de réessayer plus tard';

  constructor() { }

  ngOnInit() {}

}
