<template>
  <h1>Search For Task</h1>
  <div class="wrap">
    <div class="search">
      <input type="text" class="searchTerm" placeholder="Search for todo" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.search {
  width: 100%;
  display: flex;
  justify-content: center;
}

.searchTerm {
  width: 50%;
  border: 3px solid #00b4cc;
  padding: 5px;
  height: 58px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #000000;
  border-radius: 8px;
}

.searchTerm:focus {
  color: #000000;
  font-size: 24px;
  background: #f0f0f0;
}

h1 {
  font-size: 30px;
  font-weight: 500;
}
</style>
