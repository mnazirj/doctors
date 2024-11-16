<template>
  <div class=" h-100 d-flex flex-wrap justify-content-between">
    <!-- First Table (Doctors table) -->
    <div class="table-section  w-47 d-flex flex-column flex-wrap ">
      <span class="text-center w-100 mb-2 mt-1">Doctors List </span>
      <div class=" table-responsive w-100">
          <table class="table table-hover align-middle text-center">
            <thead class="" >
              <tr>
                <th scope=" col">Doctor Name</th>
                <th scope=" col">Speciality</th>
                <th scope=" col">Reviews</th>
              </tr>
            </thead>
            <tbody class="">
              <tr v-for="doctor in doctors" :key="doctor.id">
                <td>
                  <img :src="doctor.img" alt="doctor-image" class="table-img me-2">
                  <span>{{ doctor.name }}</span>
                </td>
                <td>{{ doctor.speciality }}</td>
                <td class="review">
                  <Rating  v-model="doctor.review" readonly />
                </td>
              </tr>
            </tbody>
          </table>
      </div>
      
    </div>
    <!-- Second Table (Paitents table) -->
    <div class="table-section  w-47 d-flex flex-column flex-wrap ">
      <span class="text-center w-100 mb-2 mt-1">Paitents List </span>
      <div class=" table-responsive w-100">
          <table class="table table-hover align-middle">
            <thead class="" >
              <tr>
                <th scope=" col">Paitent Name</th>
                <th scope=" col">Phone</th>
                <th scope=" col">Last Date</th>
              </tr>
            </thead>
            <tbody class="">
              <tr v-for="paitent in paitents" :key="paitent.id">
                <td>
                  <img :src="paitent.img" alt="doctor-image" class="table-img me-2">
                  <span>{{ paitent.name }}</span>
                </td>
                <td>{{ paitent.phone }}</td>
                <td>{{ paitent.lastAppointment }}</td>
              </tr>
            </tbody>
          </table>
      </div>
      
    </div>
  </div>  
  
</template>

<script>
import Rating from 'primevue/rating';
export default {
  components:{
    Rating,
  },
  data() {
    return {
      paitents:[
          {
            id:1,
            name: "	Mohammad Mahmmoud",
            phone:"+963 978 521 654",
            lastAppointment: "11/10/2024",
            img: require('@/assets/images/homepage/avatar-01.85a7d768.jpg')
          },
          {
            id:2,
            name: "	Mohammad Mahmmoud",
            phone:"+963 978 521 654",
            lastAppointment: "11/10/2024",
            img: require('@/assets/images/homepage/avatar-01.85a7d768.jpg')
          },
          {
            id:3,
            name: "	Mohammad Mahmmoud",
            phone:"+963 978 521 654",
            lastAppointment: "11/10/2024",
            img: require('@/assets/images/homepage/avatar-01.85a7d768.jpg')
          },
          {
            id:4,
            name: "	Mohammad Mahmmoud",
            phone:"+963 978 521 654",
            lastAppointment: "11/10/2024",
            img: require('@/assets/images/homepage/avatar-01.85a7d768.jpg')
          },
          {
            id:5,
            name: "	Mohammad Mahmmoud",
            phone:"+963 978 521 654",
            lastAppointment: "11/10/2024",
            img: require('@/assets/images/homepage/avatar-01.85a7d768.jpg')
          },
        ],
        doctors:[
          {
            id:1,
            name:"Salem Almosalm",
            speciality:"Neurology",
            review: 4.8,
            img: require('@/assets/images/homepage/avatar-01.85a7d768.jpg')
          },
          {
            id:2,
            name:"Salem Almosalm",
            speciality:"Neurology",
            review: 4.3,
            img: require('@/assets/images/homepage/avatar-01.85a7d768.jpg')
          },
          {
            id:3,
            name:"Salem Almosalm",
            speciality:"Neurology",
            review: 3.4,
            img: require('@/assets/images/homepage/avatar-01.85a7d768.jpg')
          },
          {
            id:4,
            name:"Salem Almosalm",
            speciality:"Neurology",
            review: 2.8,
            img: require('@/assets/images/homepage/avatar-01.85a7d768.jpg')
          },
        ]
    }
  },
}
</script>

<style scoped>
@media (max-width: 786px){
  .table-section {
    width: 95%;
    margin-top: 1rem;
  }
}

td {
  padding-left: 0.7rem;
  padding-right: 0.7rem;
}
</style>

