import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeCategoriesComponent } from './HomeCategoriesComponent.component';
 
 
describe('HomeComponent', () => {
  let component: HomeCategoriesComponent;
  let fixture: ComponentFixture<HomeCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCategoriesComponent]
    });
    fixture = TestBed.createComponent(HomeCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
