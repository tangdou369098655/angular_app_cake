import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/Http';
import { IonSlides } from '@ionic/angular';
import {GlobalVariable} from '../../globals';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
private carouselItems = [];
private product =[];
private pics = [];
private kinds = [];
private imgurl=GlobalVariable.base_path;
private product1 =[];
private product2 =[];
private product3 =[];
private product4 =[];
private product5 =[];
private index1=0;
private kinds1 =[];
// private productAll =[this.product1,this.product2,this.product3,this.product4,this.product5];
//轮播图广告的选项
private slideOpts={
  initialSlide:0,
  speed:400,
  loop:true
};
//下面这个是为了和左边那个#mySlides对应
// 在组件模板中引用视图子组件
@ViewChild(IonSlides,{static: true})
private mySlides:IonSlides;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    //初始化时候，异步请求服务器端的首页数据
    let url=GlobalVariable.base_path+'index/all';
    this.http.get(url).subscribe((res:any)=>{
      console.log(res)
      this.carouselItems=res.carouselItems;
      this.product=res.product;
      this.pics=res.pics;
      this.kinds=res.kinds;
      this.product1=res.product.slice(0,8);
      this.product2=res.product.slice(8,16);
      this.product3=res.product.slice(16,24);
      this.product4=res.product.slice(24,32);
      this.product5=res.product.slice(32,40);
      this.kinds1=res.kinds.slice(0,5);
      console.log(this.product1)
      // 开始轮播广告的自动播放
      this.mySlides.startAutoplay();
    })
  }
  getKeys(item) {
    return Object.keys(item);
   }

}
