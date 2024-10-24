<template>
     <div class="card m-1 mt-2 mb-2 p-1 shadow shadow-2">
          <div
            class="card-body d-flex justify-content-between align-items-center flex-wrap"
          >
            <i :class="{ pi: true, [card.iconClass]: !!card.iconClass }"></i>
            <span>{{ card.number }}</span>
            <div class="mt-2 d-flex flex-wrap w-100">
              <label for="doctors-num" class="form-label w-100">{{ card.name }}</label>
              <progress
                :value="card.number"
                :max="card.maxNumber"
                name="doctors-num"
                class="w-100"
              ></progress>
            </div>
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
                maxNumber:0,
            })
        }
    },
}
</script>