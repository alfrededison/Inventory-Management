<template>
  <q-page padding class="IM__page-with-sticky">
    <q-table
      class="q-pa-md"
      :dense="$q.screen.lt.md"
      :data="rows"
      :columns="columns"
      :row-key="rowKey"
      :pagination="pagination"
    >
      <template v-slot:body-cell-status="props">
        <q-td :props="props">
          <q-toggle v-model="props.row.status" :label="props.value ? $t('status.enabled') : $t('status.disabled')"/>
        </q-td>
      </template>
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn icon="more_horiz" dense flat size="12px">
            <q-menu anchor="bottom right" self="top right">
              <q-list style="min-width: 100px">
                <q-item clickable v-close-popup :to="{name: 'location_edit'}">
                  <q-icon name="edit" size="sm" class="q-mr-sm"/>
                  <q-item-section>{{ $t('toolbar.edit') }}</q-item-section>
                </q-item>
                <q-item clickable v-close-popup :to="{name: 'location_history'}">
                  <q-icon name="history" size="sm" class="q-mr-sm"/>
                  <q-item-section>{{ $t('toolbar.history') }}</q-item-section>
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
          <span>{{ $t('locations.list') }}</span>
        </q-toolbar-title>
        <q-space/>
        <q-btn icon="add" dense flat class="IM__sticky-button" size="12px" color="primary" :to="{name: 'location_add'}">
          <span v-if="$q.screen.gt.xs">{{ $t('locations.add') }}</span>
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

      rows: [
        {name: 'Hanoi', description: 'Kho Hà Nội', status: true},
        {name: 'Saigon', description: 'Kho Hồ Chí Minh', status: true},
        {name: 'Danang', description: 'Kho Đà Nẵng', status: false},
      ]
    };
  },
  computed: {
    columns() {
      return [
        {name: 'name', field: 'name', label: this.$t('locations.name'), align: 'left', sortable: true},
        {name: 'description', field: 'description', label: this.$t('locations.description'), align: 'left'},
        {name: 'status', field: 'status', label: this.$t('locations.status'), sortable: true},
        {name: 'actions', label: this.$t('actions.actions')},
      ];
    },
  },
};
</script>
