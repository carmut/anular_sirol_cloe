import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAjoutComponent } from './admin-ajout.component';

describe('AdminAjoutComponent', () => {
  let component: AdminAjoutComponent;
  let fixture: ComponentFixture<AdminAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAjoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
