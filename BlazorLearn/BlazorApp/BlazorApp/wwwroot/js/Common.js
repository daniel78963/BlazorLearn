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

window.ShowSwal = function (type, message, title) {
    if (type == "success") {
        Swlal.fire({
            icon: 'success',
            title: title,
            text: message
        });
    }

    if (type == "error") {
        Swlal.fire({
            icon: 'error',
            title: title,
            text: "Something is not valid"
        });
    }
}