import {Component} from '@angular/core';

import {phrases} from '../phrases';

@Component({
    selector: 'speech-button',
    templateUrl: './speech-button.component.html',
    styleUrls: ['./speech-button.component.sass']
})

export class SpeechButtonComponent{
    phrases = phrases;

    share() {
        window.alert('Phrase spoken!');
    }
}