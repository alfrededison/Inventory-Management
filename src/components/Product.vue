<template>
  <q-form
    @submit="onSubmit"
    @reset="onReset"
    class="bg-white q-pa-md"
  >
    <q-input
      :label="$t('products.name')"
      clearable
      counter
      maxlength="50"
      required
      stack-label
      v-model="product.name"
    />
    <q-input
      :label="$t('products.description')"
      autogrow
      clearable
      stack-label
      type="textarea"
      v-model="product.description"
    />
    <q-select
      :label="$t('products.category')"
      :options="productOptions"
      bottom-slots
      stack-label
      v-model="product.category"
    >
      <template v-slot:hint>
        {{ $t('actions.clickToAddOption') }}
      </template>

      <template v-slot:after>
        <q-btn round dense flat icon="add_circle" @click="addCategory"/>
      </template>
    </q-select>
    <q-input
      :label="$t('products.sku')"
      clearable
      required
      stack-label
      v-model="product.sku"
    />
    <q-input
      :label="$t('products.price')"
      type="number"
      stack-label
      v-model.number="product.price"
    />
    <q-input
      :label="$t('products.salePrice')"
      stack-label
      type="number"
      v-model.number="product.salePrice"
    />
    <q-input
      :label="$t('products.reorderPoint')"
      stack-label
      type="number"
      v-model.number="product.reorderPoint"
    />
    <q-input
      :label="$t('products.image')"
      clearable
      stack-label
      v-model="product.image"
    />
    <div class="q-py-md">
      <q-btn icon="done" :label="$t('actions.save')" type="submit" color="primary"/>
      <q-btn icon="restart_alt" :label="$t('actions.reset')" type="reset" color="negative" flat class="q-ml-sm"/>
    </div>
  </q-form>
</template>

<script>
import CategoryDialog from 'components/CategoryDialog';

export default {
  name: 'Product',
  props: {
    editProduct: Object,
  },
  data() {
    return {
      product: this.editProduct || {}
    };
  },
  computed: {
    productOptions() {
      return [
        'Beverage',
        'Candy',
        'Food',
      ];
    }
  },
  methods: {
    onSubmit() {
      this.$emit('save');
    },
    onReset() {
      this.product = {};
    },
    addCategory() {
      this.$q.dialog({
        parent: this,
        component: CategoryDialog,
      });
    },
  }
};
</script>

<style scoped>

</style>
