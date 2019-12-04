import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-speech-button',
  templateUrl: './speech-button.component.html',
  styleUrls: ['./speech-button.component.scss']
})
export class SpeechButtonComponent implements OnInit {

  @Input() button: string;

  displayString: string;
  

  constructor() { }

  ngOnInit() {  
    // Find and replace underscores with spaces for display
    var re = /_/gi;
    this.displayString = this.button.replace(re,' ');
  }
  
  onClickMe() {
    this.playAudio();
  }


  playAudio(){
    let audio = new Audio();
    audio.src = '../../assets/audio/' + this.button + '.m4a';
    audio.load();
    audio.play();
  }

}