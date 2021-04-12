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
      <template v-slot:body-cell-inventory="props">
        <q-td :props="props">
          <span :class="{'text-negative': productAlert(props.row)}">{{ props.value }}</span>
        </q-td>
      </template>
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn icon="more_horiz" dense flat size="12px">
            <q-menu anchor="bottom right" self="top right">
              <q-list style="min-width: 100px">
                <q-item clickable v-close-popup to="/products/show">
                  <q-icon name="zoom_in" size="sm" class="q-mr-sm"/>
                  <q-item-section>{{ $t('toolbar.detail') }}</q-item-section>
                </q-item>
                <q-item clickable v-close-popup to="/products/edit">
                  <q-icon name="edit" size="sm" class="q-mr-sm"/>
                  <q-item-section>{{ $t('toolbar.edit') }}</q-item-section>
                </q-item>
                <q-item clickable v-close-popup to="/products/history">
                  <q-icon name="history" size="sm" class="q-mr-sm"/>
                  <q-item-section>{{ $t('toolbar.history') }}</q-item-section>
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
          <span>{{ $t('products.list') }}</span>
        </q-toolbar-title>
        <q-space/>
        <q-btn icon="add" dense flat class="IM__sticky-button" size="12px" color="primary" to="/products/add">
          <span v-if="$q.screen.gt.xs">{{ $t('products.add') }}</span>
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

      rowKey: 'sku',

      selected: [],

      columns: [
        {name: 'image', field: 'image', label: this.$t('products.image'), align: 'center'},
        {name: 'name', field: 'name', label: this.$t('products.name'), align: 'left', sortable: true},
        {name: 'sku', field: 'sku', label: this.$t('products.sku'), align: 'left', sortable: true},
        {name: 'category', field: 'category', label: this.$t('products.category'), sortable: true},
        {
          name: 'inventory',
          field: 'inventory',
          format: val => this.$tc('products.quantityLocation', val.location, {
            quantity: val.quantity,
            location: val.location
          }),
          label: this.$t('products.quantity'),
          sortable: true,
          sort: (a, b) => (a.quantity - b.quantity) || (a.location - b.location),
        },
        {name: 'actions', label: this.$t('actions.actions')},
      ],

      rows: [
        {
          name: 'Frozen Yogurt', sku: 'FOOD159', category: 'Food',
          image: 'https://picsum.photos/200/300',
          inventory: {quantity: 24, location: 4},
          reorderPoint: 10,
        },
        {
          name: 'Ice cream sandwich', sku: 'FOOD237', category: 'Food',
          image: 'https://picsum.photos/300/300',
          inventory: {quantity: 37, location: 4},
          reorderPoint: 10,
        },
        {
          name: 'Eclair', sku: 'FOOD262', category: 'Food',
          image: 'https://picsum.photos/400/300',
          inventory: {quantity: 23, location: 6},
          reorderPoint: 10,
        },
        {
          name: 'Cupcake', sku: 'FOOD305', category: 'Food',
          image: 'https://picsum.photos/400/600',
          inventory: {quantity: 67, location: 4},
          reorderPoint: 10,
        },
        {
          name: 'Gingerbread', sku: 'FOOD356', category: 'Food',
          image: 'https://picsum.photos/400/500',
          inventory: {quantity: 49, location: 3},
          reorderPoint: 10,
        },
        {
          name: 'Jelly bean', sku: 'CANDY375', category: 'Candy',
          image: 'https://picsum.photos/400/300',
          inventory: {quantity: 0, location: 0},
          reorderPoint: 20,
        },
        {
          name: 'Lollipop', sku: 'CANDY392', category: 'Candy',
          image: 'https://picsum.photos/500/300',
          inventory: {quantity: 87, location: 1},
          reorderPoint: 20,
        },
        {
          name: 'Honeycomb', sku: 'CANDY408', category: 'Candy',
          image: 'https://picsum.photos/600/300',
          inventory: {quantity: 87, location: 6},
          reorderPoint: 20,
        },
        {
          name: 'Donut', sku: 'CANDY452', category: 'Candy',
          image: 'https://picsum.photos/400/600',
          inventory: {quantity: 51, location: 4},
          reorderPoint: 20,
        },
        {
          name: 'KitKat', sku: 'CANDY518', category: 'Candy',
          image: 'https://picsum.photos/200/300',
          inventory: {quantity: 65, location: 7},
          reorderPoint: 20,
        }
      ]
    };
  },
  methods: {
    productAlert(row) {
      return row.inventory.location === 0 || row.reorderPoint > (row.inventory.quantity / row.inventory.location);
    },

    deleteRows() {
      console.log('deleted', this.selected);
    }
  },
};
</script>
