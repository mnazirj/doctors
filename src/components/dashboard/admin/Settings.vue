<template>
    <div class="settings-continer d-flex justify-content-center p-3 pe-5 m-auto mt-3 mb-2 white-space-nowrap  ">
        <div class="d-flex flex-column flex-wrap w-75 ">
            <div class=" d-flex flex-wrap justify-content-between align-items-center w-100 m-1 mb-2 me-3 ms-3 h-fit">
                <p>When Delete Ask me </p>
                <ToggleSwitch v-model="options.deleteAsk" />
                <!-- <div :class="['toggle-switch rounded-pill  d-flex align-items-center cursor-pointer' , options.deleteAsk ? 'bg-success' :'bg-danger' ]" @click="toggle('deleteAsk')">
                    <div class="toggle-circle rounded-circle bg-light m-1" :style="{ transform: options.deleteAsk ? 'translateX(1.5rem)' : 'translateX(0)' }"></div>
                </div> -->
            </div>
            <div class=" d-flex flex-wrap justify-content-between align-items-center w-100 m-1 mb-2 me-3 ms-3 h-fit">
                <p>Dark Mode </p>
                <ToggleSwitch v-model="options.darkMode" />
                <!-- <div :class="['toggle-switch rounded-pill  d-flex align-items-center cursor-pointer' , options.darkMode ? 'bg-success' :'bg-danger' ]" @click="toggle('darkMode')">
                    <div class="toggle-circle rounded-circle bg-light m-1" :style="{ transform: options.darkMode ? 'translateX(1.5rem)' : 'translateX(0)' }"></div>
                </div> -->
            </div>
            <div class=" d-flex flex-wrap justify-content-between align-items-center w-100 m-1 mb-2 me-3 ms-3 h-fit">
                <p>Email Notifications </p>
                <!-- <div :class="['toggle-switch rounded-pill  d-flex align-items-center cursor-pointer' , options.emailNotifcation ? 'bg-success' :'bg-danger' ]" @click="toggle('emailNotifcation')">
                    <div class="toggle-circle rounded-circle bg-light m-1" :style="{ transform: options.emailNotifcation ? 'translateX(1.5rem)' : 'translateX(0)' }"></div>
                </div> -->
                <ToggleSwitch v-model="options.emailNotifcation" />
            </div>
        </div>
    </div>
    
</template>

<script>
import ToggleSwitch from 'primevue/toggleswitch';
export default {
    components:{
        ToggleSwitch,
    },
    data() {
        return {
            options: {
                deleteAsk: true,
                darkMode:false,
                emailNotifcation:false,
            },
        }
    },
    methods:{
        // toggle(toggleTarget){
        //     this.options[toggleTarget] = !this.options[toggleTarget];
        // }
    },
}
</script>

<style scoped>
::v-deep .p-toggleswitch-slider{
    background:#c6c6c6 ;
}
::v-deep .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
    /* background: #16a34a; */
    background: #2563eb;
}
::v-deep .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
    background:#959595;
}
::v-deep .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
    background: #1c4cb4;;
}


/* .settings-continer .setting{
    height: 10rem;
} */
/* .toggle-switch{
    width: 3rem;
    min-width: 3rem;
    height: 1.5rem;
    min-height: 1.5rem;
    
}
.toggle-circle{
    width: 1rem;
    min-width: 1rem;
    height: 1rem;
    min-height: 1rem;
    transition: transform 0.4s ease;
} */
</style>