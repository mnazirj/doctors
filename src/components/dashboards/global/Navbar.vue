<template>
  <nav
    class="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-between align-content-between"
  >
    <div class="d-flex justify-content-center ms-4">
      <a class="navbar-brand" href="#"
        ><img
          src="../../../assets/images/homepage/logo.svg"
          alt="logo"
          class="brand-icon"
      /></a>
    </div>
    <div class="w-16 d-flex justify-content-center me-2">
        <div class=" flex justify-content-center align-items-center me-3 notification">
            <i class="pi pi-bell"></i>
            <div class="notification-number">1</div>
        </div>
      <div class="dropdown">
        <a
          class="nav-link dropdown-toggle nav-image-user"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <!-- <i class="pi pi-user text-danger rounded-circle nav-icon-user"></i> -->
          <img
            src="../../../assets/images/homepage/avatar-03.bcd54570.jpg"
            alt="user-image"
            class="rounded-circle w-100 h-100"
          />
        </a>
        <ul class="dropdown-menu">
          <li class="dropdown-item">
            <a class="" href="#"
              ><i class="pi pi-user me-2"></i><span>Profile</span></a
            >
          </li>
          <li class="dropdown-item">
            <a class="" href="#"
              ><i class="pi pi-cog me-2"></i><span>Settings</span></a
            >
          </li>
          <li class="dropdown-item">
            <a class="" href="#"
              ><i class="pi pi-sign-out me-2"></i><span>Logout</span></a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
