import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { PrimengModule } from '../primeng/primeng.module';

@NgModule({
  declarations: [MenuComponent, FooterComponent],
  imports: [PrimengModule],
  exports: [MenuComponent, FooterComponent],
})
export class SharedModule {}
