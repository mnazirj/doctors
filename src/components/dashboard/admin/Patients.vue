<template>
    <div class="table-continer   d-flex flex-wrap justify-content-center align-content-center shadow shadow-3 ms-auto me-auto pt-4 pb-4 mt-4 mb-4 rounded rounded-4">
        <div class="table-responsive">
            <table class="table table-hover  ">
            <thead>
                <tr class="">
                    <th scope="col">ID</th>
                    <th scope="col" colspan="2">Paitent Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Address</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Last Visit</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody class="table-group-divider align-middle">
                <tr v-for="paitent in paginatedData" :key="paitent.id">
                    <td>#{{ paitent.id }}</td>
                    <td><img :src="paitent.img" alt="paitent-image" class="table-img"></td>
                    <td>{{ paitent.name }}</td>
                    <td>{{ paitent.age }}</td>
                    <td>{{ paitent.address }}</td>
                    <td>{{ paitent.phone }}</td>
                    <td>{{ paitent.lastVisit }}</td>
                    <td>
                        <button type="button" class="btn btn-primary me-1 ms-1"><i class="pi pi-pen-to-square"></i></button>
                        <button type="button" class="btn btn-danger me-1 ms-1"><i class="pi pi-trash"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
       <Pagination :data="paitents" :itemsPerPage="5" @updatePaginatedData="handlePaginatedDataUpdate" />
       
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
            paitents:[
                {
                    id:1,
                    name:'Mohammad GG',
                    age: 25,
                    address: "Syria ,Damascus ,Baghdad Street ",
                    phone:'+963 987 123 987',
                    lastVisit: "11/12/2024 10:20 AM",
                    img: require('@/assets//images//homepage/avatar-03.bcd54570.jpg'),
                },
                {
                    id:2,
                    name:'Mohammad GG',
                    age: 25,
                    address: "Syria ,Damascus ,Baghdad Street ",
                    phone:'+963 987 123 987',
                    lastVisit: "11/12/2024 10:20 AM",
                    img: require("@/assets/images/homepage/avatar-01.85a7d768.jpg"),
                },
                {
                    id:3,
                    name:'Mohammad GG',
                    age: 25,
                    address: "Syria ,Damascus ,Baghdad Street ",
                    phone:'+963 987 123 987',
                    lastVisit: "11/12/2024 10:20 AM",
                    img: require('@/assets//images//homepage/avatar-03.bcd54570.jpg'),
                },
                {
                    id:4,
                    name:'Mohammad GG',
                    age: 25,
                    address: "Syria ,Damascus ,Baghdad Street ",
                    phone:'+963 987 123 987',
                    lastVisit: "11/12/2024 10:20 AM",
                    img: require("@/assets/images/homepage/avatar-01.85a7d768.jpg"),
                },
                {
                    id:5,
                    name:'Mohammad GG',
                    age: 25,
                    address: "Syria ,Damascus ,Baghdad Street ",
                    phone:'+963 987 123 987',
                    lastVisit: "11/12/2024 10:20 AM",
                    img: require('@/assets/images/homepage/avatar-04.4c576192.jpg'),
                },
                {
                    id:6,
                    name:'Mohammad GG',
                    age: 25,
                    address: "Syria ,Damascus ,Baghdad Street ",
                    phone:'+963 987 123 987',
                    lastVisit: "11/12/2024 10:20 AM",
                    img: require("@/assets/images/homepage/avatar-01.85a7d768.jpg"),
                },
                {
                    id:7,
                    name:'Mohammad GG',
                    age: 25,
                    address: "Syria ,Damascus ,Baghdad Street ",
                    phone:'+963 987 123 987',
                    lastVisit: "11/12/2024 10:20 AM",
                    img: require("@/assets/images/homepage/avatar-01.85a7d768.jpg"),
                },
                {
                    id:8,
                    name:'Mohammad GG',
                    age: 25,
                    address: "Syria ,Damascus ,Baghdad Street ",
                    phone:'+963 987 123 987',
                    lastVisit: "11/12/2024 10:20 AM",
                    img: require('@/assets/images/homepage/avatar-04.4c576192.jpg'),
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
