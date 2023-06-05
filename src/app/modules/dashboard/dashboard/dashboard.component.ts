import { Component, OnInit } from '@angular/core';
import { ModalClass } from '@shared/classes/modal';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  message = new ModalClass(this.ms);

  constructor(
    private ms: NzModalService
  ) {
  }

  authenticate(): void {
    this.message.info('Authentication', 'Verifying');
  }
}
