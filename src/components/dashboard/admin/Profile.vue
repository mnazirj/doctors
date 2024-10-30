<template>
    <div class="profile-continer d-flex justify-content-center align-items-center flex-wrap m-1 mt-1 mb-2 shadow-3 rounded-3 m-auto">
        <div class="mt-3 mb-3 d-flex justify-content-center align-content-center flex-wrap ">
            <div class="d-flex justify-content-center align-items-center flex-wrap w-100">
                <ul class="list-group ">
                    <li :class="['list-group-item  list-group-item-action', activeTab === 'info' ? 'active' : '']" @click="setActiveTab('info')">Profile Informations</li>
                    <li :class="['list-group-item  list-group-item-action', activeTab === 'password' ? 'active' : '']" @click="setActiveTab('password')">Change Password</li>
                </ul>
            </div>
                
            
            <div v-if="activeTab === 'info'" class="info-section  mt-3 mb-3 d-flex justify-content-center flex-wrap align-content-center collapse show ">
                <div class=" d-flex justify-content-center align-items-center flex-wrap  pt-2 pb-2 mt-3 mb-3 w-100"> 
                    <div class="w-100 d-flex justify-content-center">
                        <img :src="admin.img" alt="profile-image" class="profile-img ">
                    </div>
                    
                </div>
                <!-- Edit button -->
                <div class="w-100 d-flex justify-content-end align-items-md-center">
                    <button class="btn btn-primary" title="Edit Profile" data-bs-toggle="modal" data-bs-target="#edit-profile-modal"><i class="pi pi-pen-to-square"></i></button>
                    <!-- modal edit -->
                    <div class=" modal fade" id="edit-profile-modal" tabindex="-1">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5">Edit Profile Informations</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="">
                                        <div class="mb-3 mt-3">
                                            <label class="form-label" for="name">Name</label>
                                            <input type="text" name="name" id="name" class="form-control" :value=" admin.name">
                                        </div>
                                        <div class="mb-3 mt-3">
                                            <label class="form-label" for="name">Email</label>
                                            <input type="text" name="email" id="email" class="form-control" :value=" admin.email">
                                        </div>
                                        <div class="mb-3 mt-3">
                                            <label class="form-label" for="name">Birthday</label>
                                            <input type="date" name="email" id="email" class=" form-control" :value=" admin.birthday">
                                        </div>
                                        <div class="mb-3 mt-3">
                                            <label class="form-label" for="name">Phone</label>
                                            <input type="text" name="phone" id="phone" class=" form-control" :value=" admin.mobile">
                                        </div>
                                        <div class="mb-3 mt-3">
                                            <label class="form-label" for="name">Address</label>
                                            <input type="text" name="address" id="address" class=" form-control" :value=" admin.address">
                                        </div>
                                    </form>
                                </div>
                                <div class=" modal-footer d-flex justify-content-center align-item-center">
                                    <button class=" btn btn-info" data-bs-dismiss="modal">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="d-flex justify-content-center align-content-center mt-2 mb-1 w-75">
                    <p class="w-25 d-flex justify-content-end align-items-center m-1 me-3 text-muted">Name : </p>
                    <p class="w-75 d-flex justify-content-start align-items-center m-1"> {{ admin.name }}</p>
                </div>
                <div class="d-flex justify-content-center align-content-center mt-2 mb-1 w-75">
                    <p class="w-25 d-flex justify-content-end align-items-center m-1 me-3 text-muted">Email : </p>
                    <p class="w-75 d-flex justify-content-start align-items-center m-1"> {{ admin.email }}</p>
                </div>
                <div class="d-flex justify-content-center align-content-cente  mt-2 mb-1 w-75">
                    <p class="w-25 d-flex justify-content-end align-items-center m-1 me-3 text-muted">Birthday : </p>
                    <p class="w-75 d-flex justify-content-start align-items-center m-1"> {{ admin.birthday }}</p>
                </div>
                <div class="d-flex justify-content-center align-content-center  mt-2 mb-1 w-75">
                    <p class="w-25 d-flex justify-content-end align-items-center m-1 me-3 text-muted">Phone : </p>
                    <p class="w-75 d-flex justify-content-start align-items-center m-1"> {{ admin.mobile }}</p>
                </div>
                <div class="d-flex justify-content-center align-content-center  mt-2 mb-1 w-75">
                    <p class="w-25 d-flex justify-content-end align-items-center m-1 me-3 text-muted">Address : </p>
                    <p class="w-75 d-flex justify-content-start align-items-center m-1"> {{ admin.address }}</p>
                </div>
            </div>
            <div v-if="activeTab === 'password'" class="mt-3 mb-3 d-flex justify-content-center flex-wrap align-content-center w-100">
                <form class="w-50 d-flex justify-content-center align-items-center flex-wrap">
                    <div class="mb-3 mt-3 w-100">
                        <input type="password" id="currentPassword" class="form-control" placeholder="Current Password">
                    </div>
                    <div class="mb-3 mt-3 w-100">
                        <input type="password" id="newPassword" class="form-control" placeholder="New Password">
                    </div>
                    <div class="mb-3 mt-3 w-100">
                        <input type="password" id="confirmPassword" class="form-control" placeholder="Confirm New Password">
                    </div>
                    <button type="submit" class="btn btn-primary">Update Password</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeTab:'info',
            admin:{
                name:"Mohammad MOMO",
                password:'mohammad123',
                img:require("@/assets/images/homepage/avatar-04.4c576192.jpg"),
                address:"Syria, Damasucs , Baghdad Street ",
                email:'Mohammad@test.com',
                mobile: '+963 947 465 123',
                birthday:"2000-01-01",

            }
        }
    },
    methods:{
        setActiveTab(tab){
            this.activeTab = tab;
        }
    }
}
</script>

<style scoped>
.list-group-item+.list-group-item {
    border-top-width: 1px;
}
.modal-footer{
    border-top: 0;
}
</style>