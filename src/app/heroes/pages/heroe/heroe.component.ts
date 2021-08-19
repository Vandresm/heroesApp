import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap,tap } from 'rxjs/operators';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {
 heroe!: Heroe;
 
  constructor(private route: ActivatedRoute, private heroeService: HeroesService) { 
    this.route.params.subscribe( data=>{
      console.log(data.id)
    } );
  }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({id}) => this.heroeService.verHeroe(id)),
      tap(console.log)

      ).subscribe(heroe => {
        this.heroe = heroe
      });
    
  }

}
