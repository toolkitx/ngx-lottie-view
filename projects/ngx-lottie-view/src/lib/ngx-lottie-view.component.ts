import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Lottie, { AnimationConfigWithPath, AnimationItem } from 'lottie-web';

@Component({
    selector: 'ngx-lottie-view',
    template: ``,
    styles: [':host {display: block; min-width: 50px; min-height: 50px;}']
})
export class NgxLottieViewComponent implements OnInit {
    @Input() path: string;
    @Input() speed = 1;
    @Input() render: 'svg' | 'canvas' | 'html' = 'svg';
    @Input() loop: boolean | number = true;
    @Input() autoPlay = true;

    @Output() animationComplete = new EventEmitter<AnimationItem>();
    @Output() animationLoad = new EventEmitter<AnimationItem>();

    constructor(private view: ElementRef) {
    }

    ngOnInit() {
        const config: AnimationConfigWithPath = {
            container: this.view.nativeElement,
            renderer: this.render,
            loop: this.loop,
            autoplay: this.autoPlay,
            path: this.path
        };
        const animation = Lottie.loadAnimation(config);
        animation.setSpeed(this.speed);

        animation.addEventListener('complete', () => {
            this.animationComplete.emit(animation);
        });
        animation.addEventListener('DOMLoaded', () => {
            this.animationLoad.emit(animation);
        });
    }

}
