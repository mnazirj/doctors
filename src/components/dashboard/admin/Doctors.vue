
    <template>
    <div class="table-continer   d-flex flex-wrap justify-content-center align-content-center shadow shadow-3 ms-auto me-auto pt-4 pb-4 mt-4 mb-4 rounded rounded-4">
        <div class="table-responsive">
            <table class="table table-hover  ">
            <thead>
                <tr class="">
                    <th scope="col" colspan="2">Doctor Name</th>
                    <th scope="col">Specialitie</th>
                    <th scope="col">Join Date</th>
                    <th scope="col">Status</th>
                    <th class="">Actions</th>
                </tr>
            </thead>
            <tbody class="table-group-divider align-middle">
                <tr v-for="doctor in paginatedData" :key="doctor.id">
                    <td><img :src="doctor.img" alt="doctor-image" class="table-img"></td>
                    <td>{{ doctor.name }}</td>
                    <td>{{ doctor.speciality }}</td>
                    <td>{{ doctor.joinDate }}</td>
                    <td><i :class="['pi pi-circle-fill', doctor.status ? 'text-success' : 'text-danger']"></i></td>
                    <td>
                        <button type="button" class="btn btn-primary me-1 ms-1"><i class="pi pi-pen-to-square"></i></button>
                        <button type="button" class="btn btn-danger me-1 ms-1"><i class="pi pi-trash"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
       <Pagination :data="doctors" :itemsPerPage="5" @updatePaginatedData="handlePaginatedDataUpdate" />
       
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
            doctors:[
                {
                    id:1,
                    name:'Mohammad GG',
                    speciality: "Ophthalmologists",
                    joinDate: "11/12/2024",
                    img: require('@/assets//images//homepage/avatar-03.bcd54570.jpg'),
                    status:true,
                },
                {
                    id:2,
                    name:'Mohammad GG',
                    speciality: "Ophthalmologists",
                    joinDate: "11/12/2024",
                    img: require("@/assets/images/homepage/avatar-01.85a7d768.jpg"),
                    status:true,
                },
                {
                    id:3,
                    name:'Mohammad GG',
                    speciality: "Ophthalmologists",
                    joinDate: "11/12/2024",
                    img: require('@/assets//images//homepage/avatar-03.bcd54570.jpg'),
                    status:false,
                },
                {
                    id:4,
                    name:'Mohammad GG',
                    speciality: "Ophthalmologists",
                    joinDate: "11/12/2024",
                    img: require("@/assets/images/homepage/avatar-01.85a7d768.jpg"),
                    status:true,
                },
                {
                    id:5,
                    name:'Mohammad GG',
                    speciality: "Ophthalmologists",
                    joinDate: "11/12/2024",
                    img: require('@/assets/images/homepage/avatar-04.4c576192.jpg'),
                    status:false,
                },
                {
                    id:6,
                    name:'Mohammad GG',
                    speciality: "Ophthalmologists",
                    joinDate: "11/12/2024",
                    img: require("@/assets/images/homepage/avatar-01.85a7d768.jpg"),
                    status:false,
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
