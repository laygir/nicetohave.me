.<template>
  <footer
    id="footer"
    class="bg-gray-50 border-t border-gray-200"
    >
    <div
      class="container px-4 mx-auto pt-6 pb-10 flex flex-col sm:flex-row justify-start"
      >
      <div class="sm:mr-12 md:mr-20 mb-12">
        <nth-svg-base
          svg="logo"
          />
      </div>

      <ul
        v-for="(col, i) in getFooter.length"
        :key="i"
        class="sm:mx-4 w-56 pb-4"
        >
        <li
          v-for="(item, index) in getFooter[i]"
          :key="index"
          >
          <nth-text>
            {{ item.text }}
          </nth-text>
        </li>
      </ul>

      <!-- <div class="locale-changer">
        <select
          v-model="$i18n.locale"
          @change="setAppState(['userLang', $i18n.locale])"
          >
          <option
            v-for="(lang, i) in langs"
            :key="`Lang${i}`"
            :value="lang"
            >
            {{ lang }}
          </option>
        </select>
      </div> -->
    </div>
  </footer>
</template>

<script>
// import { mapMutations, mapState } from 'vuex';
import nthSvgBase from '@/components/primitives/SvgBase.vue';
import nthText from '@/components/primitives/Text.vue';

export default {
  components: {
    nthSvgBase,
    nthText,
  },
  data() {
    return { langs: ['en', 'de'] };
  },
  computed: {
    // ...mapState({
    //   appState: state => state.common.appState,
    // }),
    getFooter() {
      // return this.$t('footer.cols');
      return [];
    },
  },
  mounted() {
  },
  methods: {
    // ...mapMutations({
    //   setAppState: 'enquete/common/setAppState',
    // }),
    changeLang() {
      // this.$i18n.locale = this.$i18n.locale === 'en' ? 'de' : 'en';
      // this.setAppState(['userLang', this.$i18n.locale]);
    },
  },
};
</script>

<style>
</style>
