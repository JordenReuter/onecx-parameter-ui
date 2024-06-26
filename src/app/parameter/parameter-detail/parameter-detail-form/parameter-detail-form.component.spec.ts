import { HttpClientTestingModule } from '@angular/common/http/testing'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { APP_CONFIG, PortalMessageService } from '@onecx/portal-integration-angular'
import { TranslateServiceMock } from '../../../shared/TranslateServiceMock'
import { environment } from '../../../../environments/environment'

import { ParameterDetailFormComponent } from './parameter-detail-form.component'
import { SharedModule } from '../../../shared/shared.module'
import { DatePipe } from '@angular/common'

describe('ParameterDetailFormComponent', () => {
  let component: ParameterDetailFormComponent
  let fixture: ComponentFixture<ParameterDetailFormComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParameterDetailFormComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, TranslateModule, SharedModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: TranslateService, useClass: TranslateServiceMock },
        { provide: PortalMessageService, useClass: PortalMessageService },
        { provide: APP_CONFIG, useValue: environment },
        { provide: DatePipe, useClass: DatePipe }
      ]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ParameterDetailFormComponent)
    component = fixture.componentInstance
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
