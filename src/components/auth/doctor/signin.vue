<template>
  <section class="bg-doc">
    <div class="container">
      <div class="flex justify-content-center align-items-center min-vh-100">
        <Card class="col-lg-6 col-md-8 col-12">
          <template #title>
            <div class="text-center">
              <img :src="require('@/assets/images/homepage/logo.svg')" />
            </div>
          </template>
          <template #content>
            <Form
              :resolver="resolver"
              @submit="onFormSubmit"
              :validateOnValueUpdate="true"
              :validateOnBlur="true"
              :initialValues="information"
            >
              <FormField v-slot="$field" name="email" class="col">
                <InputGroup>
                  <InputGroupAddon>
                    <i class="fas fa-user text-primary"></i>
                  </InputGroupAddon>
                  <FloatLabel variant="on">
                    <InputText v-model="information.email" />
                    <label>Email Address</label>
                  </FloatLabel>
                </InputGroup>
                <div>
                  <small v-if="$field?.invalid" class="text-danger">{{
                    $field.error?.message
                  }}</small>
                </div>
              </FormField>
              <FormField v-slot="$field" name="password" class="col">
                <InputGroup>
                  <InputGroupAddon>
                    <i class="fas fa-lock text-primary"></i>
                  </InputGroupAddon>
                  <FloatLabel variant="on">
                    <Password
                      v-model="information.password"
                      toggleMask
                      :feedback="false"
                    />
                    <label>Password</label>
                  </FloatLabel>
                </InputGroup>
                <div>
                  <small v-if="$field?.invalid" class="text-danger">{{
                    $field.error?.message
                  }}</small>
                </div>
              </FormField>
              <div
                class="lg:flex md:flex sm:flex justify-content-between mt-2 px-2"
              >
                <Button
                  label="Sign In"
                  icon="fas fa-arrow-right"
                  type="submit"
                  class="col-lg-auto col-md-auto col-12"
                />
                <Button
                  label="Forget password?"
                  icon="fas fa-gears"
                  variant="text"
                  class="col-lg-auto col-md-auto col-12"
                />
              </div>
            </Form>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Form } from "@primevue/forms";
import { FormField } from "@primevue/forms";
import FloatLabel from "primevue/floatlabel";
import Password from "primevue/password";
import InputGroup from "primevue/inputgroup";
import InputGroupAddon from "primevue/inputgroupaddon";
import Button from "primevue/button";
import { ref } from "vue";
import InputText from "primevue/inputtext";
import Card from "primevue/card";

const information = ref([{ email: null, password: null }]);
//PrimeVue resolver used to validate form fields
const resolver = ({ values }) => {
  const errors = {
    email: [],
    password: [],
  };
  //Checking if value is null push error to errors array
  if (!values.email) {
    errors.email.push({
      type: "required",
      message: "Email Address is required",
    });
  }
  if (!values.password) {
    errors.password.push({
      type: "required",
      message: "Password is required",
    });
  }

  return { errors };
};

//API CALL to update doctor information on form submit
const onFormSubmit = ({ valid }) => {
  console.log(valid);
};
</script>
