<template>
  <q-page>
    <div class="q-pa-md">
      <h1>Register</h1>
      <q-form ref="form" class="q-gutter-md" @submit="submit">
        <q-input filled v-model="user.first_name" label="First Name" />
        <q-input filled v-model="user.last_name" label="Last Name" />
        <q-input filled v-model="user.email" label="Email" />
        <q-input filled v-model="user.password" type="password" label="Password" />
        <q-btn type="submit" label="Register" color="primary" />
      </q-form>
    </div>
  </q-page>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { register } from 'src/firebase/firebase-register';
import { useRouter } from 'vue-router';
import { Notify } from 'quasar';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const user = reactive({
  first_name: '',
  last_name: '',
  email: '',
  password: ''
});

const router = useRouter();

const submit = async () => {
  try {
    const registeredUser = await register(user);
    console.log('Registered user:', registeredUser);
    Notify.create({
      type: 'positive',
      message: 'Registration successful!'
    });
    router.push('/'); // Redirect to home or another page after successful registration
  } catch (error) {
    console.error('Error during registration:', error);
    Notify.create({
      type: 'negative',
      message: error
    });
  }
};
</script>

<style>
/* Add any custom styles here */
</style>
