import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {API} from '../../app/api'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private n = new API();
  key: string;



  constructor(public navCtrl: NavController) {
    this.key = this.n.getKey();
    console.log(this.key);
  }

}
