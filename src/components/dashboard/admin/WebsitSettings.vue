<template>
    <div class="form-continer d-flex justify-content-center align-items-center  shadow-3 ms-auto me-auto pt-4 pb-4 mt-4 mb-4  rounded-4">
        <form class="p-3 m-1 mt-3 mb-3" action="">
            <div class="mb-5">
                <label for="website-name" class="form-label w-100">Website Name</label>
                <input type="text" id="website-name" placeholder="Website Name" class="form-control" >
            </div>
            <div class="mb-5">
                <label for="website-logo" class="form-label">Website logo</label>
                <input class="form-control" type="file" id="website-logo">
                <small class=" form-text">Recommanded image size is 150px x 150px .</small>
            </div>
            <div class="mb-5">
                <label for="website-logo" class="form-label">Website Favicon</label>
                <input class="form-control" type="file" id="website-logo">
                <small class=" form-text">Recommanded image size is 16px x 16px , Accepted png and ico formmats.</small>
            </div>
            <div class="mb-4 d-flex justify-content-center">
                <button type="button" class="btn btn-outline-primary">Save</button>
            </div>
        </form>
    </div>
</template>