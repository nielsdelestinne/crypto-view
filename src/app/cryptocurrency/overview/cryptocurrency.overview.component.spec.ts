import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptocurrencyOverviewComponent } from './cryptocurrency.overview.component';

describe('CryptocurrencyOverviewComponent', () => {
  let component: CryptocurrencyOverviewComponent;
  let fixture: ComponentFixture<CryptocurrencyOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptocurrencyOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptocurrencyOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
