<template>


      <div class="loading sea" ref="myRef">
        <div class="loading-center">
          <div class="loading-center-absolute">
            <div class="object object_four"></div>
            <div class="object object_three"></div>
            <div class="object object_two"></div>
            <div class="object object_one"></div>
          </div>
        </div>
      </div>


</template>

<script>
export default {
  mounted() {

    this.$refs.myRef.style.display = "none";

  }
}
</script>

<style>

</style>