import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(
    public navCtrl: NavController,
    private weatherProvider: WeatherProvider) {
  }

  ionViewDidLoad() {
    this.weatherProvider.getWeather();
    this.weatherProvider.weather.subscribe((data: any) => {
      console.log(data);
    });

    //console.log();
  }

}
