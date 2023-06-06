import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OnlineStatusModule } from 'ngx-online-status';
import { BaseComponent } from './base/base.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NgxPermissionsModule } from 'ngx-permissions';
import { IconsProviderModule } from '../icons-provider.module';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzAlertModule } from 'ng-zorro-antd/alert';


@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    BaseComponent,
    FooterComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    NzBadgeModule,
    NzBreadCrumbModule,
    NzButtonModule,
    NzDividerModule,
    NzDropDownModule,
    NzMenuModule,
    NzToolTipModule,
    NzLayoutModule,
    NzAvatarModule,
    NzDrawerModule,
    NzPopoverModule,
    NzListModule,
    NzRadioModule,
    NzCheckboxModule,
    NzTagModule,
    NzInputModule,
    NzSpinModule,
    IconsProviderModule,
    NzIconModule,
    NgxPermissionsModule,
    NzEmptyModule,
    NzRadioModule,
    OnlineStatusModule,
    NzAlertModule
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    BaseComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
