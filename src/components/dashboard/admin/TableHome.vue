<template>
  <div class="tables w-100 d-flex justify-content-around flex-wrap mt-4 mb-4">
    <div class="table-1 rounded rounded-4 shadow shadow-3 mt-4 mb-4">
      <table
        class="w-100 table table-hover table-home align-middle table-responsive caption-top"
      >
        <caption class="text-center p-2 pt-3 pb-1">
          Doctors List
        </caption>
        <thead class="">
          <tr class="">
            <th class="" scope="col" colspan="2">Doctor Name</th>
            <th class="" scope="col">Speciality</th>
            <th class="" scope="col">Reviews</th>
          </tr>
        </thead>
        <tbody>
          <tr class="roww " v-for="doctor in doctors" :key="doctor.id">
            <td class="">
              <img
                :src="doctor.img"
                alt="doctor-image"
                class="table-img"
              />
            </td>
            <td class="">{{ doctor.name }}</td>
            <td class="">{{ doctor.speciality }}</td>
            <td class="" v-html="createRate(doctor.review)"></td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- table Patients -->
    <div class="table-2 rounded rounded-4 shadow shadow-3 mt-4 mb-4">
      <table
        class="w-100 table table-hover tablee align-middle table-responsive caption-top"
      >
        <caption class="text-center p-2 pt-3 pb-1">
          Patients List
        </caption>
        <thead>
          <tr class="head-row">
            <th class="" scope="col" colspan="2">Patient Name</th>
            <th class="" scope="col">Phone</th>
            <th class="" scope="col">Last Appointment</th>
          </tr>
        </thead>
        <tbody>
          <tr class=""  v-for="paitent in paitents" :key="paitent.id">
            <td class="">
              <img
                :src="paitent.img"
                alt="doctor-image"
                class="table-img"
              />
            </td>
            <td class="">{{ paitent.name}}</td>
            <td class="">{{ paitent.phone }}</td>
            <td class="">{{ paitent.lastAppointment }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
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
          review: 2.5,
          img: require('@/assets/images/homepage/avatar-01.85a7d768.jpg')
        },
        {
          id:2,
          name:"Salem Almosalm",
          speciality:"Neurology",
          review: 2.5,
          img: require('@/assets/images/homepage/avatar-01.85a7d768.jpg')
        },
        {
          id:3,
          name:"Salem Almosalm",
          speciality:"Neurology",
          review: 2.5,
          img: require('@/assets/images/homepage/avatar-01.85a7d768.jpg')
        },
        {
          id:4,
          name:"Salem Almosalm",
          speciality:"Neurology",
          review: 2.5,
          img: require('@/assets/images/homepage/avatar-01.85a7d768.jpg')
        },
      ]
    }
  },
  methods: {
    createRate(rateNumber) {
      let fullStar = `<i class="fa-solid fa-star text-warning  full-star"></i>`;
      let halfStar = `<i class="fa-solid fa-star-half-stroke text-warning  half-star"></i>`;
      let emptyStar = ` <i class="fa-regular fa-star text-warning empty-star"></i>`;
      let rate = Math.round(rateNumber * 2) / 2;
      if (rate < 0 || rate > 5) {
        return `<p>Invalid rating</p>`;
      }
      let fullStartsCount = Math.floor(rate);
      let hasHalfStar = rate % 1 !== 0;
      let emptyStarsCount = 5 - fullStartsCount - (hasHalfStar ? 1 : 0);

      return (
        fullStar.repeat(fullStartsCount) +
        (hasHalfStar ? halfStar : "") +
        emptyStar.repeat(emptyStarsCount)
      );
    },
  },
  mounted() {
    console.log(this.createRate(4));
  },
};
</script>

<style scoped>
@media (max-width:1024px){
    .table-1 , .table-2{
        width: 90%;
        
    } 
    .tables {
        flex-direction: column;
        align-items: center ;
    }
}
@media (min-width:1024px) {
    .table-1 , .table-2{
        width: 46%;
    } 
}
.table-1 , .table-2 {
    padding: 1rem;
    white-space: nowrap;
    overflow-x: auto;
    max-height: 30rem;
}

.table-1 table thead tr th ,.table-2 table thead tr th   { 
    background: #e1e0e0;
    text-align: center; 
    padding: 1.5rem;
}
.table-1 table tbody tr td , .table-2 table tbody tr td {
    text-align: center;
    margin: 0rem 1.5rem;
}
</style>
