
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';

const fullConfig = resolveConfig(tailwindConfig);

// Vue.$log.info('fullconfig', fullConfig);
// console.log(fullConfig);
const colorProps = () => [
  'text-white', //
  'text-primary',
  'text-secondary',
  'warning',
  'danger',
  'text-muted',
  'text-blue-500',
  'text-red-500',
  'bg-gray-100',
  'text-gray-100',
  'text-gray-200',
  'text-gray-300',
  'text-gray-400',
  'text-gray-500',
  'text-gray-600',
  'text-gray-700',
  'text-gray-800',
  Object.keys(fullConfig.theme.colors.gray).map(e => `gray-${e}`),
].flat();

// console.log('colorProps', colorProps());

const alignProps = [
  'left', //
  'center',
  'right',
];

export default {
  props: {
    id: {
      type: String,
      required: false,
      default: null,
    },
    heading: {
      type: String,
      required: false,
      default: null,
    },
    text: {
      type: [String, Function, Array],
      required: false,
      default: null,
    },
    svg: {
      type: [String, Object],
      required: false,
      default: null,
    },
    svgHover: {
      type: [String, Object],
      required: false,
      default: null,
    },
    svgAlign: {
      type: String,
      required: false,
      default: null,
      validator: value => alignProps.includes(value),
    },
    svgColor: {
      type: String,
      required: false,
      default: 'gray-500',
      validator: value => colorProps().includes(value),
    },
    color: {
      type: String,
      required: false,
      default: 'gray-500',
      validator: value => colorProps().includes(value),
    },
    block: {
      type: Boolean,
      default: true,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
    selected: {
      type: Boolean,
      default: false,
      required: false,
    },
    variant: {
      type: String,
      required: false,
      default: null,
    },
    activeColor: {
      type: String,
      required: false,
      default: null,
    },
    passiveColor: {
      type: String,
      required: false,
      default: null,
    },
    label: {
      type: String,
      required: false,
      default: null,
    },
    labelColor: {
      type: String,
      required: false,
      default: null,
    },
    value: {
      type: [String, Number],
      default: null,
      required: false,
    },
    readonly: {
      type: Boolean,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    min: {
      type: Number,
      default: 0,
      required: false,
    },
    max: {
      type: Number,
      default: 0,
      required: false,
    },
    padding: {
      type: String,
      default: 'p-6',
      required: false,
    },
    margin: {
      type: String,
      default: null,
      required: false,
    },
  },
  computed: {
  },
  methods: {
    colorProps,
  },
};
