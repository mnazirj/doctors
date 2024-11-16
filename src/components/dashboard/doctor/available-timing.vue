<template>
  <div class="container">
    <h1 class="sp-title">Available Timings</h1>
    <hr />
    <p>Please Select Available days</p>
    <div class="d-flex row mb-2 gap-4 justify-content-start">
      <Button
        v-for="day in Days"
        :key="day.value"
        @click="value = day.value"
        :label="day.name"
        :outlined="value !== day.value"
        class="col-lg-1 col-md-1 col-12"
      />
    </div>
    <Tabs v-model:value="value">
      <TabPanels>
        <TabPanel v-for="day in Days" :key="day.value" :value="day.value">
          <Card unstyled class="shadow p-4 rounded border-color col">
            <template #title>
              <div
                class="d-flex row justify-content-lg-between justify-content-md-between justify-content-center"
              >
                <h2
                  class="font-kanit text-center col-lg-auto col-md-auto col-12"
                >
                  {{ day.name }}
                </h2>
                <div class="d-flex row gap-2 col-lg-auto col-md-auto col-12">
                  <Button
                    label="Add Slots"
                    icon="pi pi-plus"
                    class="col-lg-auto col-md-auto col-12"
                    outlined
                    @click="showAddTime(day.name)"
                  />
                  <Button
                    label="Delete All"
                    icon="pi pi-trash"
                    severity="danger"
                    class="col-lg-auto col-md-auto col-12"
                    outlined
                    @click="
                      () => {
                        currentDay = day.name;
                        deleteAll = true;
                      }
                    "
                  />
                </div>
              </div>
              <hr />
            </template>

            <template #content>
              <div class="d-flex row gap-2">
                <Chip
                  v-for="time in day.time"
                  :key="time"
                  :label="time"
                  class="outlined not-hover col-auto"
                  icon="fas fa-clock"
                  :ref="items"
                  removable
                  @remove="removeTime({ day: day.name, time: [time] })"
                />
              </div>
            </template>
          </Card>
        </TabPanel>
        <Button
          v-if="show"
          label="Delete Time"
          severity="danger"
          icon="pi pi-trash"
          class="mt-2 float-end"
          @click="deleteTime = true"
        />
      </TabPanels>
    </Tabs>

    <Dialog
      v-model:visible="newTime"
      modal
      header="Appointment Details"
      class="col-lg-4 col-md-4 col-12"
    >
      <FloatLabel variant="on" class="mt-2">
        <DatePicker
          id="datepicker-timeonly"
          v-model="time"
          timeOnly
          hourFormat="12"
          fluid
          showIcon
          iconDisplay="input"
          variant="filled"
        >
          <template #inputicon="slotProps">
            <i class="pi pi-clock" @click="slotProps.clickCallback" />
          </template>
        </DatePicker>
        <label for="on_timechoose">Select Time</label>
      </FloatLabel>
      <Button
        label="Save"
        icon="pi pi-check"
        class="float-end mt-3"
        severity="success"
        :disabled="time == null"
        @click="addNewTime()"
      />
    </Dialog>

    <Dialog
      v-model:visible="deleteTime"
      modal
      header="Confirm Delete"
      class="col-lg-4 col-md-4 col-12"
    >
      <p>Are you sure you want to delete the following timings?</p>

      <dl v-for="item in _timeRemove" :key="item.day">
        <dt class="text-primary">
          <i class="fas fa-calendar-day"></i>
          {{ item.day }}
        </dt>
        <ul>
          <li
            v-for="time in item.time"
            :key="time"
            class="font-italic font-kanit text-second"
          >
            {{ time }}
          </li>
        </ul>
      </dl>
      <Button
        label="Delete"
        icon="pi pi-trash"
        class="float-end mt-3"
        severity="danger"
      />
    </Dialog>

    <Dialog
      v-model:visible="deleteAll"
      modal
      header="Danger Zone"
      class="col-lg-4 col-md-4 col-12"
    >
      <h6>
        <i class="fas fa-info-circle text-primary"></i>
        Are you sure you want to delete all appointments for
        <i> {{ currentDay }}</i
        >?
      </h6>

      <Button
        label="Delete All"
        icon="pi pi-trash"
        class="float-end mt-3"
        severity="danger"
      />
    </Dialog>
  </div>
</template>

<script setup>
import Tabs from "primevue/tabs";
import TabPanels from "primevue/tabpanels";
import TabPanel from "primevue/tabpanel";
import Button from "primevue/button";
import Card from "primevue/card";
import Chip from "primevue/chip";
import Dialog from "primevue/dialog";
import DatePicker from "primevue/datepicker";
import FloatLabel from "primevue/floatlabel";
import { ref } from "vue";

const value = ref("0");
//ref for new time dialog visibility
const newTime = ref(false);
//ref for delete time dialog visibility
const deleteTime = ref(false);
//ref for delete all time dialog visibility
const deleteAll = ref(false);
const Days = [
  {
    name: "Monday",
    value: "0",
    time: ["10:00 AM", "11:45 AM", "2:00 PM"],
  },
  { name: "Tuesday", value: "1", time: ["10:00 AM", "2:00 PM"] },
  {
    name: "Wednesday",
    value: "2",
    time: ["10:00 AM", "11:45 AM"],
  },
  {
    name: "Thursday",
    value: "3",
    time: [
      "09:00 AM",
      "10:00 AM",
      "12:45 PM",
      "2:15 PM",
      "05:00 PM",
      "06:00 PM",
      "07:00 PM",
    ],
  },
  { name: "Friday", value: "4", time: ["09:00 AM", "9:45 AM", "2:00 PM"] },
  { name: "Saturday", value: "5", time: ["08:00 AM", "8:45 AM", "2:00 PM"] },
  { name: "Sunday", value: "6", time: ["11:00 AM", "7:45 AM", "2:00 PM"] },
];
//ref to store selected time
const time = ref();
//Array to store deleted time
var _timeRemove = [];
//JSON array to store new time
var _timeAdd = null;
//Store current day to add new time to.
var currentDay = null;
//ref to toggle delete time button
const show = ref(false);

//Toggle Add new time dialog
function showAddTime(payload) {
  currentDay = payload; //store the date key from opened tab
  newTime.value = true; // set visibility to true
}

//API CALL function to store new time added
function addNewTime() {
  //push day key and time to the new time array
  _timeAdd = {
    day: currentDay,
    clock: new Date(time.value).toLocaleTimeString(undefined, {
      timeStyle: "short",
    }),

    //Calling the API
  };
}
function removeTime(payload) {
  //Checking if time already in removing array
  let item = _timeRemove.find((i) => i.day == payload.day);
  //if item found
  if (item) {
    //find the index of item in the remove array and then push only the time
    _timeRemove[_timeRemove.indexOf(item)].time.push(...payload.time);
    Days[Days.indexOf(Days.find((i) => i.name == payload.day))].count--;
  } else {
    //if item not found then push the whole payload to remove array
    _timeRemove.push({ ...payload });
  }
  show.value = true;
}
</script>
