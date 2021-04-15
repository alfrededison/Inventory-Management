<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="q-dialog-plugin">
      <q-card-section>
        <q-input
          :label="$t('category.name')"
          @keyup.enter="addItem"
          clearable
          counter
          maxlength="25"
          stack-label
          v-model="newCategory"
        >
          <template v-slot:after>
            <q-btn round dense flat icon="send" @click="addItem"/>
          </template>
        </q-input>
      </q-card-section>
      <q-card-section class="scroll q-pa-md" style="max-height: 50vh">
        <q-list>
          <q-item v-for="(item, key) in categories" :key="item" class="q-my-sm">
            <q-item-section>
              <q-item-label>{{ item }}</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="close" @click="deleteItem(key)"/>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn color="primary" flat :label="$t('actions.close')" @click="onOKClick"/>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'CategoryDialog',
  data() {
    return {
      newCategory: '',
      categories: [
        'Cupcake',
        'Donut',
        'Eclair',
        'Froyo',
        'Gingerbread',
        'Honeycomb',
        'Ice Cream Sandwich',
        'Jelly Bean',
        'KitKat',
        'Lollipop',
        'Marshmallow',
        'Nougat',
        'Oreo',
        'Pie',
        'Android 10',
        'Android 11',
        'Android 12',
      ],
    };
  },
  methods: {
    // following method is REQUIRED
    // (don't change its name --> "show")
    show() {
      this.$refs.dialog.show();
    },

    // following method is REQUIRED
    // (don't change its name --> "hide")
    hide() {
      this.$refs.dialog.hide();
    },

    onDialogHide() {
      // required to be emitted
      // when QDialog emits "hide" event
      this.$emit('hide');
    },

    onOKClick() {
      // on OK, it is REQUIRED to
      // emit "ok" event (with optional payload)
      // before hiding the QDialog
      this.$emit('ok');
      // or with payload: this.$emit('ok', { ... })

      // then hiding dialog
      this.hide();
    },

    /** custom methods **/
    addItem() {
      if (this.newCategory) {
        this.categories.push(this.newCategory);
        this.newCategory = '';
      }
    },

    deleteItem(index) {
      this.categories.splice(index, 1)
    },
  }
};
</script>

<style scoped>

</style>
