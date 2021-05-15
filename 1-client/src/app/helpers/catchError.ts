import { ToastrService } from 'ngx-toastr';

export const catchError = (toastr: ToastrService) => {
    toastr.error('Something went wrong! Please try later.', 'Error');
};
