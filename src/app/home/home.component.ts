import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name = 'Hoài Nam';
  public age = 10;
  public traiCay = [
    {
      name: 'Xoài',
      price: 12,
      sale: true,
    },
    {
      name: 'Cam',
      price: 15,
      sale: false,
    },
    {
      name: 'Bưởi',
      price: 20,
      sale: true,
    },
    {
      name: 'Nho',
      price: 40,
      sale: false,
    },
  ];

  public vnData = [
    {
      city: '--Tỉnh / Thành phố--',
      district: [
        '--Quận / Huyện--'
      ],
    },{
      city: 'An Giang',
      district: [
        '--Quận / Huyện--',
        'Thành phố Long Xuyên',
        'Thành phố Châu Đốc',
        'Thị xã Tân Châu',
        'huyện An Phú',
        'huyện Châu Phú',
        'huyện Châu Thành',
        'huyện Chợ Mới',
        'huyện Phú Tân',
        'huyện Thoại Sơn',
        'huyện Tịnh Biên',
        'huyện Trí Tôn',
      ],
    },{
      city: 'Vĩnh Phúc',
      district: [
        '--Quận / Huyện--',
        'thành phố Vĩnh Yên',
        'thị xã Phúc Yên',
        'huyện Tam Dương',
        'huyện Lập Thạch',
        'huyện Sông Lô',
        'huyện Yên Lạc',
        'huyện Vĩnh Tường',
        'huyện Tam Đảo',
        'huyện Bình Xuyên'
      ]
    },{
      city: 'Bà Rịa - Vũng Tàu',
      district: [
        '--Quận / Huyện--',
        'thành phố Vũng Tàu',
        'thị xã Bà Rịa',
        'thị xã Phú Mĩ',
        'huyện Châu Đức',
        'huyện Côn Đảo',
        'huyện Đất Đỏ',
        'huyện Long Điền',
        'huyện Tân Thành',
        'huyện Xuyên Mộc'
      ]
    },{
      city: 'Bạc Liêu',
      district: [
        '--Quận / Huyện--',
        'thành phố Bạc Liêu',
        'huyện Đông Hải',
        'huyện Giá Rai',
        'huyện Hòa Bình',
        'huyện Hồng Dân',
        'huyện Phước Long',
        'huyện Vĩnh Lợi',
      ]
    }
  ];
  public districts:string[] = [];
  constructor() {}

  ngOnInit(): void {}
  public resetName(): void {
    this.name = '';
  }

  public changeCity(event:any):void{
    const city = event.target.value;
    if(!city){
      return;
    }
    // cách 1:
    // const search = this.vnData.filter(data => data.city === city);
    // console.log("search", search);
    // if(search && search.length > 0){
    //   this.districts = search[0].district;
    // }

    //cách 2:
    this.districts = this.vnData.find(data => data.city == city)?.district || [];
  }
}
