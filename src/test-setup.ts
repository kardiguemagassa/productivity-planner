import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';

export function setUpTestBed() {
  return TestBed.configureTestingModule({
    providers: [
      provideZonelessChangeDetection(),
    ],
  });
}