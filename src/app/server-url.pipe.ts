import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serverUrl'
})
export class ServerUrlPipe  {
private url = 'http://www.codeboy.com/'
  transform(value,mode="prepend") {
    // 防止还没有有效数据时候NG执行的数据绑定
    if(!value){
      return '';
    }
    if(mode==='prepend'){
      // 把一个相对地址转换为绝对地址
    return this.url + value;
    }else if(mode==='replace'){
      // 把一个形如<div><img src="img/1.jpg"></div>
      return value.replace(/src="img/g,`src="${this.url}img`)
    }
  }

}
