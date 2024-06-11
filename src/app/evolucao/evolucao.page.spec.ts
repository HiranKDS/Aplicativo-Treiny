import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { EvolucaoPage } from './evolucao.page';

describe('EvolucaoPage', () => {
  let component: EvolucaoPage;
  let fixture: ComponentFixture<EvolucaoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvolucaoPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(EvolucaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
