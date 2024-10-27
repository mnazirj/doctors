<template>
    <div class="w-100 d-flex justify-content-end align-items-center p-1 pe-4 me-4">
        <button class="btn btn-success m-1 me-4" title="Add Speciality" data-bs-toggle="modal" data-bs-target="#add-modal">+</button>
        <div class="modal fade" id="add-modal" tabindex="-1">
            <div class=" modal-dialog modal-dialog-centered">
                <div class=" modal-content ">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="head-text-modal">Create Speciality</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class=" modal-body">
                        <form action="">
                            <div class="mb-4">
                                <input type="text" class=" form-control" id="speciality-name" placeholder="Speciality Name">
                            </div>
                            <div class="mb-3">
                                <label for="speciality-logo" class=" form-label">Sepciality Logo</label>
                                <input class="form-control" type="file" id="speciality-logo">
                            </div>
                        </form>
                    </div>
                    <div class=" modal-footer d-flex justify-content-center">
                        <button type="button" class="btn btn-primary w-75" data-bs-dismiss="modal">Create</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="table-continer sepc-table   d-flex flex-wrap justify-content-center align-content-center shadow shadow-3 ms-auto me-auto pt-4 pb-4 mt-4 mb-4 rounded rounded-4">
        <div class="table-responsive">
            <table class="table table-hover  ">
            <thead>
                <tr class="">
                    <th scope="col">ID</th>
                    <th scope="col" colspan="2">Specialitie Name</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody class="table-group-divider align-middle">
                <tr v-for="speciality in paginatedData" :key="speciality.id">
                    <td>#{{ speciality.id }}</td>
                    <td>
                        <img :src="speciality.img" alt="speciality-image" class=""> 
                        </td>
                        <td><span>{{ speciality.name }}</span></td>
                    <td>
                        <!-- edit button -->
                        <button type="button" class="btn btn-primary me-1 ms-1" title="Delete this Speciality" data-bs-toggle="modal" data-bs-target="#edit-modal"><i class="pi pi-pen-to-square"></i></button>
                            <!-- modal edit -->
                            <div class="modal fade" id="edit-modal" tabindex="-1">
                            <div class=" modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class=" modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Speciality #{{ speciality.id }}</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class=" modal-body">
                                        <form action="">
                                            <div class="mb-4">
                                                <input type="text" class=" form-control" id="speciality-name" placeholder="Speciality Name" :value="speciality.name">
                                            </div>
                                            <div class="mb-3">
                                                <label for="speciality-logo" class=" form-label">Sepciality Logo</label>
                                                <input class="form-control" type="file" id="speciality-logo">
                                            </div>
                                        </form>
                                    </div>
                                    <div class=" modal-footer d-flex justify-content-center">
                                        <button type="button" class="btn btn-primary w-75" data-bs-dismiss="modal">Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- delete button -->
                        <button type="button" class="btn btn-danger me-1 ms-1" title="Edit this Speciality" data-bs-toggle="modal" data-bs-target="#delete-modal"><i class="pi pi-trash"></i></button>
                            <!-- delete modal -->
                            <div class=" modal fade" id="delete-modal" tabindex="-1">
                                <div class=" modal-dialog modal-dialog-centered">
                                    <div class=" modal-content">
                                        <div class=" modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">Delete Speciality #{{ speciality.id }}</h1>
                                        </div>
                                        <div class=" modal-body d-flex justify-content-center align-items-center">
                                            <p>Are you sure deleting #{{ speciality.id }} speciality ?</p>
                                        </div>
                                        <div class=" modal-footer d-flex justify-content-center">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
       <Pagination :data="specialities" :itemsPerPage="5" @updatePaginatedData="handlePaginatedDataUpdate" />
       
    </div>
</template>

<script>
import Pagination from './Pagination.vue';
export default{
    components:{
        Pagination,
    },
    data() {
        return {
            paginatedData:[],
            specialities:[
                {
                    id:1,
                    name: "Cardiologist",
                    img:require('@/assets/images/homepage/1.svg'),
                },
                {
                    id:2,
                    name: "Neurology",
                    img:require('@/assets/images/homepage/2.svg'),
                },
                {
                    id:3,
                    name: "Urology",
                    img:require('@/assets/images/homepage/3.svg'),
                },
                {
                    id:4,
                    name: "Orthopedic",
                    img:require('@/assets/images/homepage/4.svg'),
                },
                {
                    id:5,
                    name: "Ophthalmologists",
                    img:require('@/assets/images/homepage/6.svg'),
                },
               
            ],
        }
    },
    methods:{
        handlePaginatedDataUpdate(newPaginatedData){
            this.paginatedData = newPaginatedData;
        }
    }
}
</script>