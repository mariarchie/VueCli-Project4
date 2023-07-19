<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/PageHeader.vue';
import Footer from './components/PageFooter.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>