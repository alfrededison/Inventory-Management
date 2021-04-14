<template>
  <q-page padding class="IM__page-with-sticky">
    <q-table
      class="q-pa-md"
      :dense="$q.screen.lt.md"
      :data="rows"
      :columns="columns"
      :row-key="rowKey"
      :pagination="pagination"
      selection="multiple"
      :selected.sync="selected"
    >
      <template v-slot:top>
        <q-btn v-if="selected.length" color="negative" :label="$t('actions.deleteSelected')" @click="deleteRows"/>
      </template>
      <template v-slot:body-cell-image="props">
        <q-td :props="props">
          <q-img :src="props.row.image" spinner-color="primary" :ratio="1"/>
        </q-td>
      </template>
      <template v-slot:body-cell-quantity="props">
        <q-td :props="props">
          <q-btn :color="inventoryAlert(props.row)" style="width: 100%">{{ props.value }}</q-btn>
        </q-td>
      </template>
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn icon="more_horiz" dense flat size="12px">
            <q-menu anchor="bottom right" self="top right">
              <q-list style="min-width: 100px">
                <q-item clickable v-close-popup :to="{name: 'inventory_quantity'}">
                  <q-icon name="inventory" size="sm" class="q-mr-sm"/>
                  <q-item-section>{{ $t('inventory.updateQuantity') }}</q-item-section>
                </q-item>
                <q-item clickable v-close-popup :to="{name: 'inventory_transaction'}">
                  <q-icon name="import_export" size="sm" class="q-mr-sm"/>
                  <q-item-section>{{ $t('inventory.transaction') }}</q-item-section>
                </q-item>
                <q-item clickable v-close-popup :to="{name: 'inventory_transfer'}">
                  <q-icon name="local_shipping" size="sm" class="q-mr-sm"/>
                  <q-item-section>{{ $t('inventory.transfer') }}</q-item-section>
                </q-item>
                <q-item clickable v-close-popup :to="{name: 'product_show'}">
                  <q-icon name="manage_search" size="sm" class="q-mr-sm"/>
                  <q-item-section>{{ $t('inventory.productView') }}</q-item-section>
                </q-item>
                <q-separator/>
                <q-item clickable v-close-popup :to="{name: 'inventory_history'}">
                  <q-icon name="history" size="sm" class="q-mr-sm"/>
                  <q-item-section>{{ $t('inventory.transactionHistory') }}</q-item-section>
                </q-item>
                <q-item clickable v-close-popup :to="{name: 'inventory_add_record'}">
                  <q-icon name="change_history" size="sm" class="q-mr-sm"/>
                  <q-item-section>{{ $t('inventory.addRecord') }}</q-item-section>
                </q-item>
                <q-separator/>
                <q-item clickable v-close-popup class="text-negative">
                  <q-icon name="delete" size="sm" class="q-mr-sm"/>
                  <q-item-section>{{ $t('toolbar.delete') }}</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-td>
      </template>
    </q-table>
    <q-page-sticky expand position="top">
      <q-toolbar class="IM__sticky bg-white q-px-md">
        <q-toolbar-title shrink class="row items-center no-wrap">
          <span>{{ $t('inventory.list') }}</span>
        </q-toolbar-title>
        <q-space/>
        <q-btn icon="add" dense flat class="IM__sticky-button" size="12px" color="primary" :to="{name: 'inventory_add'}">
          <span v-if="$q.screen.gt.xs">{{ $t('inventory.add') }}</span>
        </q-btn>
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
export default {
  data() {
    return {
      pagination: {
        sortBy: 'sku',
        descending: true,
        rowsPerPage: 10,
        page: 1,
      },

      rowKey: 'id',

      selected: [],

      columns: [
        {name: 'image', field: 'image', label: this.$t('products.image'), align: 'center'},
        {name: 'name', field: 'name', label: this.$t('products.name'), align: 'left', sortable: true},
        {name: 'sku', field: 'sku', label: this.$t('products.sku'), align: 'left', sortable: true},
        {name: 'location', field: 'location', label: this.$t('inventory.location'), sortable: true},
        {name: 'quantity', field: 'quantity', label: this.$t('products.quantity'), align: 'center', sortable: true},
        {
          name: 'lastTransaction',
          field: 'lastTransaction',
          label: this.$t('inventory.lastTransaction'),
          sortable: true
        },
        {name: 'actions', label: this.$t('actions.actions')},
      ],

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
  methods: {
    inventoryAlert(row) {
      return row.quantity === 0 ? 'negative' : row.reorderPoint > row.quantity ? 'warning' : 'positive';
    },

    deleteRows() {
      console.log('deleted', this.selected);
    }
  },
};
</script>
