import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-import-product',
  templateUrl: './dialog-import-product.component.html',
  styleUrls: ['./dialog-import-product.component.css']
})
export class DialogImportProductComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {

  }

  ngOnInit(): void {
      
  }
}
