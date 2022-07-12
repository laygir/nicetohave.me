<template>
  <div>
    <div
      v-for="item in views.home.fields.mediaGallery && []"
      :key="item.sys.id"
      class="overflow-hidden flex items-center"
      style="max-height:400px;"
      >
      <img
        :src="item.fields.media.fields.file.url"
        class="w-full"
        alt=""
        >
    </div>

    <div class="container mx-auto flex flex-col">
      <h1
        v-if="false"
        class="self-center my-6"
        >
        Hello there!
      </h1>

      <nth-svg-base
        v-if="false"
        svg="logo"
        class="inline"
        />


      <div
        v-if="false"
        id="product-grid"
        class="flex flex-wrap overflow-hidden md:-px-4 lg:-px-4 xl:-px-4"
        >
        <product-preview
          v-for="item in products.items"
          :key="item.sys.id"
          class="my-3 px-3 w-full sm:w-1/2 md:my-4 md:px-4 md:w-1/2 lg:my-4
          lg:px-4 lg:w-1/3 xl:my-4 xl:px-4 xl:w-1/4"
          :product="item"
          />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import ProductPreview from '@/components/constructs/ProductPreview.vue';
import nthSvgBase from '@/components/primitives/SvgBase.vue';

export default {
  name: 'Home',
  components: {
    ProductPreview,
    nthSvgBase,
  },
  computed: {
    ...mapState({
      views: state => state.common.views,
      products: state => state.shop.products,
    }),
  },
  async mounted() {
    // const products = await contentful.getEntries({
    //   content_type: 'product',
    // });
    // const pages = await contentful.getEntries({
    //   content_type: 'page',
    // });
    // const navigation = await fetchEntries('product');
    // console.log('navigation', navigation);
    // const all = await contentful.getEntries();
    // const locales = await contentful.getLocales();
    // console.log('locales', locales);
    // console.log('products', products);
    // console.log('pages', pages);
    // console.log('all', all);
  },
};
</script>
