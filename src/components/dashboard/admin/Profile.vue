<template>
  <div
    class="profile-continer d-flex justify-content-center align-items-center flex-wrap m-1 mt-1 mb-2 m-auto"
  >
    <div
      class="mt-3 mb-3 d-flex justify-content-center align-content-center flex-wrap"
    >
      <!-- <div class="d-flex justify-content-center align-items-center flex-wrap w-100">
                <ul class="list-group ">
                    <li :class="['list-group-item  list-group-item-action', activeTab === 'info' ? 'active' : '']" @click="setActiveTab('info')">Profile Informations</li>
                    <li :class="['list-group-item  list-group-item-action', activeTab === 'password' ? 'active' : '']" @click="setActiveTab('password')">Change Password</li>
                </ul>
            </div>
                -->
      <!-- Select button (information and change password) -->
      <div class="w-100 d-flex justify-content-center" @click="showMeTheTruth">
        <SelectButton
          v-model="activeTab"
          :options="tabs"
          optionLabel="value"
          dataKey="value"
          aria-labelledby="custom"
        >
          <template #option="slotProps">
            <i :class="slotProps.option.icon"></i>
            <span>{{ slotProps.option.value }}</span>
          </template>
        </SelectButton>
      </div>

      <!-- Information Section -->
      <div
        v-if="activeTab.value === 'Personal information'"
        class="info-section mt-3 mb-3 d-flex justify-content-center flex-wrap align-content-center collapse show"
      >
        <!-- Profile Image -->
        <div
          class="profile-image-container d-flex justify-content-center align-items-center flex-wrap pt-2 pb-2 mt-3 mb-3 w-100 overflow-hidden relative"
        >
          <div
            class="d-flex justify-content-center align-items-center"
            @mouseenter="isImageHovered = true"
            @mouseleave="isImageHovered = false"
          >
            <i
              v-if="admin.img == null || admin.img == ''"
              class="pi pi-user d-flex justify-content-center align-items-center text-main-color"
            ></i>
            <img
              v-else
              :src="admin.img"
              alt="profile-image"
              class="profile-img"
            />
            <div
              class="image-overlay d-flex justify-content-center align-items-center"
              v-show="isImageHovered"
              aria-hidden="true"
            >
              <div class="d-flex justify-content-center">
                <input
                  type="file"
                  ref="fileInput"
                  style="display: none"
                  @change="changeImage"
                />
                <i
                  class="pi pi-pencil me-2 ms-2 cursor-pointer"
                  title="Edit Image"
                  @click="triggerFileInput"
                ></i>
                <i
                  class="pi pi-trash me-2 ms-2 cursor-pointer"
                  title="Delete Image"
                  @click="deleteImage"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <!-- Edit button -->
        <div class="w-100 d-flex justify-content-end align-items-center">
          <button
            class="btn btn-main"
            title="Edit Profile"
            data-bs-toggle="modal"
            data-bs-target="#edit-profile-modal"
          >
            <i class="pi pi-pen-to-square"></i>
          </button>
          <!-- modal edit -->
          <div class="modal fade" id="edit-profile-modal" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title font-kanit fs-5">Edit Profile Informations</h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form action="">
                    <div class="mb-3 mt-3 input-group">
                      <label class="form-label w-100" for="name">Name</label>
                      <span class="input-group-text rounded-start-2"
                        ><i class="fa-solid fa-pen text-main-color"></i
                      ></span>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        class="form-control"
                        :value="admin.name"
                      />
                    </div>
                    <div class="mb-3 mt-3 input-group">
                      <label class="form-label w-100" for="name">Email</label>
                      <span class="input-group-text rounded-start-2"
                        ><i class="pi pi-at text-main-color"></i
                      ></span>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        class="form-control"
                        :value="admin.email"
                      />
                    </div>
                    <div class="mb-3 mt-3 input-group">
                      <label class="form-label w-100" for="name"
                        >Birthday</label
                      >
                      <span class="input-group-text rounded-start-2"
                        ><i class="fa-solid fa-cake-candles text-main-color"></i
                      ></span>
                      <input
                        type="date"
                        name="email"
                        id="email"
                        class="form-control"
                        :value="admin.birthday"
                      />
                    </div>
                    <div class="mb-3 mt-3 input-group">
                      <label class="form-label w-100" for="name">Phone</label>
                      <span class="input-group-text rounded-start-2"
                        ><i class="fa-solid fa-phone text-main-color"></i
                      ></span>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        class="form-control"
                        :value="admin.mobile"
                      />
                    </div>
                    <div class="mb-3 mt-3 input-group">
                      <label class="form-label w-100" for="name">Address</label>
                      <span class="input-group-text rounded-start-2"
                        ><i class="fa-solid fa-location-dot text-main-color"></i
                      ></span>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        class="form-control"
                        :value="admin.address"
                      />
                    </div>
                  </form>
                </div>
                <div
                  class="modal-footer d-flex justify-content-end align-item-center"
                >
                  <button class="btn btn-main" data-bs-dismiss="modal">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Admin Info -->
        <div
          class="white-space-nowrap table-responsive w-100 d-flex justify-content-center flex-wrap"
        >
          <div
            class="d-flex justify-content-center align-content-center mt-2 mb-1 w-75"
          >
            <p
              class="w-25 d-flex justify-content-end align-items-center m-1 me-3 text-muted"
            >
              Name :
            </p>
            <p class="w-75 d-flex justify-content-start align-items-center m-1">
              {{ admin.name }}
            </p>
          </div>
          <div
            class="d-flex justify-content-center align-content-center mt-2 mb-1 w-75"
          >
            <p
              class="w-25 d-flex justify-content-end align-items-center m-1 me-3 text-muted"
            >
              Email :
            </p>
            <p class="w-75 d-flex justify-content-start align-items-center m-1">
              {{ admin.email }}
            </p>
          </div>
          <div
            class="d-flex justify-content-center align-content-cente mt-2 mb-1 w-75"
          >
            <p
              class="w-25 d-flex justify-content-end align-items-center m-1 me-3 text-muted"
            >
              Birthday :
            </p>
            <p class="w-75 d-flex justify-content-start align-items-center m-1">
              {{ admin.birthday }}
            </p>
          </div>
          <div
            class="d-flex justify-content-center align-content-center mt-2 mb-1 w-75"
          >
            <p
              class="w-25 d-flex justify-content-end align-items-center m-1 me-3 text-muted"
            >
              Phone :
            </p>
            <p class="w-75 d-flex justify-content-start align-items-center m-1">
              {{ admin.mobile }}
            </p>
          </div>
          <div
            class="d-flex justify-content-center align-content-center mt-2 mb-1 w-75"
          >
            <p
              class="w-25 d-flex justify-content-end align-items-center m-1 me-3 text-muted"
            >
              Address :
            </p>
            <p class="w-75 d-flex justify-content-start align-items-center m-1">
              {{ admin.address }}
            </p>
          </div>
        </div>
      </div>

      <!-- Change Password Section -->
      <div
        v-if="activeTab.value === 'Change Password'"
        class="mt-3 mb-3 d-flex justify-content-center flex-wrap align-content-center w-100"
        id="change-password"
      >
        <form
          class=" d-flex justify-content-center align-items-center flex-wrap"
        >
          <div class="mb-3 mt-3 w-100">
            <input
              type="password"
              id="currentPassword"
              class="form-control"
              placeholder="Current Password"
            />
          </div>
          <div class="mb-3 mt-3 w-100">
            <input
              type="password"
              id="newPassword"
              class="form-control"
              placeholder="New Password"
            />
          </div>
          <div class="mb-3 mt-3 w-100">
            <input
              type="password"
              id="confirmPassword"
              class="form-control"
              placeholder="Confirm New Password"
            />
          </div>
          <div class="w-100 d-flex justify-content-center">
            <button type="submit" class="btn btn-main">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import SelectButton from "primevue/selectbutton";
export default {
  components: {
    SelectButton,
  },
  data() {
    return {
      isImageHovered: false,
      activeTab: {
        value: "Personal information",
        icon: "pi pi-address-book",
      },
      tabs: [
        {
          value: "Personal information",
          icon: "pi pi-address-book",
        },
        {
          value: "Change Password",
          icon: "fa-solid fa-key",
        },
      ],
      admin: {
        name: "Mohammad MOMO",
        password: "mohammad123",
        // img:require("@/assets/images/homepage/avatar-04.4c576192.jpg"),
        // img: '',
        address: "Syria, Damasucs , Baghdad Street ",
        email: "Mohammad@test.com",
        mobile: "+963 947 465 123",
        birthday: "2000-01-01",
      },
    };
  },
  methods: {
    // this method to fire input when user click on edit icon (on profile image)
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    changeImage() {
      console.log("File Changed");
    },
    deleteImage() {
      console.log("Image Deleted");
    },

    // tested methode (delete them when everything is okey)
    setActiveTab(tab) {
      this.activeTab = tab;
    },
    showMeTheTruth() {
      console.log(this.activeTab);
      console.log(this.isImageHovered);
    },
  },
};
</script>

<style scoped>
.profile-continer {
  width: 100%;
}
.profile-continer .info-section {
  width: 70%;
}

/* .profile-continer div div .list-group {
    flex-direction: row;
}
.profile-continer div div ul li {
    white-space: nowrap;
    border: 1px solid;
    cursor: pointer;
}

.profile-continer div div ul li:first-child{
   border-radius: 0%;
   border-top-left-radius: 0.5rem ;
   border-bottom-left-radius: 0.5rem;
}
.profile-continer div div ul li:last-child{
    border-radius: 0%;
    border-top-right-radius: 0.5rem ;
    border-bottom-right-radius: 0.5rem;
} 
.list-group-item+.list-group-item {
    border-top-width: 1px;
}*/
.profile-img {
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  border: 1px solid;
  transition: filter 0.3s ease;
}
.profile-img:hover {
  cursor: pointer;
}

/* SelectButton */
::v-deep .p-togglebutton.p-togglebutton-checked {
  color: white;
}
::v-deep .p-togglebutton.p-togglebutton-checked::before {
  background-color: #2563eb;
}
.image-overlay {
  position: absolute;
  top: 10;
  left: 100;
  width: 10rem;
  height: 10rem;
  background: rgba(0, 0, 0, 0.5);
  gap: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  border-radius: 50%;
}
.profile-image-container div {
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
}
.profile-image-container div button {
  width: 1rem;
  height: 1rem;
}
.profile-image-container:hover .image-overlay {
  opacity: 1;
  pointer-events: auto;
}
.profile-image-container:hover .profile-image {
  filter: blur(3px) grayscale(50%);
}
.image-overlay div {
  border-radius: 0;
  height: fit-content;
  background: rgba(48, 48, 48, 0.5);
  color: white;
}
.profile-image-container .pi-user {
  font-size: 7rem;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  border: 1px solid black;
  transition: filter 0.3s ease;
}
@media (min-width: 1024px){
  #change-password form{
    width: 40% !important;
  }
}
@media (min-width: 768px){
  #change-password form{
    width: 50% !important;
  }
}
</style>
