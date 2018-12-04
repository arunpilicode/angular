import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title:string="my home page";
  name:string="arun";

products:any[]=[
  {
  "productId":1,
  "productName":"leaf Rake",
  "productCode":"GDN-0011",
  },
  {
  "productId":2,
"productName":"test",
"productCode":"GDN-0001",
  },
  {
  "productId":3,
  "productName":"testing",
  "productCode":"GDN-0010",
  },

  ];

  constructor() { }

  ngOnInit() {
  }

}
