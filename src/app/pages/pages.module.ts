import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { PrimengModule } from '../primeng/primeng.module';



@NgModule({
  declarations: [
    CardComponent,
    DetailsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,

  ],
  exports:[
    CardComponent,
    DetailsComponent,
    HomeComponent
  ]
})
export class PagesModule { }
