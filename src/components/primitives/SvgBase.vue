<template>
  <component
    :is="importedSvg"
    :class="colorClass"
    />
</template>

<script>
export default {
  props: {
    svg: {
      type: [String, Object],
      required: true,
      validator: value => typeof value === 'string' || typeof value === 'object',
    },
    colorClass: {
      type: String,
      default: null,
      required: false,
    },
  },
  computed: {
    importedSvg() {
      const { svg } = this;

      if (typeof svg === 'object') {
        return svg;
      }
      return () => import(/* webpackMode: "eager" */`@/assets/${svg}.svg`);
    },
  },
};
</script>
