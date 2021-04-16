<template>
  <q-page class="q-pa-lg">
    <h5 class="q-mt-none">{{ $t('pages.dashboard') }}</h5>
    <div class="row q-gutter-md">
      <q-card class="col-xs-12 col-md text-white text-right CARD__sale-order">
        <q-card-section>
          <div class="text-h6">2</div>
          <div class="text-subtitle2">Sales Orders To Fulfil</div>
        </q-card-section>
      </q-card>
      <q-card class="col-xs-12 col-md text-white text-right CARD__pickup">
        <q-card-section>
          <div class="text-h6">0</div>
          <div class="text-subtitle2">Shipments Awaiting Pick-up</div>
        </q-card-section>
      </q-card>
      <q-card class="col-xs-12 col-md text-white text-right CARD__purchase-order">
        <q-card-section>
          <div class="text-h6">1</div>
          <div class="text-subtitle2">Overdue Purchase Orders</div>
        </q-card-section>
      </q-card>
      <q-card class="col-xs-12 col-md text-white text-right CARD__alert">
        <q-card-section>
          <div class="text-h6">3</div>
          <div class="text-subtitle2">{{ $t('toolbar.notification') }}</div>
        </q-card-section>
      </q-card>
    </div>
    <div class="row q-gutter-md q-pt-md">
      <q-card class="col-xs-12 col-lg">
        <q-card-section class="bg-secondary text-white">
          <div class="text-h6">{{ $t('statistics.topSeller', {number: 10}) }}</div>
          <div class="text-subtitle2">{{ $t('statistics.byProduct') }}</div>
        </q-card-section>
        <q-separator/>
        <q-card-section>
          <q-table
            :columns="topProducts.columns"
            :data="topProducts.rows"
            class="q-pa-md"
            dense
            hide-pagination
            row-key="index"
          />
        </q-card-section>
      </q-card>
      <q-card class="col-xs-12 col-md">
        <q-card-section class="bg-secondary text-white">
          <div class="text-h6">{{ $t('statistics.topSales', {number: ''}) }}</div>
          <div class="text-subtitle2">{{ $t('statistics.byLocation') }}</div>
        </q-card-section>
        <q-separator/>
        <q-card-section>
          <q-table
            :columns="topSales.columns"
            :data="topSales.rows"
            class="q-pa-md"
            dense
            hide-pagination
            row-key="index"
          />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
const products = [
  {name: 'Kindle - Black', quantity: 11, value: 1039},
  {name: 'LG Tone free', quantity: 12, value: 468},
  {name: 'Amazon Echo - Blue', quantity: 7, value: 467.95},
  {name: 'TV Bravia China', quantity: 7, value: 499},
];

const cities = [
  {name: 'Hanoi', orders: 10},
  {name: 'Saigon', orders: 16},
]

export default {
  data() {
    return {
      topProducts: {
        columns: [
          {name: 'index', field: 'index', label: '#', align: 'left'},
          {name: 'name', field: 'name', label: this.$t('products.name'), align: 'left'},
          {name: 'quantity', field: 'quantity', label: this.$t('products.quantity'), align: 'left'},
          {name: 'value', field: 'value', label: this.$t('sales.value')},
        ],
        rows: products.map((row, index) => {
          row.index = index + 1;
          return row;
        }),
      },
      topSales: {
        columns: [
          {name: 'index', field: 'index', label: '#', align: 'left'},
          {name: 'name', field: 'name', label: this.$t('locations.name'), align: 'left'},
          {name: 'orders', field: 'orders', label: this.$t('sales.numberOfOrders'), align: 'left'},
        ],
        rows: cities.map((row, index) => {
          row.index = index + 1;
          return row;
        }),
      },
    }
  }
};
</script>

<style scoped lang="scss">
@mixin cardGradient($in, $out) {
  background: radial-gradient(circle, $in 0%, $out 100%)
}

.CARD {
  &__sale-order {
    @include cardGradient(#c2e26c, #018832)
  }

  &__pickup {
    @include cardGradient(#f1ad92, #ea651e)
  }

  &__purchase-order {
    @include cardGradient(#35a2ff, #014a88)
  }

  &__alert {
    @include cardGradient(#854fba, #590188)
  }
}
</style>
