<template>
  <div class="container">
    <DataView :value="Search()" paginator :rows="row" :layout="layout">
      <template #header>
        <div class="flex justify-content-between">
          <h3 class="sp-title">My Patients List</h3>
          <SelectButton
            v-model="value"
            :options="options"
            :allowEmpty="false"
            @change="SelectViewLayout(value)"
          >
            <template #option="{ option }">
              <i :class="[option === 'list' ? 'pi pi-bars' : 'pi pi-table']" />
            </template>
          </SelectButton>
        </div>
        <div class="mt-2">
          <InputGroup>
            <InputGroupAddon
              class="border-primary bg-primary text-white border-end-0"
            >
              <i class="fas fa-search"></i>
            </InputGroupAddon>
            <FloatLabel variant="on">
              <InputText
                v-model="keyword"
                class="border-primary border-start-0"
              />
              <label>Search Patinet</label>
            </FloatLabel>
          </InputGroup>
        </div>
      </template>
      <template #list="slotProps">
        <div class="row">
          <div
            class="col-12"
            v-for="(item, index) in slotProps.items"
            :key="index"
          >
            <Card class="border-color outlined not-hover-card">
              <template #content>
                <div class="row d-flex align-items-center justify-content-end">
                  <div class="col-lg-1 col-md-1 col-12 text-center">
                    <img
                      :src="
                        `https://avatar.iran.liara.run/public/?username=` +
                        item.name
                      "
                      class="rounded"
                      width="100"
                      height="100"
                    />
                  </div>
                  <div
                    class="col-lg-2 col-md-2 col-12 flex-1 text-lg-start text-md-start text-center"
                  >
                    <small class="text-primary"
                      >#Apt00{{ item.index + 1 }}</small
                    >
                    <h5>{{ item.name }}</h5>
                    <div
                      class="d-flex justify-content-center justify-content-lg-start justify-content-md-start"
                    >
                      <small class="text-secondary font-12"
                        >Age: {{ item.age }}</small
                      >
                      <Divider layout="vertical" />
                      <small class="text-secondary font-12">{{
                        item.gender
                      }}</small>
                      <Divider layout="vertical" />
                      <small class="text-secondary font-12">{{
                        item.blood
                      }}</small>
                    </div>
                  </div>
                  <div
                    class="col-lg-4 col-md-4 col-12 text-lg-start text-md-start text-center"
                  >
                    <div class="bg-body-tertiary px-3 py-3 rounded">
                      <h6>
                        <i class="fas fa-clock text-primary"></i>
                        <b class="ms-1">11 Nov 2024 10.45 AM</b>
                      </h6>
                      <h6>
                        <i class="fas fa-location text-primary"></i>
                        <b class="ms-1">{{ item.address }}</b>
                      </h6>
                    </div>
                  </div>
                </div>
              </template>
            </Card>
          </div>
        </div>
      </template>

      <template #grid="slotProps">
        <div class="row">
          <div
            class="col-lg-4 col-md-4 col-12"
            v-for="(item, index) in slotProps.items"
            :key="index"
          >
            <Card class="border-color outlined not-hover-card">
              <template #title>
                <div class="row">
                  <div class="col-4">
                    <img
                      :src="
                        `https://avatar.iran.liara.run/public/?username=` +
                        item.name
                      "
                      class="rounded"
                      width="100"
                      height="100"
                    />
                  </div>
                  <div class="col">
                    <small class="text-primary"
                      >#Apt00{{ item.index + 1 }}</small
                    >
                    <h5>{{ item.name }}</h5>
                    <div class="flex">
                      <small class="text-secondary font-12"
                        >Age: {{ item.age }}</small
                      >
                      <Divider layout="vertical" />
                      <small class="text-secondary font-12">{{
                        item.gender
                      }}</small>
                      <Divider layout="vertical" />
                      <small class="text-secondary font-12">{{
                        item.blood
                      }}</small>
                    </div>
                  </div>
                </div>
              </template>
              <template #content>
                <div class="bg-body-tertiary px-3 py-3 rounded">
                  <h6>
                    <i class="fas fa-clock text-primary"></i>
                    <b class="ms-1">11 Nov 2024 10.45 AM</b>
                  </h6>
                  <h6>
                    <i class="fas fa-location text-primary"></i>
                    <b class="ms-1">{{ item.address }}</b>
                  </h6>
                </div>
                <hr />
              </template>
              <template #footer>
                <h6 class="font-14">
                  <i class="fas fa-calendar"></i>
                  Last Booking 27 Feb 2024
                </h6>
              </template>
            </Card>
            <Divider />
          </div>
        </div>
      </template>
    </DataView>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Button from "primevue/button";
import Card from "primevue/card";
import Divider from "primevue/divider";
import DataView from "primevue/dataview";
import SelectButton from "primevue/selectbutton";
import InputGroup from "primevue/inputgroup";
import InputGroupAddon from "primevue/inputgroupaddon";
import InputText from "primevue/inputtext";
import FloatLabel from "primevue/floatlabel";

//Patients data
const patients = ref([
  {
    index: 0,
    age: 23,
    blood: "AB-",
    name: "Blanchard Savage",
    gender: "male",
    address: " Cresaptown, Rhode Island",
  },
  {
    index: 1,
    age: 37,
    blood: "A-",
    name: "Pam Mullen",
    gender: "female",
    address: " Bluffview, Massachusetts",
  },
  {
    index: 2,
    age: 20,
    blood: "O-",
    name: "Rhonda Walker",
    gender: "female",
    address: " Finzel, Montana",
  },
  {
    index: 3,
    age: 25,
    blood: "AB-",
    name: "Benson Mckinney",
    gender: "male",
    address: " Homeworth, Idaho",
  },
  {
    index: 4,
    age: 32,
    blood: "B+",
    name: "Bean Harrell",
    gender: "male",
    address: " Wells, Hawaii",
  },
  {
    index: 5,
    age: 31,
    blood: "A-",
    name: "Beach Roy",
    gender: "male",
    address: " Ruffin, Alabama",
  },
  {
    index: 6,
    age: 23,
    blood: "AB+",
    name: "Schwartz Hicks",
    gender: "male",
    address: " Retsof, Virgin Islands",
  },
  {
    index: 7,
    age: 34,
    blood: "A-",
    name: "Adriana Mejia",
    gender: "female",
    address: " Bluetown, Arizona",
  },
  {
    index: 8,
    age: 33,
    blood: "B-",
    name: "Jenna Russell",
    gender: "female",
    address: " Welda, Utah",
  },
  {
    index: 9,
    age: 33,
    blood: "A+",
    name: "Rutledge Reid",
    gender: "male",
    address: " Sardis, Kansas",
  },
  {
    index: 10,
    age: 37,
    blood: "B+",
    name: "Clements Britt",
    gender: "male",
    address: " Westwood, Vermont",
  },
  {
    index: 11,
    age: 40,
    blood: "B+",
    name: "Burnett Houston",
    gender: "male",
    address: " Adelino, Tennessee",
  },
  {
    index: 12,
    age: 22,
    blood: "B+",
    name: "Madge Stevens",
    gender: "female",
    address: " Chamizal, Louisiana",
  },
  {
    index: 13,
    age: 25,
    blood: "A-",
    name: "Delia Moss",
    gender: "female",
    address: " Chaparrito, Arkansas",
  },
  {
    index: 14,
    age: 32,
    blood: "A+",
    name: "Eliza Crane",
    gender: "female",
    address: " Collins, Palau",
  },
  {
    index: 15,
    age: 37,
    blood: "O+",
    name: "Sykes Oliver",
    gender: "male",
    address: " Martinsville, Illinois",
  },
  {
    index: 16,
    age: 33,
    blood: "AB-",
    name: "Bernard Foley",
    gender: "male",
    address: " Calverton, Delaware",
  },
  {
    index: 17,
    age: 31,
    blood: "O-",
    name: "Aimee Nicholson",
    gender: "female",
    address: " Cashtown, South Carolina",
  },
  {
    index: 18,
    age: 20,
    blood: "A-",
    name: "Miriam Cantrell",
    gender: "female",
    address: " Bath, New York",
  },
  {
    index: 19,
    age: 33,
    blood: "AB-",
    name: "Castro Hooper",
    gender: "male",
    address: " Lafferty, Kentucky",
  },
]);

//number of row to display based on layout
const row = ref(6);
//layout value => default is grid
const layout = ref("grid");
//layout options
const options = ref(["list", "grid"]);
//value of current layout
const value = ref("grid");
//value of search keyword
const keyword = ref("");

//Functuion to change layout
function SelectViewLayout(view) {
  //check if view grid so change row display into 9 items else only 5 items will displayed
  view == "grid" ? (row.value = 6) : (row.value = 5);
  //changing the layout value into new layout choosed
  layout.value = view;
}
//Function to search for patient based on his name
function Search() {
  var data; //store result
  //filter the patients array and get the records that match the input name then store it in data
  data = patients.value.filter((i) =>
    //using lowercase string to avoid any conflit from typing
    i.name.toLocaleLowerCase().includes(keyword.value.toLocaleLowerCase())
  );
  //check if data is null then return the patient array else return the filtered array
  return data == null ? patients : data;
}
</script>
