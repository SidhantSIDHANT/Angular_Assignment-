import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from '../../service/product-service';
import { Iproduct } from '../../model/product';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../../service/data-service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-prodcut-details',
  templateUrl: './prodcut-details.component.html',
  styleUrls: ['./prodcut-details.component.scss']
})
export class ProdcutDetailsComponent implements OnInit {
  displayedColumns: string[] = ['templateId', 'TemplateName', 'Region', 'ModifiedBy', "ModifiedOn", "action"];
  dataSource !: Iproduct[];
  searchInput !:string;

  constructor(private _productService: ProductService,
     private dataService : DataService,
     private router : Router
     ) { }

  ngOnInit(): void {
    this.productData();
  }

  productData(): void {
    this._productService.getProducts().subscribe((data: Iproduct[]) => {
      this.dataSource = data;
    })
  }

  onEdit(element : Iproduct): void {
    this.router.navigate(['/add-product', element.id])
  }

  onDelete(id: string): void {
    const indexNumber = this.dataSource.findIndex((index)=>{
      return index?.id === id;
    })
    this.dataSource.splice(indexNumber,1);
    this.dataSource = [...this.dataSource]
    this._productService.deleteProduct(id).subscribe((data)=>{});
  } 
}
