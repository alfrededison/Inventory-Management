<template>
  <q-page padding class="IM__page-with-sticky">
    <q-card flat bordered class="IM__product-card">
      <q-card-section :horizontal="$q.screen.gt.xs">
        <q-img :src="product.image" class="IM__product-card-image"/>
        <q-card-section :class="{
          'IM__product-card-content': true,
          'q-px-none': !$q.screen.gt.xs,
          'q-px-lg': $q.screen.gt.xs,
        }">
          <div class="q-pb-lg">
            <div class="text-h6">{{ product.name }}</div>
            <div class="text-subtitle1">{{ product.sku }}</div>
          </div>
          <q-form @submit="save">
            <q-input
              :label="$t('products.quantity')"
              type="number"
              stack-label
              v-model.number="form.quantity"
            />
            <q-select
              :label="$t('inventory.location')"
              :options="locationOptions"
              stack-label
              v-model="form.toLocation"
            />
          </q-form>
        </q-card-section>
      </q-card-section>
    </q-card>
    <EditBar :title="$t('inventory.add')" @save="save" @cancel="backToProduct"/>
  </q-page>
</template>

<script>
import EditBar from 'components/EditBar';

export default {
  components: {
    EditBar,
  },
  data() {
    return {
      product: {
        id: 'CANDY392_Saigon',
        name: 'Lollipop',
        sku: 'CANDY392',
        location: 'Saigon',
        image: 'https://picsum.photos/500/300',
        quantity: 17
      },
      form: {},
    };
  },
  computed: {
    locationOptions() {
      return [
        'Hanoi',
        'Saigon',
        'Danang',
      ];
    }
  },
  methods: {
    save() {
      this.$emit('save');
    },
    backToProduct() {
      this.$router.push({name: 'product_show'});
    }
  }
};
</script>
