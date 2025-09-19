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

//window.ShowSwal = function (type, message, title) {
//    if (type == "success") {
//        Swal.fire({
//            icon: 'success',
//            title: title,
//            text: message
//        });
//    }

//    if (type == "error") {
//        Swal.fire({
//            icon: 'error',
//            title: title,
//            text: "Something is not valid"
//        });
//    }
//}

window.ShowSwal = function (type, message) {
    if (type == "success") {
        Swal.fire({
            icon: "success",
            title: "title",
            text: message
        });
    }

    if (type == "error") {
        Swal.fire({
            icon: "error",
            title: "title",
            text: "Something is not valid"
        });
    }
}

window.showSwal2 = function (type, message, title) {
    if (type == "success") {
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    }
    if (type == "error") {
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    }
}
