import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  count = 0;
  options = {
    positionClass: 'toast-top-center',
    closeButton: true,
    timeOut: 4000,
    extendedTimeOut: 2500,
    progressBar: true,
    showEasing: 'swing',
    hideEasing: 'linear',
    showMethod: 'fadeIn',
    hideMethod: 'fadeOut',
    easing: 'ease-in',
    newestOnTop: true,
  };

  constructor(private toastr: ToastrService) { }

  showSuccess(message: string, title: string) {
    this.toastr.success(message, title, this.options);
  }

  showError(message: string, title: string) {
    this.toastr.error(message, title, this.options);
  }

  showInfo(message: string, title: string) {
    this.toastr.info(message, title, this.options);
  }

  showWarning(message: string, title: string) {
    this.toastr.warning(message, title, this.options);
  }

}
