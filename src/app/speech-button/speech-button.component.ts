import { Component, OnInit, Input } from '@angular/core';
import { phrases } from '../phrases'

@Component({
  selector: 'app-speech-button',
  templateUrl: './speech-button.component.html',
  styleUrls: ['./speech-button.component.scss']
})
export class SpeechButtonComponent implements OnInit {

  @Input() button: string;

  phrases = phrases;
  clickMessage = "";
  buttonLabel = "";

  constructor() { }

  ngOnInit() {
    this.buttonLabel = this.button;
  }
  
  onClickMe() {
    this.clickMessage = "Phrase spoken!";
    this.playAudio();
    this.clickMessage = "";
  }

  playAudio(){
    let audio = new Audio();
    audio.src = this.buttonLabel + '.mp3';
    audio.load();
    audio.play();
  }

}