<template>
  <q-page padding>
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
            <div class="text-subtitle2">
              {{ $t('products.price') }}: {{ product.price }}
              -
              {{ $t('products.salePrice') }}: {{ product.salePrice }}
            </div>
            <div>{{ $t('products.quantity') }}: {{
                $tc('products.quantityLocation', product.inventory.location, {
                  quantity: product.inventory.quantity,
                  location: product.inventory.location
                })
              }}
            </div>
            <p class="q-pt-md">{{ product.description }}</p>
          </div>
          <q-card-actions class="q-px-none">
            <q-btn icon="add" color="primary" :label="$t('inventory.add')" :to="{name: 'inventory_add'}"/>
            <q-space/>
            <q-btn color="secondary" :label="$t('toolbar.edit')" :to="{name: 'product_edit'}"/>
            <q-btn color="negative" :label="$t('toolbar.delete')"/>
          </q-card-actions>
        </q-card-section>
      </q-card-section>
    </q-card>
    <Inventory :rows="rows" :show-product="false"/>
  </q-page>
</template>

<script>
import Inventory from 'components/Inventory';

export default {
  components: {Inventory},
  data() {
    return {
      product: {
        'name': 'TV 4k',
        'description': 'High-res TV with lowest price',
        'category': 'Candy',
        'sku': 'TV2001',
        'price': 1000,
        'salePrice': 1400,
        'inventory': {quantity: 87, location: 1},
        'reorderPoint': 10,
        'image': 'https://picsum.photos/600/300'
      },
      form: {
        quantity: 20,
        remark: '',
      },
      rows: [
        {
          id: 'FOOD159_Hanoi',
          name: 'Frozen Yogurt', sku: 'FOOD159', location: 'Hanoi',
          image: 'https://picsum.photos/200/300',
          quantity: 4, reorderPoint: 10,
          lastTransaction: '2021-04-13T08:53:33.792Z'
        },
        {
          id: 'FOOD237_Hanoi',
          name: 'Ice cream sandwich', sku: 'FOOD237', location: 'Hanoi',
          image: 'https://picsum.photos/300/300',
          quantity: 37, reorderPoint: 10,
          lastTransaction: '2021-04-13T08:53:33.792Z'
        },
        {
          id: 'FOOD262_Hanoi',
          name: 'Eclair', sku: 'FOOD262', location: 'Hanoi',
          image: 'https://picsum.photos/400/300',
          quantity: 2, reorderPoint: 10,
          lastTransaction: '2021-04-13T08:53:33.792Z'
        },
      ],
    };
  },
};
</script>
