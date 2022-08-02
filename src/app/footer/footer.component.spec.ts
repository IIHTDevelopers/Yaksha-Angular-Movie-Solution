import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  describe("boundary", () => {

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should create', () => {
      let element = fixture.nativeElement;

      // fixture.detectChanges();

      expect(element.innerHTML).toContain("copyright Movie Ticket Booking App");
    });


  });

});