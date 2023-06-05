import { NgModule } from '@angular/core';
import { ApartmentOutline, DashboardOutline, FormOutline, HomeOutline, MenuFoldOutline, MenuUnfoldOutline, SettingOutline, SnippetsOutline, StockOutline } from '@ant-design/icons-angular/icons';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';

const icons = [ HomeOutline, MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline, SettingOutline,  ApartmentOutline, StockOutline, SnippetsOutline ];

@NgModule({
  imports: [ NzIconModule ],
  exports: [ NzIconModule ],
  providers: [
    { provide: NZ_ICONS, useValue: icons }
  ]
})

export class IconsProviderModule {
}
