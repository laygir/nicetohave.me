<template>
  <button
    :id="id"
    :data-ruid="id"
    :class="getButtonClass"
    :disabled="disabled"
    type="button"
    >
    <nth-svg-base
      v-if="svgAlign === 'left'"
      :svg="svg"
      :class="[getSvgClass, text ? 'mr-2' : null]"
      />

    {{ text }}

    <nth-svg-base
      v-if="svgAlign === 'right'"
      :svg="svg"
      :class="[getSvgClass, text ? 'ml-2' : null]"
      />
  </button>
</template>

<script>
import commonProps from '@/mixins/commonProps';
import nthSvgBase from './SvgBase.vue';

// Valid variants
const variantProps = [
  'primary', //
  'primary-small',
  'primary-slim',
  'primary-tight',
  'primary-outline',
  'white',
  'white-slim',
  'white-tight',
];

export default {
  name: 'EqButton',
  components: {
    nthSvgBase,
  },
  mixins: [commonProps],
  props: {
    variant: {
      type: String,
      required: false,
      default: 'primary',
      validator: value => variantProps.includes(value),
    },
    text: {
      type: [String, Function, Array],
      default: null,
      required: false,
    },
  },
  computed: {
    getSvgClass() {
      return [
        // TODO: Change following to comply with tailwind purge
        'fill-current',
        `text-${this.svgColor}`,
      ];
    },
    getButtonClass() {
      return [
        'btn',
        this.svg ? 'min-h-10' : null,
        this.block ? 'block w-full' : '',
        this.variant === 'primary' ? 'btn-primary uppercase' : null,
        this.variant === 'primary-small' ? 'btn-primary btn-small uppercase' : null,
        this.variant === 'primary-slim' ? 'btn-primary btn-slim uppercase' : null,
        this.variant === 'secondary' ? 'btn-secondary uppercase' : null,
        this.variant === 'white' ? 'btn-white uppercase' : null,
        this.variant === 'white-slim' ? 'btn-white btn-slim uppercase' : null,
        this.variant === 'white-tight' ? 'btn-white btn-label btn-tight' : null,
        this.variant === 'primary-tight' ? 'btn-primary btn-label btn-tight' : null,
        this.variant === 'primary-outline' ? 'btn-label btn-tight' : null,
      ];
    },
  },
};
</script>
