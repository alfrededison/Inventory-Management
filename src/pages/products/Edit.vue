<template>
  <q-page padding class="IM__page-with-sticky">
    <Product :edit-product="product" @save="save"/>
    <EditBar :title="$t('products.edit', {name: product.name})" @save="save" @cancel="backToProduct"/>
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
  data() {
    return {
      product: {
        'name': 'TV 4k',
        'description': 'High-res TV with lowest price',
        'category': 'Candy',
        'sku': 'TV2001',
        'price': 1000,
        'salePrice': 1400,
        'reorderPoint': 10,
        'image': 'https://picsum.photos/600/300'
      },
    };
  },
  methods: {
    save() {
      this.backToProduct();
    },
    backToProduct() {
      this.$router.push({name: 'product_show'});
    }
  },
};
</script>
