import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public setsform: any;
  
  videos: any[] = [
    {
      title: "Dumbell Bench Press",
      video: "https://www.youtube.com/embed/_jV2t0R8PGY",
      setOne: 0,
      setTwo: 0,
      setThree: 0
    },
    {
      title: "Workout 2",
      video: "https://www.youtube.com/embed/_jV2t0R8PGF",
      setOne: 0,
      setTwo: 0,
      setThree: 0
    },
    {
      title: "Workout 3",
      video: "https://www.youtube.com/embed/_jV2t0R8PGQ",
      setOne: 0,
      setTwo: 0,
      setThree: 0
    },
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder) {
    this.setsform = formBuilder.group({
      set1: ['', Validators.compose([Validators.required])],
      set2: ['', Validators.compose([Validators.required])],
      set3: ['', Validators.compose([Validators.required])]
    });
  }

  submitform() {
    console.log("Form submitted");
    console.log(this.videos);
  }

}

