import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  describe("boundary", () => {

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe("functional", () => {
    it(" should contain 2 links", () => {
      let element = fixture.nativeElement;

      expect(element.querySelectorAll('a').length).toBe(2);
    });

    it(" should contain image/logo", async(() => {
      let element = fixture.nativeElement;

      expect(component).toBeTruthy();

      fixture.detectChanges();
      expect(element.querySelector('img').src).toBeDefined();
    }
    ));

    it(" should contain movies link", () => {
      let element = fixture.nativeElement;

      expect(element.querySelectorAll('a')[1].innerHTML).toBe("Movies");
    });
  });
});
