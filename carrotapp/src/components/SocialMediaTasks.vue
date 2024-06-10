<template>
  <div>
    <h2>Social Media Tasks</h2>
    <div v-for="(task, index) in tasks" :key="index">
      <h3>{{ task.title }}</h3>
      <p>{{ task.description }}</p>
      <button @click="completeTask(index)">Complete Task</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        { title: 'Join Telegram Group', description: 'Join our Telegram group' },
        { title: 'Follow on Twitter', description: 'Follow us on Twitter' },
        { title: 'Retweet', description: 'Retweet our latest post' },
        // Add more tasks as needed
      ]
    };
  },
  methods: {
    completeTask(index) {
      // Logic to handle task completion and award coins
      const completedTask = this.tasks[index];
      // Implement logic to award coins based on the completed task
      console.log('Completed task:', completedTask);
    }
  }
};
</script>
