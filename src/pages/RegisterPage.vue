<!-- src/pages/RegisterPage.vue -->

<template>
  <!-- Template by Joabson Arley
   https://github.com/Joabsonlg/quasar-template -->

  <q-card class="q-ma-xl">
   <div class="row">
    <div class="col-0 col-sm-5 bg-primary rounded-left-borders xs-hide">
     <div class="row full-width q-px-xl q-pb-xl full-height flex flex-center">
      <div class="">
       <div class="text-h4 text-uppercase text-white fredoka" style="min-width: 220px">Welcome!</div>
       <div class="text-white q-my-sm text-subtitle1">Enter your details to get started!
       </div>
      </div>
     </div>
    </div>

    <div class="col-12 col-sm-7">
     <div class="row q-ml-sm q-mt-sm sm-and-up-hide">
      <div class="col-12 fredoka text-subtitle1">
       <router-link class="text-primary" style="text-decoration: none" to="/">
        System Name
       </router-link>
      </div>
     </div>
     <div class="row q-pa-sm-sm q-pa-md">
      <div class="col-12">
       <q-card-section>
        <div class="q-mb-xl">
         <div class="flex justify-center">
          <div class="text-h4 text-uppercase q-my-none text-weight-bold text-primary fredoka">
           Registration Form</div>
         </div>
        </div>

        <q-form ref="form" class="q-gutter-md" @submit="submit">
         <q-input v-model="user.first_name" label="First Name" name="First Name" />
         <q-input v-model="user.last_name" label="Last Name" name="Last Name" />
         <q-input v-model="user.email" label="Email" name="Email" />
         <q-input v-model="user.password" label="Password" name="password" type="password" />

         <div>
          <q-btn class="full-width fredoka" color="primary" label="Register" rounded
           type="submit"></q-btn>

          <div class="q-mt-lg">
           <div class="q-mt-sm">
            Already have an account?
            <router-link class="text-primary" to="/login">Login</router-link>
           </div>
          </div>
         </div>
        </q-form>
       </q-card-section>
      </div>
     </div>
    </div>
   </div>
  </q-card>
 </template>

<script setup>
 import { ref, reactive, onMounted } from 'vue';
 import { useRouter } from 'vue-router';
 import { Notify } from 'quasar';
 import { register } from 'src/firebase/firebase-register';
 import { getAuth, onAuthStateChanged } from 'firebase/auth';

 const user = reactive({
  last_name: null,
  first_name: null,
  email: null,
  password: null
 })

 const form = ref(null)
 const router = useRouter();

 const submit = async () => {
  if (form.value.validate()) {
    try {
      const registeredUser = await register(user);
      if (registeredUser) {
        Notify.create({
          type: 'positive',
          message: 'Registration successful!'
        });
        router.push('/registered');
      }
    } catch (error) {
      Notify.create({
        type: 'negative',
        message: error.message
      });
      console.error('Registration error:', error);
    }
  }
 }


//  onMounted(() => {
//   // Check authentication status on component mount
//   console.log('sdad');
//   const auth = getAuth();

//   auth.onAuthStateChanged((user) => {
//     if (user) {
//       // User is logged in, redirect to the dashboard
//       router.push('/registered');
//     }
//   });
// });



 </script>
