import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLottieViewComponent } from './ngx-lottie-view.component';

describe('NgxLottieViewComponent', () => {
    let component: NgxLottieViewComponent;
    let fixture: ComponentFixture<NgxLottieViewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NgxLottieViewComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NgxLottieViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
