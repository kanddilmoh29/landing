import { ForecastService } from './../forecast.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  constructor(private forecast: ForecastService) {
    this.forecast.getForecast().subscribe(weatherRes => {
      console.log(weatherRes);
    });
  }

  ngOnInit(): void {
  }

}
