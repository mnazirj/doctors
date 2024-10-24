<template>
  <div class="tables w-100 d-flex justify-content-around flex-wrap mt-4 mb-4">
    <div class="table-1 rounded rounded-4 shadow shadow-3 mt-4 mb-4">
      <table
        class="w-100 table table-hover tablee align-middle table-responsive caption-top"
      >
        <caption class="text-center p-2 pt-3 pb-1">
          Doctors List
        </caption>
        <thead class="">
          <tr class="">
            <th class="" scope="col">Doctor Image</th>
            <th class="" scope="col">Doctor Name</th>
            <th class="" scope="col">Speciality</th>
            <th class="" scope="col">Reviews</th>
          </tr>
        </thead>
        <tbody>
          <tr class="roww table-group-divider">
            <td class="">
              <img
                src="@/assets/images/homepage/avatar-01.85a7d768.jpg"
                alt="doctor-image"
                class="table-img"
              />
            </td>
            <td class="">Mohammad Mahmmoud</td>
            <td class="">Playing In Hearts</td>
            <td class="" v-html="createRate(3.8)"></td>
          </tr>
          <tr class="roww">
            <td class="">
              <img
                src="@/assets/images/homepage/avatar-01.85a7d768.jpg"
                alt="doctor-image"
                class="table-img"
              />
            </td>
            <td class="">Salem Almosalm</td>
            <td class="">Playing In things</td>
            <td class="" v-html="createRate(1.8)"></td>
          </tr>
          <tr class="roww">
            <td class="">
              <img
                src="@/assets/images/homepage/avatar-04.4c576192.jpg"
                alt="doctor-image"
                class="table-img"
              />
            </td>
            <td class="">Sara Alsrsara</td>
            <td class="">Playing In eyes</td>
            <td class="" v-html="createRate(0.5)"></td>
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
            <th class="" scope="col">Patient Image</th>
            <th class="" scope="col">Patient Name</th>
            <th class="" scope="col">Phone</th>
            <th class="" scope="col">Last Appointment</th>
          </tr>
        </thead>
        <tbody>
          <tr class="">
            <td class="">
              <img
                src="@/assets/images/homepage/avatar-01.85a7d768.jpg"
                alt="doctor-image"
                class="table-img"
              />
            </td>
            <td class="">Mohammad Mahmmoud</td>
            <td class="">+963 958 147 687</td>
            <td class="">11/12/2024 10:00 AM</td>
          </tr>
          <tr class="">
            <td class="">
              <img
                src="@/assets/images/homepage/avatar-04.4c576192.jpg"
                alt="doctor-image"
                class="table-img"
              />
            </td>
            <td class="">Salem Almosalm</td>
            <td class="">+963 142 145 897</td>
            <td class="">4/8/2023 02:00 PM</td>
          </tr>
          <tr class="">
            <td class="">
              <img
                src="@/assets/images/homepage/avatar-01.85a7d768.jpg"
                alt="doctor-image"
                class="table-img"
              />
            </td>
            <td class="">Sara Alsrsara</td>
            <td class="">+963 978 895 159</td>
            <td class="">30/1/2023 01:00 PM</td>
          </tr>
          <tr class="">
            <td class="">
              <img
                src="@/assets/images/homepage/avatar-01.85a7d768.jpg"
                alt="doctor-image"
                class="table-img"
              />
            </td>
            <td class="">Sara Alsrsara</td>
            <td class="">+963 978 895 159</td>
            <td class="">30/1/2023 01:00 PM</td>
          </tr>
          <tr class="">
            <td class="">
              <img
                src="@/assets/images/homepage/avatar-01.85a7d768.jpg"
                alt="doctor-image"
                class="table-img"
              />
            </td>
            <td class="">Sara Alsrsara</td>
            <td class="">+963 978 895 159</td>
            <td class="">30/1/2023 01:00 PM</td>
          </tr>
          <tr class="">
            <td class="">
              <img
                src="@/assets/images/homepage/avatar-01.85a7d768.jpg"
                alt="doctor-image"
                class="table-img"
              />
            </td>
            <td class="">Sara Alsrsara</td>
            <td class="">+963 978 895 159</td>
            <td class="">30/1/2023 01:00 PM</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
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
