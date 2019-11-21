import { Component, OnInit } from '@angular/core';
import { phrases } from '../phrases'

@Component({
  selector: 'app-speech-button',
  templateUrl: './speech-button.component.html',
  styleUrls: ['./speech-button.component.scss']
})
export class SpeechButtonComponent implements OnInit {

  phrases = phrases;
  clickMessage = "";

  constructor() { }

  ngOnInit() {
  }
  
  onClickMe() {
    this.clickMessage = "Phrase spoken!";
  }

}