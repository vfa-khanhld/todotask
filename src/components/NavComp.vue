<template>
  <nav class="nav">
    <router-link class="router-link" to="/">Dashboard</router-link>
    <router-link class="router-link" to="/search">Search</router-link>
    <router-link class="router-link" to="/add">Add</router-link>
  </nav>
</template>

<style>
.nav {
  padding: 20px;
  background: rgb(236, 229, 229);
  width: 600px;
  margin: 0 auto;
  border: solid 3px rgb(192, 191, 191);
  border-radius: 8px;
}

.router-link {
  margin: 0 12px;
  text-decoration: none;
  color: Black;
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
}
.router-link:hover {
  color: rgb(73, 73, 198);
}
</style>
