import { Component, OnInit } from '@angular/core';
import { Messages } from '@shared/classes/messages';
import { NzMessageService } from 'ng-zorro-antd/message';
import { OnlineStatusService } from 'ngx-online-status';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  constructor(
    private os: OnlineStatusService,
    protected ms: NzMessageService
  ) { }

  connectionStatus = true;
  message = new Messages(this.ms);

  ngOnInit(): void {
    this.handleStatusChanges();
  }

  handleStatusChanges(): void {
    this.os.status.subscribe(status => {
      this.connectionStatus = status ? true : false;

      if (this.connectionStatus) {
        this.message.message('success', 'You are back online.');
      }
    });
  }

}
