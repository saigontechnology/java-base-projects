import { Component } from '@angular/core';

@Component({
  selector: 'app-permission-detail',
  templateUrl: './permission-detail.component.html',
  styleUrls: ['./permission-detail.component.css']
})
export class PermissionDetailComponent {
  permissions: string[] = ['read', 'write', 'download-image','update'];
}
