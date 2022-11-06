<template>
  <h1 class="f-meta"> the-automa-tom/
    <a href="https://www.npmjs.com/package/vue-formatted-number-input">     
       vue-formatted-number-input
    </a>
  </h1>
  <h2 class="f-meta f-minor" >This test harness is simulating <span style="color:blue">third party </span>app usage by importing the plug-in from npm.</h2>
  <hr/>  <!-- ============================== -->


  <h3>Input A</h3>
  <vue-formatted-number-input 
  class="test-class"
  v-model="modelA"
  :placeholder = "'Input A'"
  :allowDecimal = "false"
  :allowEmpty = "true"
  :diagnosticMode = "false"
  />
  <p class="f-meta">modelA: {{ modelA }}</p>
  <hr/>  <!-- ============================== -->


  <h3>Input B  <span class="f-meta f-minor" >currency</span></h3>
  <vue-formatted-number-input 
  class="test-class"
  v-model="modelB"
  :placeholder = "'Input B'"
  :prefix="'$'"
  :allowDecimal = "true"
  :allowEmpty = "true"
  :diagnosticMode = "false"
  />
  <p class="f-meta">modelB: {{ modelB }}</p>
  <hr/>  <!-- ============================== -->


  <h3>Input C <span class="f-meta f-minor" >no null on blur</span></h3>
  <vue-formatted-number-input 
  class="test-class"
  v-model="modelC"
  :placeholder = "'Input C'"
  :allowDecimal = "true"
  :allowEmpty = "false"
  :diagnosticMode = "true"
  />
  <p class="f-meta">modelB: {{ modelC || 'null' }}</p>
  <hr/>  <!-- ============================== -->


</template>
<script setup lang="ts">
// import FormattedNumberInput from "./components/vue-formatted-number-input.vue
import { ref } from 'vue';
const modelA = ref(42);
const modelB = ref(35.35);
const modelC = ref(null);

</script>
<style>
h1{
  margin:3px 6px;
}
h2, h3{
  margin:0px 12px;
}
.test-class {
  margin:5px 16px;
}
p {
  margin:0px 24px;
}
/* vue-formatted-number-input ::v-deep(input)  {
  // This ain't working, yet... I thought attrs would apply these to the input.
  background-color: brown;
  color: blueviolet;
  border: none;
  
} */
.f-meta{
  font-family:monospace;
  color:green
}
.f-minor{
  color:grey;
  font-style: italic;
  font-size: small;
  vertical-align: middle;
}

</style>