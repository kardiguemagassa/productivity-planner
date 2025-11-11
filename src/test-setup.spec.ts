import { TestBed } from '@angular/core/testing';

describe('Global Setup Test', () => {
  it('should initialize TestBed without errors', () => {
    expect(() => {
      TestBed.configureTestingModule({});
    }).not.toThrow();
  });
});