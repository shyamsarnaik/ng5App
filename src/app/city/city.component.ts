import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  city:any;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(res => {
      this.city = res.name;
    });
  }



  ngOnInit() {
  }

}
