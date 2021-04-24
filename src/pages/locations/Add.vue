<template>
  <q-page padding class="IM__page-with-sticky">
    <Location @save="save"/>
    <EditBar :title="$t('locations.add')" @save="save" @cancel="backToList"/>
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
