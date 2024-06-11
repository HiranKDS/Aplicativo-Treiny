import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DietaPage } from './dieta.page';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';


describe('DietaPage', () => {
  let component: DietaPage;
  let fixture: ComponentFixture<DietaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DietaPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(DietaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});