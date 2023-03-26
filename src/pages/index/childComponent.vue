<template>
  <div>
    <p>{{title}}</p>
  </div>
</template>
  
<script>
export default {
  name: "ChildComponent",
  data() {
    return {
      title: 'ChildComponent'
    };
  },
  methods: {
    customFun(bln) {
        console.log(2222222)
        this.$emit('custom', bln)
    }
  }
};
</script>