import { async, TestBed } from '@angular/core/testing';
import { UiSearchformModule } from './ui-searchform.module';

describe('UiSearchformModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiSearchformModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiSearchformModule).toBeDefined();
  });
});
