<template>
  <div class="container">
    <div class="coin-icon" @click="toggleShake">
      <img src="@/assets/coin.png" alt="Coin Icon" class="coin-image" :class="{ 'shake': isShaking }">
    </div>
    <div class="buttons">
      <button @click="navigateTo('ReferralSection')">Friends</button>
      <button @click="navigateTo('SocialMediaTasks')">Missions</button>
      <button @click="navigateTo('Tap')">Boost</button>
      <button @click="navigateTo('BoostScore')">RoadMap</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShaking: false
    };
  },
  methods: {
    toggleShake() {
      // Toggle the isShaking property
      this.isShaking = true;

      // Reset isShaking after a short delay
      setTimeout(() => {
        this.isShaking = false;
      }, 1000);
    },
    navigateTo(routeName) {
      this.$router.push({ name: routeName });
    }
  }
}
</script>

<style scoped>
.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom right, #ffd700, #000000); /* Gradient background */
}

.coin-icon {
  position: relative;
  border-radius: 50%; /* Make it circular */
  padding: 20px; /* Adjust padding as needed */
  cursor: pointer; /* Set cursor to pointer */
}

.coin-image {
  width: 250px;
  height: 250px;
}

.shake {
  animation: shake 1s infinite;
}

.buttons {
  margin-top: auto; /* Push buttons to the bottom */
}

.buttons button {
  margin: 5px;
}

@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
}
</style>
