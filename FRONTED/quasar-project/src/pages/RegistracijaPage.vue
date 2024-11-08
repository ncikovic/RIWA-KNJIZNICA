<template>
  <q-page padding>
    <h1>Registracija</h1>
    <p>Ispunite donja polja kako biste se registrirali.</p>
    
    <q-input v-model="userData.username" label="Korisničko ime" />
    <q-input v-model="userData.email" label="Email" type="email" />
    <q-input v-model="userData.password" label="Lozinka" type="password" />
    <q-input v-model="userData.confirmPassword" label="Potvrdi lozinku" type="password" />
    
    <q-btn label="Potvrdi" @click="registerUser" color="primary" />
    
    <!-- Prikaz poruke zahvale ako je registracija uspješna -->
    <div v-if="registrationSuccess" class="text-positive text-h6 q-mt-md">
      Hvala vam na vašoj registraciji!
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      registrationSuccess: false // Praćenje statusa registracije
    };
  },
  methods: {
    registerUser() {
      // Logika za provjeru ispravnosti registracijskih podataka
      if (this.userData.username && this.userData.email && this.userData.password && this.userData.password === this.userData.confirmPassword) {
        // Ako su svi podaci ispravni, postavi `registrationSuccess` na true
        this.registrationSuccess = true;

        // Očisti polja nakon registracije
        this.userData = {
          username: '',
          email: '',
          password: '',
          confirmPassword: ''
        };
      } else {
        // Ovdje možeš dodati logiku za grešku ako je registracija neuspješna
        alert("Provjerite unesene podatke.");
      }
    }
  }
};
</script>
