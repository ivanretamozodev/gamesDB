import { Component, Input } from '@angular/core';
import { images } from '../../interfaces/GameImages.interface';

@Component({
  selector: 'galleria',
  templateUrl: './galleria.component.html',
  styleUrls: ['./galleria.component.css'],
})
export class GalleriaComponent {
  @Input() images!: images[];
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 3,
    },
  ];
  constructor() {}
}
