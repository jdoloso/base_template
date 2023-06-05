import { NzModalRef, NzModalService, NzModalState } from "ng-zorro-antd/modal";

export class ModalClass {

  constructor(
    private ms: NzModalService
  ) { }

  error(nzTitle: string, nzContent: string): NzModalRef {
    return this.ms.error({
      nzTitle,
      nzContent,
      nzCentered: true
    });
  }

  success(nzTitle: string, nzContent: string): NzModalRef {
    return this.ms.success({
      nzTitle,
      nzContent,
      nzCentered: true
    });
  }

  info(nzTitle: string, nzContent: string): NzModalRef {
    return this.ms.info({
      nzTitle,
      nzContent,
      nzCentered: true
    });
  }

  confirm(nzTitle: string, nzContent: string): NzModalRef {
    return this.ms.confirm({
      nzTitle,
      nzContent,
      nzCentered: true
    });
  }

}
