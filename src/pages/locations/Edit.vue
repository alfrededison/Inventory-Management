<template>
  <q-page padding class="IM__page-with-sticky">
    <Location :edit-location="location" @save="save"/>
    <EditBar :title="$t('locations.edit', {name: location.name})" @save="save" @cancel="backToList"/>
  </q-page>
</template>

<script>
import EditBar from 'components/EditBar';
import Location from 'components/Location';

export default {
  components: {
    EditBar,
    Location,
  },
  data() {
    return {
      location: {
        'name': 'Hanoi',
        'description': 'Tổng kho Miền Bắc',
        'status': true,
      },
    };
  },
  methods: {
    save() {
      this.backToList();
    },
    backToList() {
      this.$router.push({name: 'location_list'});
    }
  },
};
</script>
