<template>
  <p
    class=""
    :class="[getColor, getClass, getTextAlign]"
    >
    <slot v-if="!text" />
    {{ text }}
  </p>
</template>


<script>
import commonProps from '@/mixins/commonProps';

// Valid variants
const variantProps = [
  'body',
  'body-muted',
  'body-bold',
  'body-sm',
  'body-sm-bold',
  'body-xs',
  'body-xs-semibold',
];

const alignProps = [
  'left', //
  'center',
  'right',
];

export default {
  mixins: [commonProps],

  props: {
    variant: {
      type: String,
      required: false,
      default: 'body-sm',
      validator: value => variantProps.includes(value),
    },
    color: {
      type: String,
      required: false,
      default: 'text-gray-700',
      validator: value => commonProps.methods.colorProps().includes(value),
    },
    align: {
      type: String,
      required: false,
      default: null,
      validator: value => alignProps.includes(value),
    },
  },
  computed: {
    getTextAlign() {
      return [
        // Left alignment is default, declared here only to override if needed
        this.align === 'left' ? 'text-left' : null,
        this.align === 'center' ? 'text-center' : null,
        this.align === 'right' ? 'text-right' : null,
      ];
    },
    getClass() {
      return [
        'font-body',
        'leading-6',
        this.variant === 'body-lg' ? 'text-lg font-medium' : null,
        this.variant === 'body-lg-bold' ? 'text-lg font-bold' : null,
        this.variant === 'body' ? 'text-base font-medium' : null,
        this.variant === 'body-bold' ? 'font-bold' : null,
        this.variant === 'body-sm' ? 'text-sm font-medium' : null,
        this.variant === 'body-sm-bold' ? 'text-sm font-bold' : null,
        this.variant === 'body-xs' ? 'text-xs font-medium' : null,
        this.variant === 'body-xs-semibold' ? 'text-xs font-semibold' : null,
      ];
    },
    getColor() {
      return [
        this.color ? this.color : null,
      ];
    },
  },
};
</script>

