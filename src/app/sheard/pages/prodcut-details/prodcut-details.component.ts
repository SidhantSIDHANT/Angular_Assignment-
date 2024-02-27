import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product-service';
import { Iproduct } from '../../model/product';
import { MatTableDataSource } from '@angular/material/table';

const ELEMENT_DATA: any[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
];

@Component({
  selector: 'app-prodcut-details',
  templateUrl: './prodcut-details.component.html',
  styleUrls: ['./prodcut-details.component.scss']
})
export class ProdcutDetailsComponent implements OnInit {
  displayedColumns: string[] = ['templateId', 'TemplateName', 'Region', 'ModifiedBy', "ModifiedOn", "action"];
  dataSource !: any;
  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.productData();
  }

  productData(): void {
    this._productService.getProducts().subscribe((data: Iproduct[]) => {
      this.dataSource =data;
    })
  }
}
