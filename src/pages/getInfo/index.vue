<template>
  <div>
    <myHeader></myHeader>
    <div class="container">

    </div>
    <myFooter></myFooter>
  </div>
</template>


<script>
  import myHeader from "../template-header/index.vue";
  import myFooter from "../template-footer/index.vue";
  import "./style.css";
  export default {
    components: {
      myHeader,
      myFooter
    }
  };

</script>
