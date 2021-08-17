import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  
  exports:[
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
