import { NzMessageService, NzMessageType } from "ng-zorro-antd/message";

export class Messages {

  constructor(
    private ms: NzMessageService
  ) { }

  message(type: NzMessageType, message: string): void {
    this.ms.create(type, message);
  }

}
