<template>
  <div class="hello">
  <h1>Bitcoin Price Index</h1>

    <div v-for="currency in info.records" :key="currency.id" class="currency"  >
      {{ currency.fields.Titel }}:

    <br/>
    </div>
  
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
   data () {
    return {
      info: 'josß'
    }
  }
  ,
  filters: {
  currencydecimal (value) {
    return value.toFixed(2)
  }
},
    mounted () {
     
    this.$axios
      .get('https://script.google.com/macros/s/AKfycbx4cVgWqXOtoRqvX70nqhlP0N6dslt2uUoPTymyZwsB-cE81-H8/exec?view=Current%20Challenges&filter=')
      .then(response => (this.info = response.data))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
