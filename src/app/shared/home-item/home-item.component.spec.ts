import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeItemComponent } from './home-item.component';

describe('HomeItemComponent', () => {
  let component: HomeItemComponent;
  let fixture: ComponentFixture<HomeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
