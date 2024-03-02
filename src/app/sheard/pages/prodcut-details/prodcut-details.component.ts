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
  searchInput !: string;

  constructor(private _productService: ProductService,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProductData();
    this.addProductUsers();
  }

  addProductUsers(): void {
    const product = JSON.stringify(localStorage.getItem('productForm')) as any;
    if (product) {
      this.dataSource?.push(product);
      localStorage.clear();
    }
  }

  getProductData(): void {
    this._productService.getProducts().subscribe((data: Iproduct[]) => {
      this.dataSource = data;
    })
  }

  onEdit(element: Iproduct): void {
    this.router.navigate(['/add-product', element.id])
  }

  updateProduct(): void {
    const user = JSON.parse(localStorage.getItem('productForm')!);
    localStorage.removeItem('productForm');
    for (let i = 0; i < this.dataSource.length; i++) {
       if(user.id === this.dataSource[i].id){
        this.dataSource[i].name = user.name;
       this.dataSource[i].region = user.region;
       this.dataSource[i].modifidedBy = user.modifidedBy;
       this.dataSource[i].modifiedOn = user.modifiedOn;
       this.dataSource[i].templateId = user.templateId;
       this.dataSource[i].formArray = user.formArray;
       break
       }
    }
  }

  onDelete(id: string): void {
    const indexNumber = this.dataSource.findIndex((index) => {
      return index?.id === id;
    })
    this.dataSource.splice(indexNumber, 1);
    this.dataSource = [...this.dataSource]
    this._productService.deleteProduct(id).subscribe((data) => { });
  }
}
