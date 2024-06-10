<template>
  <div class="container">
    <div class="coin-icon" @click="mineCoin">
      <img src="@/assets/coin.png" alt="Coin Icon" class="coin-image">
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    mineCoin() {
      const coinIcon = document.querySelector('.coin-icon');
      // Apply the shaking animation class
      coinIcon.classList.add('shake');

      // Reset shaking animation after a short delay
      setTimeout(() => {
        coinIcon.classList.remove('shake');
      }, 1000);

      // Implement coin mining logic here
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
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom right, #ffd700, #000000); /* Gradient background */
}

.coin-icon {
  position: relative;
  border-radius: 50%; /* Make it circular */
  padding: 20px; /* Adjust padding as needed */
}

.coin-image {
  width: 250px;
  height: 250px;
}

.shake {
  animation: shake 1s infinite;
}

@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
}
</style>
