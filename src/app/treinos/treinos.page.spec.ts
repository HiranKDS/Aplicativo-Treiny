import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TreinosPage } from './treinos.page';

describe('TreinosPage', () => {
  let component: TreinosPage;
  let fixture: ComponentFixture<TreinosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TreinosPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TreinosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
