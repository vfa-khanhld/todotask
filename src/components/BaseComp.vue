<template>
  <todotask />
  <create />
</template>

<script>
import Todotask from "./TodoComp.vue";
import Create from "./CreateComp.vue";

export default {
  components: {
    Todotask,
    Create,
  },
};
</script>

<style scoped>
* {
  text-align: center;
}
</style>
