<script setup lang="ts">
</script>

<template>
  <div>

    <vue-formatted-number-input 
      :definedInProps="'Prop overrides Main\'s settings!'"    
    />
    
    <vue-formatted-number-input 
      :placeholder="'From Props'"
      :prefix="'XXX'"
      :max="666"
      :allowDecimal="false"
      :allowEmpty="false"
      :diagnosticMode="true"
    />
    <vue-formatted-number-input />
    
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>
