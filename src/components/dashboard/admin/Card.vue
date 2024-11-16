<template>
    <div class="card m-1 mt-2 mb-2 p-1 shadow shadow-2">
        <div class="card-body d-flex justify-content-between align-items-center flex-wrap">
            <i :class="{[card.iconClass]: !!card.iconClass }"></i>
            <span>{{ card.number }}</span>
            <div class="w-100 m-1 mt-2">
                <p class="text-center">{{ card.name }}</p>
            </div>
            
            <!-- <div class="mt-2 d-flex flex-wrap w-100">
                <label for="doctors-num" class="form-label w-100 text-center">{{ card.name }}</label>
                <progress
                    :value="card.number"
                    :max="card.maxNumber"
                    name="doctors-num"
                    class="w-100">
                </progress> 
            </div>  -->
        </div>
    </div>
</template>

<script>
export default {
    props:{
        card:{
            Type:Object,
            require: true,
            default:()=>({
                name:"",
                number:0,
                iconClass:'',
                // maxNumber:0,
            })
        }
    },
}
</script>


<style scoped>
@media  (max-width:786px) {
    .card{
        width: 80%;
        min-width: 80%;
    }
    
}
@media  (min-width:786px) {
    .card{
        width: 40%;
        min-width: 40%;
    }
    
}
@media  (min-width:1024px) {
    .card{
        width: 20%;
        min-width: 20%;
    }
    
}
.card {
    height:8rem;
}
.card i{
    font-size: 4rem;
    color: #2563eb !important;
}
.card span {
    font-size: 2rem;
}
.card progress {
    border: none;
    border-radius: 7px;   
}
.card progress::-moz-progress-bar {
    background: lightblue;
    border: none;
    border-radius: 20px;
}

.card progress::-webkit-progress-value {
    background: rgb(0, 58, 85);
    border: none;
    border-radius: 7px; 
}

/* .card progress::-webkit-progress-bar {  
    background: rgb(218, 218, 218);
    border: none;
    border-radius: 7px;
} */
/* .card-1 i{
    color: #ffbb00;
}
.card-1 progress::-webkit-progress-value {
    background:#ffbb00;
}
.card-2 i{
    color: #00ff84;
}
.card-2 progress::-webkit-progress-value {
    background: #00ff84;
}
.card-3 i{
    color: #00b7ff;
}
.card-3 progress::-webkit-progress-value {
    background: #00b7ff;
}
.card-4 i {
    color: #8f004f;
}
.card-4 progress::-webkit-progress-value {
    background: #8f004f;
} */
</style>