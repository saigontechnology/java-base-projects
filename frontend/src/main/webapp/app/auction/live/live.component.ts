import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import SharedModule from 'app/shared/shared.module';

@Component({
  selector: 'jhi-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss'],
  standalone: true,
  imports: [SharedModule, RouterModule],
})
export class LiveComponent {

}
