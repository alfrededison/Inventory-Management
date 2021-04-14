<template>
  <q-page padding class="IM__page-with-sticky">
    <Product @save="save"/>
    <EditBar :title="$t('products.add')" @save="save" @cancel="backToList"/>
  </q-page>
</template>

<script>
import EditBar from 'components/EditBar';
import Product from 'components/Product';

export default {
  components: {
    EditBar,
    Product,
  },
  methods: {
    save() {
      this.backToProduct();
    },
    backToProduct() {
      this.$router.push({name: 'product_show'});
    },
    backToList() {
      this.$router.push({name: 'product_list'});
    }
  },
};
</script>
