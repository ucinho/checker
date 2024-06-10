<template>
  <div>
    <h2>Referral Section</h2>
    <button @click="generateReferralLink">Refer Friends</button>
    <div v-if="referralLink">
      <p>Your Referral Link: {{ referralLink }}</p>
      <button @click="shareOnSocialMedia">Share on Social Media</button>
      <button @click="copyReferralLink">Copy Referral Link</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      referralLink: null
    };
  },
  methods: {
    generateReferralLink() {
      // Logic to generate referral link
      this.referralLink = 'Your referral link'; // Replace with actual logic
    },
    shareOnSocialMedia() {
      // Logic to share on social media
    },
    copyReferralLink() {
      // Logic to copy referral link
    }
  }
};
</script>
