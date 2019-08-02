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
private newArrivalItems =[];
private topSaleItems = [];
private recommendedItems = [];
private piclist=[1,2,3,4];
private imgurl=GlobalVariable.base_path
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
    let url='http://www.codeboy.com/data/product/index.php';
    this.http.get(url).subscribe((res:any)=>{
      console.log(res)
      this.carouselItems=res.carouselItems;
      this.newArrivalItems=res.newArrivalItems;
      this.topSaleItems=res.topSaleItems;
      this.recommendedItems=res.recommendedItems;
      console.log(this.carouselItems,this.newArrivalItems,this.recommendedItems,this.topSaleItems)
      // 开始轮播广告的自动播放
      console.log(this.mySlides)
      console.log(111)
      console.log(GlobalVariable.base_path)
      this.mySlides.startAutoplay();
    })
  }

}
