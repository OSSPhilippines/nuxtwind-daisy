<template>

  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-xl">
        <h1 data-aos="fade-down" class="text-4xl md:text-7xl font-bold mb-6">Nuxtwind Daisy</h1>
        <p data-aos="fade-down" data-aos-delay="300" class="md:text-lg mb-6">Nuxtwind Daisy is a starter template project for Nuxt.js 3 + Tailwind CSS + Daisy UI with additional installed setup for custom font, icons, animation, and more.</p>
        <div class="flex justify-center space-x-5">
          <a
            data-aos="fade-down"
            data-aos-delay="600"
            class="btn btn-sm md:btn-md btn-primary"
            href="https://github.com/OSSPhilippines/nuxtwind-daisy/fork"
            target="_blank"
          >
            Fork this Project
          </a>
          <a
            data-aos="fade-down"
            data-aos-delay="600"
            class="btn btn-sm md:btn-md btn-primary btn-outline"
            href="https://github.com/OSSPhilippines/nuxtwind-daisy"
            target="_blank"
          >
            Give us a star in GitHub
          </a>
        </div>
      </div>
    </div>
  </div>

  <generic-panel>
    <div class="flex flex-col">
      <h1 class="text-3xl md:text-5xl mb-5">Introduction</h1>
      <p class="md:text-lg">Create beautiful and fast websites without worrying about the tedious setup. Just fork this repository and start hacking away!</p>
    </div>
  </generic-panel>

  <generic-panel>
    <div class="flex flex-col">
      <h1 class="text-3xl md:text-5xl mb-5">Getting Started</h1>
      <p class="md:text-lg">Read <a href="https://github.com/OSSPhilippines/nuxtwind-daisy#readme" class="text-primary">the documentation</a> on how to start quickly.</p>
    </div>
  </generic-panel>

  <generic-panel>
    <div class="flex flex-col">
      <h1 class="text-3xl md:text-5xl mb-5">Features</h1>
      <p class="md:text-lg">See what you can do below. Basically, every basic thing that you need is already included in this starter template project. From custom font, icons, animations, and more.</p>
    </div>
  </generic-panel>

  <generic-panel>
    <div class="flex flex-col mb-5">
      <h1 class="text-xl md:text-3xl mb-5">Icons by Line Awesome <i class="las la-icons text-primary"></i></h1>
      <p class="md:text-lg">Get more icons from the <a class="text-primary" href="https://icons8.com/line-awesome" target="_blank">Line Awesome documentation</a>.</p>
    </div>
    <div class="flex space-x-5 overflow-scroll">
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
      <a class="hidden md:inline text-lg mt-1 text-primary" href="https://icons8.com/line-awesome" target="_blank">and more...</a>
    </div>
    <a class="inline md:hidden text-lg mt-1 text-primary" href="https://icons8.com/line-awesome" target="_blank">and more...</a>
  </generic-panel>

  <generic-panel>
    <div class="flex flex-col mb-5">
      <h1 class="text-xl md:text-3xl mb-5">Animation by AOS.js <i class="las la-running text-primary"></i></h1>
      <p class="md:text-lg">Check <a class="text-primary" href="https://michalsnik.github.io/aos/" target="_blank">AOS.js documentation</a> for more animations.</p>
    </div>
    <div class="flex flex-col">
      <div class="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5">
        <div data-aos="fade-down" data-aos-delay="500" class="w-full md:w-[200px] h-[200px] bg-green-200"></div>
        <div data-aos="flip-left" data-aos-delay="1000" class="w-full md:w-[200px] h-[200px] bg-red-200"></div>
        <div data-aos="zoom-in" data-aos-delay="1500" class="w-full md:w-[200px] h-[200px] bg-blue-200"></div>
        <a class="text-lg mt-1 text-primary" href="https://michalsnik.github.io/aos/" target="_blank">more animations...</a>
      </div>
    </div>
  </generic-panel>

  <generic-panel>
    <div class="flex flex-col mb-5">
      <h1 class="text-xl md:text-3xl mb-5">UI Components by Daisy UI 🌼 version 3</h1>
      <p class="md:text-lg">Learn more from the official <a class="text-primary" href="https://daisyui.com/" target="_blank">daisyUI documentation</a>.</p>
    </div>
    <div class="flex flex-col">
      <h1 class="md:text-xl mb-5 font-bold">Buttons</h1>
      <div class="flex space-x-5 overflow-scroll">
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
    <div class="flex flex-col">
      <h1 class="md:text-xl mb-5 font-bold">Alerts</h1>
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
    <div class="flex flex-col">
      <h1 class="md:text-xl mb-5 font-bold">Badges</h1>
      <div class="flex space-x-5 overflow-scroll">
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

  <generic-panel>
    <div class="flex flex-col">
      <h1 class="md:text-xl mb-5 font-bold">Chat Bubbles</h1>
      <div class="flex flex-col">
        <div class="chat chat-start">
          <div class="chat-bubble chat-bubble-primary">What kind of nonsense is this</div>
        </div>
        <div class="chat chat-start">
          <div class="chat-bubble chat-bubble-secondary">Put me on the Council and not make me a Master!??</div>
        </div>
        <div class="chat chat-start">
          <div class="chat-bubble chat-bubble-accent">That's never been done in the history of the Jedi. It's insulting!</div>
        </div>
        <div class="chat chat-end">
          <div class="chat-bubble chat-bubble-info">Calm down, Anakin.</div>
        </div>
        <div class="chat chat-end">
          <div class="chat-bubble chat-bubble-success">You have been given a great honor.</div>
        </div>
        <div class="chat chat-end">
          <div class="chat-bubble chat-bubble-warning">To be on the Council at your age.</div>
        </div>
        <div class="chat chat-end">
          <div class="chat-bubble chat-bubble-error">It's never happened before.</div>
        </div>
      </div>
    </div>
  </generic-panel>

  <generic-panel>
    <div class="flex flex-col">
      <h1 class="md:text-xl mb-5 font-bold">Checkboxes</h1>
      <div class="flex flex-col">
        <div class="form-control w-52">
          <label class="cursor-pointer label">
            <span class="label-text">Remember me</span>
            <input type="checkbox" class="toggle toggle-primary" checked />
          </label>
        </div>
        <div class="form-control w-52">
          <label class="cursor-pointer label">
            <span class="label-text">Remember me</span>
            <input type="checkbox" class="toggle toggle-secondary" checked />
          </label>
        </div>
        <div class="form-control w-52">
          <label class="cursor-pointer label">
            <span class="label-text">Remember me</span>
            <input type="checkbox" class="toggle toggle-accent" checked />
          </label>
        </div>
      </div>
    </div>
  </generic-panel>

  <generic-panel>
    <div class="flex flex-col">
      <h1 class="md:text-xl mb-5 font-bold">Footers</h1>
      <footer class="footer p-10 bg-base-200 text-base-content">
        <div>
          <span class="footer-title">Services</span>
          <a class="link link-hover">Branding</a>
          <a class="link link-hover">Design</a>
          <a class="link link-hover">Marketing</a>
          <a class="link link-hover">Advertisement</a>
        </div>
        <div>
          <span class="footer-title">Company</span>
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Jobs</a>
          <a class="link link-hover">Press kit</a>
        </div>
        <div>
          <span class="footer-title">Legal</span>
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <footer class="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <div class="items-center grid-flow-col">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
          <p>ACME Industries Ltd. <br/>Providing reliable tech since 1992</p>
        </div>
        <div class="md:place-self-center md:justify-self-end">
          <div class="grid grid-flow-col gap-4">
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
          </div>
        </div>
      </footer>
    </div>
  </generic-panel>

  <generic-panel>
    <div class="flex flex-col">
      <h1 class="md:text-xl mb-5 font-bold">And more components...</h1>
      <p>Visit the official <a href="https://daisyui.com/docs/install/" target="_blank" class="text-primary">Daisy UI documentation</a>.</p>
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
