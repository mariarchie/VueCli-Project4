<template>
  <div>
    <ul class="projects-container center">
      <li class="project no-bullet" v-for="project in projects" :key="project.id"
        @click="navigateToProductDetails(project.id)">
        <div class="naming">
          <h5 class="project__name">{{ project.name }}</h5>
          <p class="project__type">{{ project.type }}</p>
        </div>
        <div class="project__select"><svg width="70" height="70" viewBox="0 0 70 70" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
            <svg x="32" y="24" width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </svg>
        </div>
      </li>
    </ul>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      projects: [
        { id: 41, name: 'Minimal Livingroom', type: 'Decor / Architecture'},
        { id: 42, name: 'Classic Minimal Livingroom', type: 'Decor / Architecture' },
        { id: 43, name: 'Minimal Livingroom table', type: 'Decor / Architecture' },
        { id: 44, name: 'Modern Livingroom', type: 'Decor / Architecture' },
        { id: 45, name: 'Minimal Livingroom', type: 'Decor / Architecture' },
        { id: 46, name: 'Modern Livingroom', type: 'Decor / Architecture' },
        { id: 47, name: 'System Table', type: 'Decor / Architecture' },
        { id: 48, name: 'Modern Livingroom', type: 'Decor / Architecture' }
      ],
    };
  },
  methods: {
    navigateToProductDetails() {
      this.$router.push('/not-found');
    },
  },
};
</script>