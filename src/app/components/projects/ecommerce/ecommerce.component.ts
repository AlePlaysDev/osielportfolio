import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { CardProjectComponent } from '../card-project/card-project.component';
import { BackgroundAnimationComponent } from '../../background-animation/background-animation.component';

@Component({
  selector: 'app-ecommerce',
  standalone: true,
  imports: [TranslatePipe, CardProjectComponent, BackgroundAnimationComponent],
  templateUrl: './ecommerce.component.html',
  styleUrl: './ecommerce.component.css'
})
export class EcommerceComponent {

}
