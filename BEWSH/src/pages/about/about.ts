import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public mealsform: any;

  meals: any[] = [
    {
      time: "9:30am",
      meal: "Cereal",
      cheat: true,
      whoops: false,
    },
    {
      time: "12:00pm",
      meal: "Salad",
      cheat: true,
      whoops: false,
    },
    {
      time: "15:00pm",
      meal: "cake",
      cheat: true,
      whoops: false,
    },
    {
      time: "18:00pm",
      meal: "Rice",
      cheat: true,
      whoops: false,
    },
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder) {
    this.mealsform = formBuilder.group({
      time: ['', Validators.compose([Validators.required])],
      meal: ['', Validators.compose([Validators.required])],
      cheat: ['', Validators.compose([Validators.required])],
      whoops: ['', Validators.compose([Validators.required])]
    });
  }

  submitform() {
    console.log("Form submitted");
    console.log(this.meals);
  }

}
