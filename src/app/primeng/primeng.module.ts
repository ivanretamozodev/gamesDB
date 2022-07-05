import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {MenubarModule} from 'primeng/menubar';
import {PaginatorModule} from 'primeng/paginator';
import {ProgressSpinnerModule} from 'primeng/progressspinner';




@NgModule({
 exports:[
   ButtonModule,
   CardModule,
   InputTextModule,
   MenubarModule,
   PaginatorModule,
   ProgressSpinnerModule
 ]
})
export class PrimengModule { }
