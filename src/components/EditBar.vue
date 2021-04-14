<template>
  <q-page-sticky expand position="top">
    <q-toolbar class="IM__sticky bg-white q-px-md">
      <q-toolbar-title shrink class="row items-center no-wrap">
        <span>{{ title }}</span>
      </q-toolbar-title>
      <q-space/>
      <q-btn
        :size="$q.screen.gt.xs ? '12px' : 'sm'"
        @click="cancel"
        class="IM__sticky-button q-px-sm"
        dense
        flat
        icon="close"
      >
        {{ $t('actions.cancel') }}
      </q-btn>
      <q-btn
        :size="$q.screen.gt.xs ? '12px' : 'sm'"
        @click="save"
        class="q-px-sm q-ml-md"
        color="positive"
        :disable="saveDisable"
        dense
        icon="done"
        unelevated
      >
        {{ $t('actions.save') }}
      </q-btn>
    </q-toolbar>
  </q-page-sticky>
</template>

<script>
export default {
  name: 'EditBar',
  props: {
    title: String,
    saveDisable: Boolean,
  },
  methods: {
    cancel() {
      this.$emit('cancel');
    },
    save() {
      this.$emit('save');
    },
  },
};
</script>

<style scoped>

</style>
