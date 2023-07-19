<template>
    <div id="app">
        <div class="projectDetailsPage__center">
            <div class="projectDetailsPage">
                <div class="projectDetailsPage__banner">
                    <img src="@/assets/Images.svg" alt="banner" class="projectDetailsPage__banner__img">
                </div>
                <div class="projectDetailsPage__top">
                    <h1 class=" projectDetailsPage__title">{{ project.title }}</h1>
                    <p class="projectDetailsPage__details">{{ project.description }}</p>
                </div>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <ol class="carousel-indicators">
                        <li v-for="(item, index) in project.carouselImages" :key="index"
                            :data-bs-target="'#carouselExampleIndicators'" :data-bs-slide-to="index"
                            :class="{ 'active': index === 0 }"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div v-for="(item, index) in project.carouselImages" :key="index" class="carousel-item"
                            :class="{ 'active': index === 0 }">
                            <img :src="item" class="d-block w-100" :alt="'Slide ' + (index + 1)">
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>

export default {

    computed: {
        project() {
            return this.$store.state.project;
        },
    },
};
</script>

<style lang="scss">
@import "@/styles/style.scss";
</style>