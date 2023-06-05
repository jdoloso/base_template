import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OnlineStatusModule } from 'ngx-online-status';

import { NgZorroModule } from '../ng-zorro.module';
import { BaseComponent } from './base/base.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    BaseComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgZorroModule,
    OnlineStatusModule,
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    BaseComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
