import { TestBed } from '@angular/core/testing';

import { SSkillsService } from './s-skills.service';

describe('SSkillsService', () => {
  let service: SSkillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SSkillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
