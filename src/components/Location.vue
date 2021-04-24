<template>
  <q-form
    @submit="onSubmit"
    @reset="onReset"
    class="bg-white q-pa-md"
  >
    <q-input
      :label="$t('locations.name')"
      clearable
      counter
      maxlength="50"
      required
      stack-label
      v-model="location.name"
    />
    <q-input
      :label="$t('locations.description')"
      autogrow
      clearable
      stack-label
      type="textarea"
      v-model="location.description"
    />
    <q-toggle v-model="location.status" :label="location.status ? $t('status.enabled') : $t('status.disabled')"/>
    <div class="q-py-md">
      <q-btn icon="done" :label="$t('actions.save')" type="submit" color="primary"/>
      <q-btn icon="restart_alt" :label="$t('actions.reset')" type="reset" color="negative" flat class="q-ml-sm"/>
    </div>
  </q-form>
</template>

<script>
export default {
  name: 'Location',
  props: {
    editLocation: Object,
  },
  data() {
    return {
      location: this.editLocation || {}
    };
  },
  methods: {
    onSubmit() {
      this.$emit('save');
    },
    onReset() {
      this.location = {};
    },
  }
};
</script>
