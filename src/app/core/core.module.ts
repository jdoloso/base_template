import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseComponent } from '@shared/modules/layout/base/base.component';
import { NZ_CONFIG, NzConfig } from 'ng-zorro-antd/core/config';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

const ngZorroConfig: NzConfig = {
  message: { nzMaxStack: 1, nzDuration: 5000, nzPauseOnHover: true },
  notification: { nzMaxStack: 3, nzDuration: 15000, nzPlacement: 'bottomRight', nzPauseOnHover: true },
  modal: { nzMaskClosable: false, nzCloseOnNavigation: false },
  carousel: { nzEffect: 'scrollx', nzEnableSwipe: true, nzDots: true },
  table: { nzSize: 'small' },
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    NzModalModule,
    NzNotificationModule,
    NzMessageModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: NZ_CONFIG,
      useValue: ngZorroConfig
    },
    // {
    //   provide: NZ_DATE_CONFIG,
    //   useValue: {firstDayOfWeek: 1}
    // },
    BaseComponent
  ]

})
export class CoreModule { }
