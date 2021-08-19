import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroe-targeta',
  templateUrl: './heroe-targeta.component.html',
  styles: [
  ]
})
export class HeroeTargetaComponent implements OnInit {

  @Input('item') item! : Heroe;

  constructor() { }

  ngOnInit(): void {
  }

}
