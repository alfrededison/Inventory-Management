<template>
  <q-page padding class="IM__page-with-sticky">
    <Inventory :rows="rows"/>
    <q-page-sticky expand position="top">
      <q-toolbar class="IM__sticky bg-white q-px-md">
        <q-toolbar-title shrink class="row items-center no-wrap">
          <span>{{ $t('inventory.list') }}</span>
        </q-toolbar-title>
        <q-space/>
        <q-btn icon="more_vert" dense flat class="IM__sticky-button q-ml-md" size="12px">
          <q-tooltip anchor="top left" self="bottom middle">{{ $t('toolbar.more') }}</q-tooltip>
          <q-menu anchor="bottom right" self="top right">
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup>
                <q-icon name="file_upload" size="sm" class="q-mr-sm"/>
                <q-item-section>{{ $t('toolbar.importExcel') }}</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-icon name="file_download" size="sm" class="q-mr-sm"/>
                <q-item-section>{{ $t('toolbar.exportExcel') }}</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-page-sticky>
  </q-page>
</template>

<script>
import Inventory from 'components/Inventory';

export default {
  components: {
    Inventory,
  },
  data() {
    return {
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
        {
          id: 'FOOD305_Hanoi',
          name: 'Cupcake', sku: 'FOOD305', location: 'Hanoi',
          image: 'https://picsum.photos/400/600',
          quantity: 67, reorderPoint: 10,
          lastTransaction: '2021-04-14T20:53:33.792Z'
        },
        {
          id: 'FOOD356_Hanoi',
          name: 'Gingerbread', sku: 'FOOD356', location: 'Hanoi',
          image: 'https://picsum.photos/400/500',
          quantity: 49, reorderPoint: 10,
          lastTransaction: '2021-04-14T20:53:33.792Z'
        },
        {
          id: 'CANDY375_Saigon',
          name: 'Jelly bean', sku: 'CANDY375', location: 'Saigon',
          image: 'https://picsum.photos/400/300',
          quantity: 0, reorderPoint: 20,
          lastTransaction: '2021-04-14T20:53:33.792Z'
        },
        {
          id: 'FOOD262_Hue',
          name: 'Eclair', sku: 'FOOD262', location: 'Hue',
          image: 'https://picsum.photos/400/300',
          quantity: 23, reorderPoint: 10,
          lastTransaction: '2021-04-14T20:53:33.792Z'
        },
        {
          id: 'FOOD305_Hue',
          name: 'Cupcake', sku: 'FOOD305', location: 'Hue',
          image: 'https://picsum.photos/400/600',
          quantity: 67, reorderPoint: 10,
          lastTransaction: '2021-01-14T08:53:33.792Z'
        },
        {
          id: 'FOOD356_Da Nang',
          name: 'Gingerbread', sku: 'FOOD356', location: 'Da Nang',
          image: 'https://picsum.photos/400/500',
          quantity: 49, reorderPoint: 10,
          lastTransaction: '2021-01-14T08:53:33.792Z'
        },
        {
          id: 'CANDY375_Da Nang',
          name: 'Jelly bean', sku: 'CANDY375', location: 'Da Nang',
          image: 'https://picsum.photos/400/300',
          quantity: 0, reorderPoint: 20,
          lastTransaction: '2021-01-14T08:53:33.792Z'
        },
        {
          id: 'CANDY392_Saigon',
          name: 'Lollipop', sku: 'CANDY392', location: 'Saigon',
          image: 'https://picsum.photos/500/300',
          quantity: 17, reorderPoint: 20,
          lastTransaction: '2021-01-14T08:53:33.792Z'
        },
        {
          id: 'CANDY408_Saigon',
          name: 'Honeycomb', sku: 'CANDY408', location: 'Saigon',
          image: 'https://picsum.photos/600/300',
          quantity: 87, reorderPoint: 20,
          lastTransaction: '2020-04-14T08:53:33.792Z'
        },
        {
          id: 'CANDY452_Saigon',
          name: 'Donut', sku: 'CANDY452', location: 'Saigon',
          image: 'https://picsum.photos/400/600',
          quantity: 51, reorderPoint: 20,
          lastTransaction: '2020-04-14T08:53:33.792Z'
        },
        {
          id: 'CANDY518_Saigon',
          name: 'KitKat', sku: 'CANDY518', location: 'Saigon',
          image: 'https://picsum.photos/200/300',
          quantity: 65, reorderPoint: 20,
          lastTransaction: '2021-04-13T07:53:33.792Z'
        }
      ]
    };
  },
};
</script>
