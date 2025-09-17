window.showToastr = function (type, message, title) {
    if (type == "success") {
        toastr.success(message);
    }
    if (type == "error") {
        toastr.error(message);
    }
    if (type == "warning") {
        toastr.warning(message);
    }
    
}
