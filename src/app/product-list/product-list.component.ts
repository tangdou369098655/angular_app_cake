import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonInfiniteScroll } from '@ionic/angular';
import { HttpClient } from '@angular/common/Http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
private productlist = [];
private pno = 0;
// 还有更多数据吗
private hasMore = true;

//获取页面中无限滚动组件的引用
// @ViewChild(IonInfiniteScroll,{static:true})
// private myScroll:IonInfiniteScroll;

  constructor(
    private nav:NavController,
    private http:HttpClient,
    ) { }

  ngOnInit() {
    this.pno++;
    let url='http://www.codeboy.com/data/product/list.php?pno=';
    this.http.get(url).subscribe((res:any)=>{
      this.productlist=this.productlist.concat(res.data)
    })
  }
  loadMore(myScroll){
    this.pno++;
    let url='http://www.codeboy.com/data/product/list.php?pno='+this.pno;
    this.http.get(url).subscribe((res:any)=>{
      this.productlist=this.productlist.concat(res.data);
      myScroll.complete();
      if(this.pno >= res.pageCount){
        this.hasMore = false; //没有更多数据了
      }
    })
    
   
    
  }
  goBack(){
    this.nav.back();
  }
}
