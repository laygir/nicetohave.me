<template>
  <div class="product-preview group">
    <router-link
      :to="`/`"
      class=""
      >
      <img
        :src="product.fields.images[0].fields.file.url"
        alt=""
        class="rounded-md group-hover:shadow-xl shadow-sm transition-all duration-1000 ease-out"
        >

      <div class="flex items-center">
        <div class="flex-grow">
          <nth-text
            class="pt-4"
            variant="body"
            color="text-primary"
            :text="product.fields.title"
            />

          <nth-text
            class="py-1"
            variant="body"
            color="text-gray-700"
            :text="product.fields.price"
            />
        </div>

        <div class="">
          <nth-svg-base
            svg="icons/view"
            class="fill-current text-primary transform group-hover:scale-100
            scale-0 transition-all duration-200 ease-out"
            />
        </div>
      </div>

      <!-- salePrice: {{ product.fields.salePrice }} -->
      <!-- Categories: {{ product.fields.categories }} -->
      <!-- id: {{ product.sys.id }} -->
      <div class="flex justify-end">
        <nth-button
          :block="false"
          text="Add to cart"
          variant="primary-slim"
          class="snipcart-add-item"
          :data-item-id="product.sys.id"
          :data-item-price="product.fields.price"
          :data-item-url="$route.path"
          :data-item-name="product.fields.title"
          :data-item-image="product.fields.images[0].fields.file.url"
          :data-item-categories="product.fields.categories && product.fields.categories.join('|')"
          />
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import nthButton from '@/components/primitives/Button.vue';
import nthText from '@/components/primitives/Text.vue';
import nthSvgBase from '@/components/primitives/SvgBase.vue';

export default {
  components: {
    nthButton,
    nthText,
    nthSvgBase,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState({
      view: state => state.common.views,
    }),
  },
  mounted() {
  },
  methods: {
  },
};
</script>

<style></style>
