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

  constructor() { }

  ngOnInit() {
  }
  
  onClickMe() {
    this.clickMessage = "Phrase spoken!";
  }

  playAudio(){
    let audio = new Audio();
    audio.src = './audio_sample.mp3';
    audio.load();
    audio.play();
  }

}