<template>
    <div class="settings-continer d-flex justify-content-center p-4 m-auto mt-3 mb-2 rounded-3 shadow-3 ">
        <div class="d-flex flex-column  flex-wrap  w-75">
            <div class=" d-flex justify-content-between align-items-center w-100 m-1 mb-2 me-3 ms-3 h-fit">
                <p>When Delete Ask me </p>
                <div :class="['toggle-switch rounded-pill  d-flex align-items-center cursor-pointer' , toggles.deleteOption ? 'bg-success' :'bg-danger' ]" @click="toggle('deleteOption')">
                    <div class="toggle-circle rounded-circle bg-light m-1" :style="{ transform: toggles.deleteOption ? 'translateX(1.5rem)' : 'translateX(0)' }"></div>
                </div>
            </div>
            <div class=" d-flex justify-content-between align-items-center w-100 m-1 mb-2 me-3 ms-3 h-fit">
                <p>Dark Mode </p>
                <div :class="['toggle-switch rounded-pill  d-flex align-items-center cursor-pointer' , toggles.darkOption ? 'bg-success' :'bg-danger' ]" @click="toggle('darkOption')">
                    <div class="toggle-circle rounded-circle bg-light m-1" :style="{ transform: toggles.darkOption ? 'translateX(1.5rem)' : 'translateX(0)' }"></div>
                </div>
            </div>
            <div class=" d-flex justify-content-between align-items-center w-100 m-1 mb-2 me-3 ms-3 h-fit">
                <p>Email Notifications </p>
                <div :class="['toggle-switch rounded-pill  d-flex align-items-center cursor-pointer' , toggles.emailNotiOption ? 'bg-success' :'bg-danger' ]" @click="toggle('emailNotiOption')">
                    <div class="toggle-circle rounded-circle bg-light m-1" :style="{ transform: toggles.emailNotiOption ? 'translateX(1.5rem)' : 'translateX(0)' }"></div>
                </div>
            </div>
            <div class=" d-flex justify-content-between align-items-center w-100 m-1 mb-2 me-3 ms-3 h-fit">
                <p>Notfications </p>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            toggles: {
                deleteOption: true,
                darkOption:false,
                emailNotiOption:false,
            }
            
        }
    },
    methods:{
        toggle(toggleTarget){
            this.toggles[toggleTarget] = !this.toggles[toggleTarget];
            console.log(this.toggles.deleteOption);
        }
    },
    mounted(){
        
    }
}
</script>