<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      error: ''
    }
  },
  methods: {
    // Method to update the profile based on form validation
    updateProfile() {
      // Check if the form data is valid
      if (this.isValidData()) {
        this.error = '';
        this.username = '';
        this.email = '';
        this.currentPassword = '';
        this.newPassword = '';
        this.currentPassword = '';
        this.confirmPassword = ''
      }
      else {
        this.error = 'Invalid data. Please check your inputs.'
      }
    },
    isValidData() {
      const isUsernameValid = this.username !== '';
      const isEmailValid = this.email !== '';
      const isCurrentPasswordValid = this.currentPassword !== '';
      const isNewPasswordValid = this.newPassword !== '';
      const isConfirmPasswordValid = this.confirmPassword !== '' && this.confirmPassword === this.newPassword;
      // Return true if all validations pass
      return (
        isUsernameValid &&
        isEmailValid &&
        isCurrentPasswordValid &&
        isNewPasswordValid &&
        isConfirmPasswordValid
      );
    }
  },
}

</script>

<template>
  <div class="profile-container">
    <div class="profile-wrapper"><img class="profile-image" src="/src/assets/profile/profileimage.png"
        alt="Profile Image">
      <div class="change-profile">
        <img class="camera-icon" src="/src/assets/profile/camera-icon.svg" alt="camera icon">
      </div>
    </div>
    <h3 class="profile-welcome">Hi User!</h3>
    <div class="form-container">
      <div class="error-message" v-if="error">{{ error }}</div>
      <b-form-input v-model="username" class="form-input" placeholder="Username"></b-form-input>
      <b-form-input v-model="email" class="form-input" placeholder="Email"></b-form-input>
      <b-form-input v-model="currentPassword" class="form-input" placeholder="Current password"></b-form-input>
      <b-form-input v-model="newPassword" class="form-input" placeholder="New password"></b-form-input>
      <b-form-input v-model="confirmPassword" class="form-input" placeholder="Confirm password"></b-form-input>
      <div class="action-section">
        <p class="help">Need help?</p>
        <b-button @click="updateProfile" class="update-button" variant="success">Update</b-button>
      </div>
    </div>
    <b-button class="logout-button" variant="success">Logout</b-button>
  </div>
</template>

<style scoped>
.profile-container {
  display: flex;
  flex-direction: column;
  background-image: url(/src/assets/backgrounds/texture.svg);
  background-color: rgb(65, 186, 108);
  background-size: cover;
  align-items: center;
  padding-top: 4rem;
  font-family: Fredoka;
  height: 100%;
}

.error-message {
  color: rgb(200, 88, 88);
  margin-bottom: 10px;
}

.profile-wrapper {
  position: relative;
  display: inline-block;
}

.profile-image {
  border-radius: 50%;
  border: 2px solid rgb(65, 186, 108);
  background-color: rgb(245, 245, 245);
  width: 150px;
  height: 150px;
  object-fit: contain;
  padding-top: 10px;
}

.change-profile {
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 50%;
  background-color: rgb(245, 245, 245);
  box-shadow: 0 4px 4px 0 rgb(114, 114, 114);
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.camera-icon {
  width: 40px;
  height: 25px;
  margin-top: 8px;
}

.profile-welcome {
  font-family: Fredoka;
  font-weight: 600;
  font-size: 20px;
  margin-top: 40px;
}

.form-container {
  margin: 40px;
  padding: 50px;
  width: 40%;
  border-radius: 7px;
  background-color: rgb(245, 245, 245);
}

.form-input {
  margin: 5px auto 10px;
  background-color: rgba(217, 217, 217, 66%);
  color: rgb(0, 0, 0, 100%);
  border-radius: 7px;
  font-size: 12px;
}

.action-section {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 15px;
}

.update-button {
  background-color: rgb(65, 186, 108);
  border-color: rgb(65, 186, 108);
  color: rgb(245, 245, 245);
  font-size: 12px;
  font-weight: 500;
  width: 90px;
  box-shadow: 0 2px 2px 0 rgba(168, 168, 168);
}

.help {
  font-size: 12px;
  font-weight: 500;
}

.logout-button {
  background-color: rgb(245, 245, 245);
  border-color: rgb(245, 245, 245);
  color: rgb(0, 0, 0);
  font-size: 12px;
  width: 90px;
  margin-top: 10px;
  margin-bottom: 100px;
  box-shadow: 0 2px 2px 0 rgb(62, 71, 44);

}
</style>
