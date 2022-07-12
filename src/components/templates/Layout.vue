.<template>
  <div class="min-h-screen flex flex-col justify-center items-center">
    <div
      v-if="false"
      class="bg-primary flex justify-center py-1"
      >
      top bar
    </div>

    <nth-header />

    <transition
      v-if="false"
      :name="viewTransition"
      mode="out-in"
      >
      <nth-loading
        v-if="isLoading"
        />

      <div
        v-else
        class="flex-grow"
        >
        <transition
          :name="viewTransition"
          mode="out-in"
          >
          <router-view />
        </transition>
      </div>
    </transition>

    <nth-footer v-if="false" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import nthFooter from '@/components/constructs/Footer.vue';
import nthHeader from '@/components/constructs/Header.vue';
import nthLoading from '@/components/constructs/Loading.vue';

export default {
  components: {
    nthHeader,
    nthFooter,
    nthLoading,
  },
  props: {
    isSubView: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      isLoading: true,
      viewTransition: 'view-fade',
      assessmentData: null,
    };
  },
  computed: {
    ...mapState({
      views: state => state.common.views,
    }),
    getId() {
      const { id } = this;
      return `app__layout__${id}`;
    },
  },
  async created() {
    // this.$log.info('Created Assessment Layout');

    // TODO: Remove loading simulation
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  },
};
</script>

<style>
</style>
