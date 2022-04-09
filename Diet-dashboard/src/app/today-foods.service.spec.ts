import { TestBed } from '@angular/core/testing';

import { TodayFoodsService } from './today-foods.service';

describe('TodayFoodsService', () => {
  let service: TodayFoodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodayFoodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
