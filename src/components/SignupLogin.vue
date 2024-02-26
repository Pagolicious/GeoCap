<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const newUsername = ref('');
const newPassword = ref('');
const confirmPassword = ref('');
const loginExpanded = ref(false);
const signupExpanded = ref(false);
const router = useRouter();

const login = () => {
  loginExpanded.value = !loginExpanded.value;
  signupExpanded.value = false;
};

const signup = () => {
  signupExpanded.value = !signupExpanded.value;
  loginExpanded.value = false;
};

const submitLogin = () => {
  if (username.value === 'grupp13' && password.value === 'grupp13') {
    localStorage.setItem('currentUser', username.value);
    router.push('/profile');
  } else {
    alert('Invalid Password. Try again.');
  }
};

const submitSignup = () => {
  alert('Signup functionality does not work yet.');
};
</script>

<template>
  <div>
    <div class="login-container">
      <div class="sticky-card">
        <div class="login-card">
          <div class="login-card-content">
            <h1>Welcome to GeoCap!</h1>
            <h2>Choose your path</h2>
            <h3>Login for benefits or continue as a guest</h3>
            <button class="btn" @click="login">Login</button>
            <div v-if="loginExpanded">
              <input v-model="username" type="text" placeholder="Username" class="input-field">
              <input v-model="password" type="password" placeholder="Password" class="input-field">
              <button class="submit-button" @click="submitLogin">Submit</button>
            </div>
            <button class="btn" @click="signup">Sign Up</button>
            <div v-if="signupExpanded">
              <input v-model="newUsername" type="text" placeholder="New Username" class="input-field">
              <input v-model="newPassword" type="password" placeholder="New Password" class="input-field">
              <input v-model="confirmPassword" type="password" placeholder="Confirm Password" class="input-field">
              <button class="submit-button" @click="submitSignup">Submit</button>
            </div>
            <button class="btn">Continue as a guest</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 4rem;
  background-color: #a9d7eb;
  background-image: url(/src/assets/backgrounds/home-texture.svg);
  background-size: cover;
}

.sticky-card {
  position: sticky;
  top: 20px;
}

.login-card {
  width: 500px;
  /* height: 600px; */
  background-color: whitesmoke;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 50%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  transition: height;
  border-radius: 7px;
}

.login-card-content {
  display: flex;
  flex-direction: column;
  text-align: center;

}

.btn {
  align-self: center;
  width: 280px;
  height: 50px;
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #64C6F0;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  font-weight: 600;
  font-size: 15px;
}

.btn:hover {
  background-color: #60a6f0;
}


.login-card-content h1 {
  padding: 1rem;
  color: #64C6F0;
  font-family: Fredoka;
  font-weight: 600;
  font-size: 2.2 rem;
}

.login-card-content h2 {
  padding: 0 1rem 1rem 1rem;
  font-weight: 600;
  color: #0B0957;
  font-family: Fredoka;
}

.login-card-content h3 {
  font-weight: 400;
  color: #0B0957;
  font-family: Fredoka;
  font-size: 18px;
}

.input-field {
  width: 280px;
  height: 50px;
  padding: 10px 20px;
  margin-top: 20px;
  /* border: 1px solid #64C6F0; */
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

.input-field:focus {
  outline: none;
  /* border-color: #74b4f9; */
}

.submit-button {
  width: 280px;
  height: 50px;
  padding: 10px 20px;
  margin-top: 20px;
  background-color: white;
  color: white;
  border: 2px solid #64C6F0;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  color: black;
  font-weight: 500;
}

.submit-button:hover {
  background-color: #64C6F0;
  color: white;
}
</style>
