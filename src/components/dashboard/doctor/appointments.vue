<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-6 col-md-6 col-12">
        <h2 class="text-primary mt-2 sp-title">Appointments</h2>
      </div>
      <div class="col-lg-6 col-md-6 col-12">
        <Tag :value="GetToday()" class="float-lg-end font-kanit" />
      </div>
    </div>
    <hr />
    <Tabs value="0">
      <TabList>
        <Tab value="0" v-slot="slotProps" asChild>
          <div
            :class="['flex items-center gap-2', slotProps.class]"
            @click="slotProps.onClick"
            v-bind="slotProps.a11yAttrs"
          >
            <span class="font-bold whitespace-nowrap">Upcoming</span>
            <Badge
              :value="upcoming.length"
              severity="warn"
              class="font-kanit"
            />
          </div>
        </Tab>
        <Tab value="1" v-slot="slotProps" asChild>
          <div
            :class="['flex items-center gap-2', slotProps.class]"
            @click="slotProps.onClick"
            v-bind="slotProps.a11yAttrs"
          >
            <span class="font-bold whitespace-nowrap">Cancelled</span>
            <Badge :value="upcoming.length" severity="danger" />
          </div>
        </Tab>
        <Tab value="2" v-slot="slotProps" asChild>
          <div
            :class="['flex items-center gap-2', slotProps.class]"
            @click="slotProps.onClick"
            v-bind="slotProps.a11yAttrs"
          >
            <span class="font-bold whitespace-nowrap">Completed</span>
            <Badge :value="upcoming.length" severity="success" />
          </div>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <DataTable
            :value="upcoming"
            removableSort
            scrollable
            paginator
            :rows="10"
          >
            <Column field="code" header="Code" class="font-kanit"></Column>
            <Column field="name" header="Name" sortable>
              <template #body="slotProps">
                <img
                  :src="require('../../../assets/images/homepage/p1.jpg')"
                  width="48"
                  class="rounded"
                />
                <span class="ms-3 font-kanit">{{ slotProps.data.name }}</span>
              </template>
            </Column>
            <Column field="date" header="Date" sortable>
              <template #body="slotProps">
                <h6 class="font-kanit">
                  {{ slotProps.data.date }}
                </h6>
                <Tag :value="slotProps.data.type" rounded />
              </template>
            </Column>
            <Column field="email" header="Info">
              <template #body="slotProps">
                <h6 class="font-kanit font-light font-italic">
                  <i class="fas fa-paper-plane text-primary me-1"></i>
                  {{ slotProps.data.email }}
                </h6>
                <h6 class="font-kanit font-light font-italic">
                  <i class="fas fa-phone text-primary me-1"></i>
                  {{ slotProps.data.phone }}
                </h6>
              </template>
            </Column>
            <Column header="Action">
              <template #body>
                <div class="row align-items-center">
                  <Button
                    icon="pi pi-check"
                    size="small"
                    severity="success"
                    rounded
                    class="me-2 outlined text-success"
                  />

                  <Button
                    icon="pi pi-trash"
                    size="small"
                    severity="danger"
                    rounded
                    class="outlined text-danger"
                    @click="visible = true"
                  />
                </div>
              </template>
            </Column>
          </DataTable>
        </TabPanel>
        <TabPanel value="1">
          <DataTable
            :value="upcoming"
            removableSort
            scrollable
            paginator
            :rows="5"
          >
            <Column field="code" header="Code" class="font-kanit"></Column>
            <Column field="name" header="Name" sortable>
              <template #body="slotProps">
                <img
                  :src="require('../../../assets/images/homepage/p1.jpg')"
                  width="48"
                  class="rounded"
                />
                <span class="ms-3 font-kanit">{{ slotProps.data.name }}</span>
              </template>
            </Column>
            <Column field="date" header="Date" sortable>
              <template #body="slotProps">
                <h6 class="font-kanit">{{ slotProps.data.date }}</h6>
                <Tag :value="slotProps.data.type" rounded />
              </template>
            </Column>

            <Column header="Action">
              <template #body>
                <Button label="View Details" icon="pi pi-eye" />
              </template>
            </Column>
          </DataTable>
        </TabPanel>
        <TabPanel value="2">
          <DataTable
            :value="upcoming"
            removableSort
            scrollable
            paginator
            :rows="5"
          >
            <Column field="code" header="Code" class="font-kanit"></Column>
            <Column field="name" header="Name" sortable>
              <template #body="slotProps">
                <img
                  :src="require('../../../assets/images/homepage/p1.jpg')"
                  width="48"
                  class="rounded"
                />
                <span class="ms-3 font-kanit">{{ slotProps.data.name }}</span>
              </template>
            </Column>
            <Column field="date" header="Date" sortable>
              <template #body="slotProps">
                <h6 class="font-kanit">{{ slotProps.data.date }}</h6>
                <Tag :value="slotProps.data.type" rounded />
              </template>
            </Column>

            <Column header="Action">
              <template #body>
                <Button label="View Details" icon="pi pi-eye" />
              </template>
            </Column>
          </DataTable>
        </TabPanel>
      </TabPanels>
    </Tabs>

    <Dialog v-model:visible="visible" modal class="lg:w-25 md:w-25 sm:w-100">
      <template #header>
        <h5 class="mt-2">
          <i class="pi pi-trash text-danger"></i>
          Confirm Delete
        </h5>
      </template>
      <div>
        <p>Are you sure you want to cancel this appointment?</p>
      </div>
      <div class="float-end">
        <Button
          type="button"
          label="Delete"
          severity="danger"
          icon="pi pi-trash"
          size="small"
        ></Button>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import Tabs from "primevue/tabs";
import TabList from "primevue/tablist";
import Tab from "primevue/tab";
import TabPanels from "primevue/tabpanels";
import TabPanel from "primevue/tabpanel";
import Badge from "primevue/badge";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import Tag from "primevue/tag";
import Dialog from "primevue/dialog";

function GetToday() {
  return new Date().toDateString();
}
</script>

<script>
export default {
  data() {
    return {
      upcoming: [
        {
          id: 1,
          code: "#APT0001",
          name: "Adrian Marshall",
          date: "11 Nov 2024 10:45 AM",
          type: "General",
          email: "adran@info.com",
          phone: "+1 504 368 6874",
        },
        {
          id: 2,
          code: "#APT0002",
          name: "Kelly Stevens",
          date: "15 Nov 2024 10:45 AM",
          type: "General",
          email: "adran@info.com",
          phone: "+1 504 368 6874",
        },
        {
          id: 3,
          code: "#APT0003",
          name: "Samuel Anderson",
          date: "10 Nov 2024 7:00 AM",
          type: "General",
          email: "adran@info.com",
          phone: "+1 504 368 6874",
        },
        {
          id: 4,
          code: "#APT0004",
          name: "Catherine Griffin",
          date: "11 Nov 2024 2:45 PM",
          type: "General",
          email: "adran@info.com",
          phone: "+1 504 368 6874",
        },
        {
          id: 5,
          code: "#APT0005",
          name: "Robert Hutchinson",
          date: "11 Oct 2024 4:45 PM",
          type: "General",
          email: "adran@info.com",
          phone: "+1 504 368 6874",
        },
        {
          id: 6,
          code: "#APT0006",
          name: "Robert Hutchinson",
          date: "11 Oct 2024 4:45 PM",
          type: "General",
          email: "adran@info.com",
          phone: "+1 504 368 6874",
        },
        {
          id: 7,
          code: "#APT0007",
          name: "Robert Hutchinson",
          date: "11 Oct 2024 4:45 PM",
          type: "General",
          email: "adran@info.com",
          phone: "+1 504 368 6874",
        },
        {
          id: 8,
          code: "#APT0008",
          name: "Robert Hutchinson",
          date: "11 Oct 2024 4:45 PM",
          type: "General",
          email: "adran@info.com",
          phone: "+1 504 368 6874",
        },
        {
          id: 9,
          code: "#APT0009",
          name: "Robert Hutchinson",
          date: "11 Oct 2024 4:45 PM",
          type: "General",
          email: "adran@info.com",
          phone: "+1 504 368 6874",
        },
        {
          id: 10,
          code: "#APT0010",
          name: "Robert Hutchinson",
          date: "11 Oct 2024 4:45 PM",
          type: "General",
          email: "adran@info.com",
          phone: "+1 504 368 6874",
        },
      ],
      visible: false,
    };
  },
};
</script>
