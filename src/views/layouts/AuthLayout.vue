<template>
  <div class='mt-5'>
    <div class='text-center mb-4 d-block auth-logo'>
      <img
        alt
        class='logo'
        height='100'
        src='@/assets/images/logo.jpg'
      />
    </div>
    <div class='container d-flex justify-content-center'>
      <div class='card p-4'>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthLayout'
}
</script>

<style scoped>
.card {
  width: 550px;
}
</style>