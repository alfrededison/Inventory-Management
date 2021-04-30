<template>
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
        <q-img :src="props.value" spinner-color="primary" :ratio="1"/>
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
              <q-item v-if="showProduct" clickable v-close-popup :to="{name: 'product_show'}">
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
              <q-item clickable v-close-popup class="text-negative" @click="deleteItem">
                <q-icon name="delete" size="sm" class="q-mr-sm"/>
                <q-item-section>{{ $t('toolbar.delete') }}</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-td>
    </template>
  </q-table>
</template>

<script>
export default {
  name: 'Inventory',
  props: {
    rows: Array,
    showProduct: {
      type: Boolean,
      default: true,
    }
  },
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
    };
  },
  computed: {
    columns() {
      const productColumns = [
        {name: 'image', field: 'image', label: this.$t('products.image'), align: 'center'},
        {name: 'name', field: 'name', label: this.$t('products.name'), align: 'left', sortable: true},
        {name: 'sku', field: 'sku', label: this.$t('products.sku'), align: 'left', sortable: true},
      ];
      const inventoryColumns = [
        {name: 'location', field: 'location', label: this.$t('inventory.location'), sortable: true},
        {name: 'quantity', field: 'quantity', label: this.$t('products.quantity'), align: 'center', sortable: true},
        {
          name: 'lastTransaction',
          field: 'lastTransaction',
          label: this.$t('inventory.lastTransaction'),
          sortable: true
        },
        {name: 'actions', label: this.$t('actions.actions')},
      ];
      return this.showProduct ? productColumns.concat(inventoryColumns) : inventoryColumns;
    },
  },
  methods: {
    inventoryAlert(row) {
      return row.quantity === 0 ? 'negative' : row.reorderPoint > row.quantity ? 'warning' : 'positive';
    },

    deleteItem() {
      this.$q.dialog({
        parent: this,
        color: 'negative',
        title: this.$t('dialog.confirmDelete'),
        cancel: this.$t('actions.no'),
        ok: {
          color: 'negative',
          label: this.$t('actions.yes'),
        },
        message: this.$t('inventory.confirmDelete'),
      }).onOk(() => {
        this.$q.notify({
          color: 'positive',
          message: this.$t('notification.deleteSuccess'),
        });
      });
    },

    deleteRows() {
      console.log('deleted', this.selected);
    }
  },
};
</script>
