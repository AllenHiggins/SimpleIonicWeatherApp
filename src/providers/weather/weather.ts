import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter, Output } from '@angular/core';

import {API} from '../../app/api';

@Injectable()
export class WeatherProvider {

  count: number = 0;
  key = new API();
  @Output() weather = new EventEmitter<any>();

  constructor(private http: HttpClient) {
    console.log('Hello WeatherProvider Provider ');
  }

  getWeather() {
    setInterval(() =>{
      new Promise(resolve => {
        this.http.get(this.key.example).subscribe(data => {resolve(data)
          this.weather.emit(resolve(data));
        }, err => {
          resolve(err);
        });
      });
    }, 100000);
    /*return new Promise(resolve => {
      this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" + this.key.getCity() + "&appid=" + this.key.getKey() +"\"").subscribe(data => {
        resolve(data);
      }, err => {
        resolve(err);
      });
    });*/
  }

}
