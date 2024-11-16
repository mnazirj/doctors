<template>
    <div class="table-continer w-100   d-flex flex-wrap justify-content-center align-content-center pb-1 pt-1 mt-1 mb-1">
        <div class="w-100 d-flex justify-content-between">
            <div class="d-flex justify-content-end align-items-center w-75 mt-1 mb-3">
                <div class="w-66 input-group">
                    <span class="input-group-text"><i class="pi pi-search fs-4 text-main-color"></i></span>
                    <input type="text" name="search" id="search" class=" form-control search" placeholder="Search ..." v-model="searchInput" @input="resetToFirstPage">
                </div>
        </div>
        <!-- Create button -->
        <div class="w-25 d-flex justify-content-end mt-1 mb-3">
        <button class="btn btn-main white-space-nowrap" title="Create a new speciality" data-bs-toggle="modal" data-bs-target="#create-speciality-modal">
            <i class="pi pi-plus me-1"></i>Create
        </button>
            <!-- Create modal -->
            <div class="modal fade" id="create-speciality-modal" tabindex="-1">
                <div class=" modal-dialog modal-dialog-centered">
                    <div class=" modal-content ">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="head-text-modal">Create Speciality</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class=" modal-body">
                            <form action="">
                                <div class="mb-4 input-group">
                                    <span class="input-group-text rounded-start-2" ><i class="fa-solid fa-pen text-main-color"></i></span>
                                    <input type="text" class=" form-control" id="speciality-name" placeholder="Speciality Name">
                                </div>
                                <div class="mb-3 input-group">
                                    <label for="speciality-logo" class=" form-label w-100">Sepciality Logo</label>
                                    <input class="form-control rounded-start-2" type="file" id="speciality-logo">
                                    <span class="input-group-text rounded-end-2" ><i class="fa-solid fa-file-arrow-up text-main-color"></i></span>
                                </div>
                            </form>
                        </div>
                        <div class=" modal-footer d-flex justify-content-end">
                            <button type="button" class="btn btn-main" data-bs-dismiss="modal">Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <!-- Table -->
        <div class="table-responsive w-100">
            <table class="table table-hover  ">
                <!-- table head -->
            <thead>
                <tr class="">
                    <th scope="col">ID</th>
                    <th scope="col" colspan="2">Speciality Name</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <!-- table body -->
            <tbody class="align-middle">
                <tr v-for="speciality in paginatedData" :key="speciality.id">
                    <td>#{{ speciality.id }}</td>
                    <td><img :src="speciality.img" alt="speciality-image" class=""></td>
                    <td><span>{{ speciality.name }}</span></td>    
                    <td class="text-center">
                        <!-- edit button -->
                        <button type="button" class="btn btn-outline-main me-1 ms-1" title="Edit this Speciality" data-bs-toggle="modal" :data-bs-target="'#edit-modal-' + speciality.id"><i class="pi pi-pen-to-square"></i></button>
                            <!-- modal edit -->
                            <div class="modal fade" :id="'edit-modal-' + speciality.id" tabindex="-1">
                            <div class=" modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class=" modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Speciality #{{ speciality.id }}</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class=" modal-body">
                                        <form action="">
                                            <div class="mb-4 input-group">
                                                <span class="input-group-text rounded-start-2"><i class="fa-solid fa-pen text-main-color"></i></span>
                                                <input type="text" class=" form-control" id="speciality-name" placeholder="Speciality Name" :value="speciality.name">
                                            </div>
                                            <div class="mb-3 input-group">
                                                <label for="speciality-logo" class=" form-label w-100">Sepciality Logo</label>
                                                <input class="form-control rounded-start-2" type="file" id="speciality-logo">
                                                <span class="input-group-text rounded-end-2"><i class="fa-solid fa-file-arrow-up text-main-color"></i></span>
                                            </div>
                                        </form>
                                    </div>
                                    <div class=" modal-footer d-flex justify-content-end">
                                        <button type="button" class="btn btn-main" data-bs-dismiss="modal">Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- delete button -->
                        <button type="button" class="btn btn-outline-danger me-1 ms-1" title="Delete this Speciality" data-bs-toggle="modal" :data-bs-target="'#delete-modal-' + speciality.id"><i class="pi pi-trash"></i></button>
                            <!-- delete modal -->
                            <div class=" modal fade" :id="'delete-modal-' + speciality.id" tabindex="-1">
                                <div class=" modal-dialog modal-dialog-centered">
                                    <div class=" modal-content">
                                        <div class=" modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">Delete Speciality #{{ speciality.id }}</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class=" modal-body d-flex justify-content-center align-items-center">
                                            <p>Are you sure deleting #{{ speciality.id }} speciality ?</p>
                                        </div>
                                        <div class=" modal-footer d-flex justify-content-end">
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
        <!-- Pagination -->
        <Pagination :data="filteredData" :itemsPerPage="10" @updatePaginatedData="handlePaginatedDataUpdate" ref="pagination" />
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
            searchInput:'',
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
    computed:{
        filteredData(){
            // condtion if search input is empty return all data
            if(!this.searchInput){
                return this.specialities;
            }
            // filter speciality by (name ,id)
            // take name (after convert it to lower case) id (after convert it to string) then we show if this value contains what writed in search input(.include) (after convert search input value to lower case) then return array (contains data which include what writed search input value)
            return this.specialities.filter((item)=> 
                item.name.toLowerCase().includes(this.searchInput.toLowerCase()) ||
                String(item.id).includes(this.searchInput)
            );
        }
    },
    methods:{
        // when search to set page number 1
        resetToFirstPage(){
            this.$refs.pagination.currentPage = 1;
        },
        // to set page number x data in variable[array contains rows for this page] (table view this variable).
        //  Example :if we was in page number 1 when we turn to page 2 (this method fired) and we put in variable paginatiedData new rows to display them. 
        handlePaginatedDataUpdate(newPaginatedData){
            this.paginatedData = newPaginatedData;
        }
    }
}
</script>

<style scoped>

.modal-body  {
    text-align: start;

}
.modal-body p {
    margin: 1rem;
}

</style>