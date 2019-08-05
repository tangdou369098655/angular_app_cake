import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/Http';
import { NavController } from '@ionic/angular';

@Component({
selector: 'app-product-detail',
templateUrl: './product-detail.component.html',
styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
private pid =''
private product ={}

constructor(
private route: ActivatedRoute,
private http: HttpClient,
private nav: NavController
) { }

ngOnInit() {
let url = 'http://www.codeboy.com/data/product/details.php?lid=';
this.route.params.subscribe((data)=>{
this.pid = data.pid
console.log('待查询的商品编号'+this.pid)
this.http.get(url+this.pid).subscribe((res:any)=>{
this.product = res.details;
console.log(this.product)
})
})
}
//返回后退按钮
goBack(){
  this.nav.back()
}

}