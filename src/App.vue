<template>
  <div id="app">
    <PageHeader />
    <div class="projectDetailsPage__center">
      <ProjectDetails />
    </div>
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue';
import ProjectDetails from './components/ProjectDetails.vue';
import PageFooter from './components/PageFooter.vue';

export default {
  name: 'App',
  components: {
    PageHeader,
    ProjectDetails,
    PageFooter,
  },
};
</script>

<style lang="scss">
@import "@/styles/style.scss";
</style>
