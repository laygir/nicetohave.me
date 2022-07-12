<template>
  <header
    id="header"
    class=""
    >
    <div class="container mx-auto py-8 px-4 flex flex-col items-center">
      <nth-svg-base
        svg="logo"
        class="inline"
        />

      <nth-text
        :text="views.home.fields.tagline"
        class="uppercase py-2 tracking-widest"
        variant="body-xs"
        />

      <div
        v-if="false"
        class="py-4 flex container justify-between sm:w-full md:max-w-xl"
        >
        <button class="px-8 focus:outline-none">
          <nth-svg-base
            svg="icons/search"
            class="w-5 fill-current text-primary"
            />
        </button>

        <nav>
          <router-link
            v-for="(item, i) in views.home.fields.categories"
            :key="i"
            :to="`/${item.toLowerCase()}`"
            class="group px-2"
            >
            <nth-text
              :text="item"
              class="inline uppercase border-b-2 pb-1 border-transparent group-hover:border-red-500"
              />
          </router-link>
        </nav>


        <button class="px-8 snipcart-checkout focus:outline-none">
          <nth-svg-base
            svg="icons/cart"
            class="w-5 inline"
            />
          <nth-text
            class="inline snipcart-items-count px-3 bg-indigo-200"
            text="0"
            />
          <nth-text
            class="inline snipcart-customer-signin px-3 bg-indigo-200"
            text="My Account"
            />
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex';

import nthText from '@/components/primitives/Text.vue';
import nthSvgBase from '../primitives/SvgBase.vue';
// import nthButton from '../primitives/Button.vue';

export default {
  components: {
    nthSvgBase,
    nthText,
    // nthButton,
  },
  computed: {
    ...mapState({
      views: state => state.common.views,
    }),
  },
};
</script>

<style></style>
