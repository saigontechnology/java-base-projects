import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-import-user',
  templateUrl: './dialog-import-user.component.html',
  styleUrls: ['./dialog-import-user.component.css']
})
export class DialogImportUserComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {

  }

  ngOnInit(): void {
      
  }
}
