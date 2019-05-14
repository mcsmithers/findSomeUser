import { async, TestBed } from '@angular/core/testing';
import { LibsMaterialModule } from './libs-material.module';

describe('LibsMaterialModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LibsMaterialModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LibsMaterialModule).toBeDefined();
  });
});
