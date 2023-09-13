import { Component } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
	roles: string[] = ['customer', 'vip customer', 'golden customer','employee', 'manager'];
    groups: string[] = ['normal', 'admin', 'suppervisor'];
}
