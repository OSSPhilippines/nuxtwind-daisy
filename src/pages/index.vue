<template>

  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-xl">
        <h1 data-aos="fade-down" class="text-7xl font-bold mb-6">Nuxtwind Daisy</h1>
        <p data-aos="fade-down" data-aos-delay="300" class="text-lg mb-6">Nuxtwind Daisy is a starter template project for Nuxt.js 3 + Tailwind CSS + Daisy UI with additional installed setup for custom font, icons, animation, and more.</p>
        <div class="flex justify-center space-x-5">
          <button data-aos="fade-down" data-aos-delay="600" class="btn btn-primary">Fork this Project</button>
          <button data-aos="fade-down" data-aos-delay="600" class="btn btn-primary btn-outline">Give us a star in GitHub</button>
        </div>
      </div>
    </div>
  </div>

  <generic-panel>
    <div class="flex flex-col">
      <h1 class="text-5xl mb-5">Introduction</h1>
      <p class="text-lg">Create beautiful and fast websites without worrying about the tedious setup. Just fork this repository and start hacking away!</p>
    </div>
  </generic-panel>

  <generic-panel>
    <div class="flex flex-col">
      <h1 class="text-5xl mb-5">Getting Started</h1>
      <p class="text-lg">Read <a href="https://github.com/OSSPhilippines/nuxtwind-daisy#readme">the documentation</a> on how to start quickly.</p>
    </div>
  </generic-panel>

  <generic-panel>
    <div class="flex flex-col">
      <h1 class="text-5xl mb-5">Features</h1>
      <p class="text-lg">See what you can do below. Basically, every basic thing that you need is already included in this starter template project. From custom font, icons, animations, and more.</p>
    </div>
  </generic-panel>

  <generic-panel>
    <div class="flex flex-col mb-5">
      <h1 class="text-3xl mb-5">Icons by Line Awesome <i class="las la-icons text-primary"></i></h1>
      <p class="text-lg">Get more icons from the <a class="text-primary" href="https://icons8.com/line-awesome" target="_blank">Line Awesome documentation</a>.</p>
    </div>
    <div class="flex space-x-5">
      <i class="las la-cat text-4xl"></i>
      <i class="las la-crow text-4xl"></i>
      <i class="las la-dog text-4xl"></i>
      <i class="las la-dove text-4xl"></i>
      <i class="las la-horse text-4xl"></i>
      <i class="las la-spider text-4xl"></i>
      <i class="las la-kiwi-bird text-4xl"></i>
      <i class="las la-beer text-4xl"></i>
      <i class="las la-glass-whiskey text-4xl"></i>
      <i class="las la-home text-4xl"></i>
      <i class="las la-birthday-cake text-4xl"></i>
      <a class="text-lg mt-1 text-primary" href="https://icons8.com/line-awesome" target="_blank">and more...</a>
    </div>
  </generic-panel>

  <generic-panel>
    <div class="flex flex-col mb-5">
      <h1 class="text-3xl mb-5">Animation by AOS.js <i class="las la-running text-primary"></i></h1>
      <p class="text-lg">Check <a class="text-primary" href="https://daisyui.com/" target="_blank">AOS.js documentation</a> for more animations.</p>
    </div>
    <div class="flex flex-col flex-wrap">
      <div class="flex space-x-5">
        <div data-aos="fade-down" data-aos-delay="1000" class="w-[200px] h-[200px] bg-green-200"></div>
        <div data-aos="flip-left" data-aos-delay="2000" class="w-[200px] h-[200px] bg-red-200"></div>
        <div data-aos="zoom-in" data-aos-delay="3000" class="w-[200px] h-[200px] bg-blue-200"></div>
        <a class="text-lg mt-1 text-primary" href="https://michalsnik.github.io/aos/" target="_blank">more animations...</a>
      </div>
    </div>
  </generic-panel>

  <generic-panel>
    <div class="flex flex-col mb-5">
      <h1 class="text-3xl mb-5">UI Components by Daisy UI 🌼</h1>
      <p class="text-lg">Learn more from the official <a class="text-primary" href="https://daisyui.com/" target="_blank">daisyUI documentation</a>.</p>
    </div>
    <div class="flex flex-col flex-wrap">
      <h1 class="text-xl mb-5 font-bold">Buttons</h1>
      <div class="flex space-x-5">
        <button class="btn">Button</button>
        <button class="btn btn-primary">Button</button>
        <button class="btn btn-secondary">Button</button>
        <button class="btn btn-accent">Button</button>
        <button class="btn btn-ghost">Button</button>
        <button class="btn btn-link">Button</button>
      </div>
    </div>
  </generic-panel>

  <generic-panel>
    <div class="flex flex-col flex-wrap">
      <h1 class="text-xl mb-5 font-bold">Alerts</h1>
      <div class="space-y-5">
        <div class="alert shadow-lg">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>12 unread messages. Tap to see.</span>
          </div>
        </div>

        <div class="alert alert-info shadow-lg">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>New software update available.</span>
          </div>
        </div>

        <div class="alert alert-success shadow-lg">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Your purchase has been confirmed!</span>
          </div>
        </div>

        <div class="alert alert-warning shadow-lg">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            <span>Warning: Invalid email address!</span>
          </div>
        </div>

        <div class="alert alert-error shadow-lg">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Error! Task failed successfully.</span>
          </div>
        </div>

        <div class="alert shadow-lg">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>we use cookies for no reason.</span>
          </div>
          <div class="flex-none">
            <button class="btn btn-sm btn-ghost">Deny</button>
            <button class="btn btn-sm btn-primary">Accept</button>
          </div>
        </div>

        <div class="alert shadow-lg">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <div>
              <h3 class="font-bold">New message!</h3>
              <div class="text-xs">You have 1 unread message</div>
            </div>
          </div>
          <div class="flex-none">
            <button class="btn btn-sm">See</button>
          </div>
        </div>
      </div>
    </div>
  </generic-panel>

  <generic-panel>
    <!-- create panel for Badges -->
    <div class="flex flex-col flex-wrap">
      <h1 class="text-xl mb-5 font-bold">Badges</h1>
      <div class="flex space-x-5">
        <div class="badge badge-info gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          info
        </div>
        <div class="badge badge-success gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          success
        </div>
        <div class="badge badge-warning gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          warning
        </div>
        <div class="badge badge-error gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          error
        </div>
      </div>
    </div>
  </generic-panel>

</template>

<script>
import { useHead } from '#app';
import { definePageMeta } from '#imports';
import GenericPanel from '~/components/commons/GenericPanel';
import ogBanner from '../assets/images/nuxtwind-daisy-og-banner.jpg';

export default {
  components: {
    GenericPanel,
  },
  setup () {
    definePageMeta({
      layout: 'default',
    });

    useHead({
      title: 'Nuxtwind Daisy 🟢💨🌼',
      description: 'Nuxtwind Daisy is a starter template for Nuxt.js 3 + Tailwind CSS + Daisy UI with additional installed setup for custom font, icons, animation, and more.',
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
      meta: [
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: ogBanner,
        },
      ],
    });

    return {};
  },
};
</script>
