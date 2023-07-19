<template>
    <div id="app">
        <div class="categoryPage__center">
            <div class="categoryPage__center__backImg"></div>
            <div class="categoryPage__center__content">
                <h2 class="categoryPage__center__heading">Our Project</h2>
                <p class="categoryPage__center__text">Home / Project</p>
            </div>
        </div>
        <div class="button-group center">
            <button class="category" @click="selectCategory(1)">Bathroom</button>
            <button class="category" @click="selectCategory(2)">Bed Room</button>
            <button class="category" @click="selectCategory(3)">Kitchen</button>
            <button class="category" @click="selectCategory(4)">Living Area</button>
        </div>
        <div class="blocks">
            <component :is="currentBlock"></component>
        </div>
    </div>
</template>
  
<script>
import CategoryOne from '../components/CategoryOne.vue';
import CategoryTwo from '../components/CategoryTwo.vue';
import CategoryThree from '../components/CategoryThree.vue';
import CategoryFour from '../components/CategoryFour.vue';

export default {
    name: 'App',
    components: {
        CategoryOne,
        CategoryTwo,
        CategoryThree,
        CategoryFour,
    },
    data() {
        return {
            currentCategory: 1,
        };
    },
    mounted() {
        const buttons = document.querySelectorAll('.category');
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                buttons.forEach((btn) => {
                    btn.classList.remove('active');
                });
                button.classList.add('active');
            });
        });
        const bathroomButton = document.querySelector('.category:nth-child(1)');
        bathroomButton.classList.add('active');
    },
    computed: {
        currentBlock() {
            switch (this.currentCategory) {
                case 1:
                    return CategoryOne;
                case 2:
                    return CategoryTwo;
                case 3:
                    return CategoryThree;
                case 4:
                    return CategoryFour;
                default:
                    return null;
            }
        },
    },
    methods: {
        selectCategory(category) {
            this.currentCategory = category;
        },
    },
};
</script>
  
<style lang="scss">
@import "@/styles/style.scss";
</style>