<template>
   
   
    <div class="table-continer   d-flex flex-wrap justify-content-center align-content-center shadow shadow-3 ms-auto me-auto pt-4 pb-4 mt-4 mb-4 rounded rounded-4">
        <div class="d-flex justify-content-center align-items-center w-100 mt-3 mb-3">
            <input type="text" name="search" id="search" class=" form-control search" placeholder="Search ..." v-model="searchInput" @input="resetToFirstPage">
        </div>
        <div class="table-responsive">
            <table class="table table-hover  ">
            <thead>
                <tr class="">
                    <th scope="col">Patient Name</th>
                    <th scope="col">Doctor Name</th>
                    <th scope="col">Specialitie</th>
                    <th scope="col">Date</th>
                    <th scope="col">Status</th>
                    <th class="">Actions</th>
                </tr>
            </thead>
            <tbody class="table-group-divider align-middle">
                <tr v-for="appointment in paginatedData" :key="appointment.id">
                    <td>{{ appointment.patientName }}</td>
                    <td>{{ appointment.doctorName }}</td>
                    <td>{{ appointment.specialitie }}</td>
                    <td>{{ appointment.date }}</td>
                    <td><i :class="['pi pi-circle-fill', appointment.status ? 'text-success' : 'text-danger']"></i></td>
                    <td>
                        <button type="button" class="btn btn-primary me-1 ms-1"><i class="pi pi-pen-to-square"></i></button>
                        <button type="button" class="btn btn-danger me-1 ms-1"><i class="pi pi-trash"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
       <Pagination :data="filteredData" :itemsPerPage="5" @updatePaginatedData="handlePaginatedDataUpdate" ref="pagination" />
       
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
            searchInput: '',
            paginatedData:[],
            appointments:[
                {
                    id:1,
                    patientName:'Mohammad Mahmmoud',
                    doctorName:'Ahmad AlAhmad',
                    specialitie:'Playing in Hearts',
                    date: '10/1/2024 10:00 AM',
                    status:true,
                },
                {
                    id:2,
                    patientName:'Omar Mahmmoud',
                    doctorName:'Ahmad AlAhmad',
                    specialitie:'Playing in Hearts',
                    date: '10/1/2024 10:00 AM',
                    status:false,
                },
                {
                    id:3,
                    patientName:'Samer Mahmmoud',
                    doctorName:'Ahmad AlAhmad',
                    specialitie:'Playing in Hearts',
                    date: '10/1/2024 10:00 AM',
                    status:true,
                },
                {
                    id:4,
                    patientName:'Sami Mahmmoud',
                    doctorName:'Ahmad AlAhmad',
                    specialitie:'Playing in Hearts',
                    date: '10/1/2024 10:00 AM',
                    status:true,
                },
                {
                    id:5,
                    patientName:'Houda Mahmmoud',
                    doctorName:'Ahmad AlAhmad',
                    specialitie:'Playing in Hearts',
                    date: '10/1/2024 10:00 AM',
                    status:true,
                },
                {
                    id:6,
                    patientName:'Haddel Mahmmoud',
                    doctorName:'Ahmad AlAhmad',
                    specialitie:'Playing in Hearts',
                    date: '10/1/2024 10:00 AM',
                    status:true,
                },
                {
                    id:7,
                    patientName:'Ammar Mahmmoud',
                    doctorName:'Ahmad AlAhmad',
                    specialitie:'Playing in Hearts',
                    date: '10/1/2024 10:00 AM',
                    status:true,
                },
                {
                    id:8,
                    patientName:'SOso Mahmmoud',
                    doctorName:'Ahmad AlAhmad',
                    specialitie:'Playing in Hearts',
                    date: '10/1/2024 10:00 AM',
                    status:true,
                },
                {
                    id:9,
                    patientName:'Sara Mahmmoud',
                    doctorName:'Ahmad AlAhmad',
                    specialitie:'Playing in Hearts',
                    date: '10/1/2024 10:00 AM',
                    status:true,
                },
                {
                    id:10,
                    patientName:'Samer Mahmmoud',
                    doctorName:'Ahmad AlAhmad',
                    specialitie:'Playing in Hearts',
                    date: '10/1/2024 10:00 AM',
                    status:true,
                },
                {
                    id:11,
                    patientName:'Slark Mahmmoud',
                    doctorName:'Ahmad AlAhmad',
                    specialitie:'Playing in Hearts',
                    date: '10/1/2024 10:00 AM',
                    status:true,
                },
                {
                    id:12,
                    patientName:'Doom Mahmmoud',
                    doctorName:'Ahmad AlAhmad',
                    specialitie:'Playing in Hearts',
                    date: '10/1/2024 10:00 AM',
                    status:true,
                },
                {
                    id:13,
                    patientName:'TA Mahmmoud',
                    doctorName:'Ahmad AlAhmad',
                    specialitie:'Playing in Hearts',
                    date: '10/1/2024 10:00 AM',
                    status:true,
                },
                {
                    id:14,
                    patientName:'AntiMage Mahmmoud',
                    doctorName:'Ahmad AlAhmad',
                    specialitie:'Playing in Hearts',
                    date: '10/1/2024 10:00 AM',
                    status:false,
                },
                {
                    id:15,
                    patientName:'Lina Mahmmoud',
                    doctorName:'Ahmad AlAhmad',
                    specialitie:'Playing in Hearts',
                    date: '10/1/2024 10:00 AM',
                    status:true,
                },
                {
                    id:16,
                    patientName:'Luna Mahmmoud',
                    doctorName:'Ahmad AlAhmad',
                    specialitie:'Playing in Hearts',
                    date: '10/1/2024 10:00 AM',
                    status:false,
                },
                {
                    id:17,
                    patientName:'Lanaya Mahmmoud',
                    doctorName:'Ahmad AlAhmad',
                    specialitie:'Playing in Hearts',
                    date: '10/1/2024 10:00 AM',
                    status:false,
                },
                {
                    id:18,
                    patientName:'Jamil Mahmmoud',
                    doctorName:'Ahmad AlAhmad',
                    specialitie:'Playing in Hearts',
                    date: '10/1/2024 10:00 AM',
                    status:false,
                },
                {
                    id:19,
                    patientName:'Jamal Mahmmoud',
                    doctorName:'Ahmad AlAhmad',
                    specialitie:'Playing in Hearts',
                    date: '10/1/2024 10:00 AM',
                    status:false,
                },
                {
                    id:20,
                    patientName:'Jasem Mahmmoud',
                    doctorName:'Ahmad AlAhmad',
                    specialitie:'Playing in Hearts',
                    date: '10/1/2024 10:00 AM',
                    status:false,
                },
                {
                    id:21,
                    patientName:'Ghassan Mahmmoud',
                    doctorName:'Ahmad AlAhmad',
                    specialitie:'Playing in Hearts',
                    date: '10/1/2024 10:00 AM',
                    status:false,
                },
                {
                    id:22,
                    patientName:'Ghiath Mahmmoud',
                    doctorName:'Ahmad AlAhmad',
                    specialitie:'Playing in Hearts',
                    date: '10/1/2024 10:00 AM',
                    status:false,
                },
                {
                    id:23,
                    patientName:'Mhmd Mahmmoud',
                    doctorName:'Ahmad AlAhmad',
                    specialitie:'Playing in Hearts',
                    date: '28/5/2010 10:00 AM',
                    status:false,
                },
                {
                    id:24,
                    patientName:'Dina Mahmmoud',
                    doctorName:'Ahmad AlAhmad',
                    specialitie:'Playing in Hearts',
                    date: '10/1/2022 10:00 AM',
                    status:false,
                },
                {
                    id:25,
                    patientName:'Dana Mahmmoud',
                    doctorName:'Ahmad AlAhmad',
                    specialitie:'Playing in Hearts',
                    date: '10/1/2024 10:00 AM',
                    status:false,
                },
                {
                    id:26,
                    patientName:'DOdo Mahmmoud',
                    doctorName:'Ahmad AlAhmad',
                    specialitie:'Playing in Hearts',
                    date: '10/1/2024 10:00 AM',
                    status:false,
                },
                {
                    id:27,
                    patientName:'Bo Mahmmoud',
                    doctorName:'Ahmad AlAhmad',
                    specialitie:'Playing in Hearts',
                    date: '25/4/2023 10:00 AM',
                    status:false,
                },
                {
                    id:28,
                    patientName:'blabblab Mahmmoud',
                    doctorName:'Ahmad AlAhmad',
                    specialitie:'Playing in Hearts',
                    date: '10/1/2024 10:00 AM',
                    status:false,
                },
                {
                    id:29,
                    patientName:'Mohammad Mahmmoud',
                    doctorName:'Ahmad AlAhmad',
                    specialitie:'Playing in Hearts',
                    date: '10/2/2024 10:00 AM',
                    status:false,
                },
                {
                    id:30,
                    patientName:'Mohammad Mahmmoud',
                    doctorName:'Ahmad AlAhmad',
                    specialitie:'Playing in Hearts',
                    date: '12/1/2024 10:00 AM',
                    status:false,
                },
                {
                    id:31,
                    patientName:'Mohammad Mahmmoud',
                    doctorName:'Ahmad AlAhmad',
                    specialitie:'Playing in Hearts',
                    date: '10/1/2024 10:00 AM',
                    status:false,
                },
            ],
        }
    },
    computed:{
        filteredData(){
            if(!this.searchInput){
                return this.appointments;
            }
            return this.appointments.filter((item)=> 
                item.patientName.toLowerCase().includes(this.searchInput.toLowerCase()) ||
                item.doctorName.toLowerCase().includes(this.searchInput.toLowerCase()) ||
                item.specialitie.toLowerCase().includes(this.searchInput.toLowerCase()) ||
                String(item.date).includes(this.searchInput) ||
                String(item.status).includes(this.searchInput)
            );
        }
    },
    methods:{
        resetToFirstPage(){
            this.$refs.pagination.currentPage = 1;
        }, 
        handlePaginatedDataUpdate(newPaginatedData){
            this.paginatedData = newPaginatedData;
        }
    }
}
</script>