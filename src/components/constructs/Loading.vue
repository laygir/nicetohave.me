.<template>
  <div
    class="mx-auto bg-gray-100 text-primary py-4 shadow-gray-200
    rounded-md h-full justify-center items-center flex flex-col"
    >
    <div>
      <div class="flex flex-row items-center px-4">
        <nth-svg-base
          svg="loading"
          class="animate-spin h-5 w-5 text-primary mr-4"
          />
        <nth-text
          variant="body-bold"
          color="text-primary"
          >
          Loading
          <!-- {{ $t('commons.loading') }} -->
        </nth-text>
      </div>
    </div>
  </div>
</template>
<script>
import nthSvgBase from '@/components/primitives/SvgBase.vue';
import nthText from '@/components/primitives/Text.vue';

export default {
  components: {
    nthSvgBase,
    nthText,
  },
};
</script>

<style>

</style>
