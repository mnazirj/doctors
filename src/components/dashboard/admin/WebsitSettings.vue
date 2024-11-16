<template>
    <div class="form-continer d-flex justify-content-center align-items-center   ms-auto me-auto pt-4 pb-4 mt-4 mb-4  ">
        <form class="p-3 m-1 mt-3 mb-3 d-flex justify-content-center " action="">
            <div class="w-50 d-flex flex-wrap justify-content-center">
                <div class="mb-5 input-group w-100 ">
                <label for="website-name" class="form-label w-100">Website Name</label>
                <span class="input-group-text rounded-start-2"><i class="fa-solid fa-pen text-main-color"></i></span>
                <input type="text" id="website-name" placeholder="Website Name" class="form-control" >
            </div>
            <div class="mb-5 input-group w-100">
                <label for="website-logo" class="form-label w-100">Website logo</label>
                <input class="form-control rounded-start-2" type="file" id="website-logo">
                <span class="input-group-text rounded-end-2" ><i class="fa-solid fa-file-arrow-up text-main-color"></i></span>
                <small class=" form-text w-100">Recommanded image size is 150px x 150px .</small>
            </div>
            <div class="mb-5 input-group w-100">
                <label for="website-logo" class="form-label w-100">Website Favicon</label>
                <input class="form-control rounded-start-2" type="file" id="website-logo">
                <span class="input-group-text rounded-end-2" ><i class="fa-solid fa-file-arrow-up text-main-color"></i></span>
                <small class=" form-text w-100">Recommanded image size is 16px x 16px , Accepted png and ico formmats.</small>
            </div>
            <div class="mb-4 d-flex justify-content-center">
                <button type="button" class="btn btn-main">Save</button>
            </div>
            </div>
           
        </form>
    </div>
</template>