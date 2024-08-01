<template>
  <div class="register_page">
    <div class="row">
      <div class="col-md-4 offset-md-4 fixed-center">
        <q-card class="my-card">
          <q-card-section class="text-dark">
            <center>
              <a href="/">
                <img src="/src/assets/abcLogo.png" style="width:130px" />
              </a>
              <p>Let us show the Easiest Way!</p>
              <small>Registration Form</small>
            </center>
          </q-card-section>

          <q-form ref="form" class="q-gutter-md" @submit.prevent="submit">
            <q-input filled v-model="user.first_name" label="First Name" name="First Name" />
            <q-input filled v-model="user.last_name" label="Last Name" name="Last Name" />
            <q-input filled v-model="user.email" label="Email" name="Email" type="email" />
            <q-input filled v-model="user.password" label="Password" name="password" type="password" />

            <div>
              <q-btn class="full-width fredoka color-primary" label="Register" rounded type="submit" />
            </div>
          </q-form>

          <q-separator />

          <q-card-actions align="right">
            <router-link style="text-decoration: none;" class="text-primary" to="/">Back to Home</router-link>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { Notify } from 'quasar';
import { register } from 'src/firebase/firebase-register';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const user = reactive({
  first_name: '',
  last_name: '',
  email: '',
  password: ''
});

const form = ref(null);
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
        router.push('/');
      }
    } catch (error) {
      Notify.create({
        type: 'negative',
        message: error.message
      });
      console.error('Registration error:', error);
    }
  }
};

// Optional: Add auth state changed listener if needed
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('User is signed in:', user);
  } else {
    console.log('No user is signed in.');
  }
});
</script>

<style scoped>
.register_page {
  margin-top: 50px;
}
.my-card {
  max-width: 500px;
}
.full-width {
  width: 100%;
}
</style>
