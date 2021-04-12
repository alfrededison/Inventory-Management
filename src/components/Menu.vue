<template>
  <q-list padding>
    <q-item v-ripple>
      <q-item-section>
        <q-select
          v-model="lang"
          :label="$t('drawer.language')"
          :options="langOptions"
          borderless
          dense
          emit-value
          map-options
          options-dense
          style="min-width: 192px"
        />
      </q-item-section>
    </q-item>

    <q-item v-ripple clickable exact to="/">
      <q-item-section avatar>
        <q-icon name="home"/>
      </q-item-section>

      <q-item-section>
        {{ $t('pages.dashboard') }}
      </q-item-section>
    </q-item>

    <q-item v-ripple clickable to="/products">
      <q-item-section avatar>
        <q-icon name="category"/>
      </q-item-section>

      <q-item-section>
        {{ $t('pages.products') }}
      </q-item-section>
    </q-item>

    <q-item v-ripple clickable to="/inventory">
      <q-item-section avatar>
        <q-icon name="store"/>
      </q-item-section>

      <q-item-section>
        {{ $t('pages.inventory') }}
      </q-item-section>
    </q-item>

    <q-item v-ripple clickable to="/locations">
      <q-item-section avatar>
        <q-icon name="place"/>
      </q-item-section>

      <q-item-section>
        {{ $t('pages.locations') }}
      </q-item-section>
    </q-item>

    <q-item v-ripple clickable to="/purchases">
      <q-item-section avatar>
        <q-icon name="shop"/>
      </q-item-section>

      <q-item-section>
        {{ $t('pages.purchases') }}
      </q-item-section>
    </q-item>

    <q-item v-ripple clickable to="/customers">
      <q-item-section avatar>
        <q-icon name="people"/>
      </q-item-section>

      <q-item-section>
        {{ $t('pages.customers') }}
      </q-item-section>
    </q-item>

    <q-item v-ripple clickable to="/sales">
      <q-item-section avatar>
        <q-icon name="shopping_cart"/>
      </q-item-section>

      <q-item-section>
        {{ $t('pages.sales') }}
      </q-item-section>
    </q-item>

    <q-item v-ripple clickable exact to="/help">
      <q-item-section avatar>
        <q-icon name="help"/>
      </q-item-section>

      <q-item-section>
        {{ $t('pages.help') }}
      </q-item-section>
    </q-item>

  </q-list>
</template>

<script>
import languages from 'quasar/lang/index.json';

const appLanguages = languages.filter(lang =>
  ['en-us', 'vi'].includes(lang.isoName)
);

export default {
  name: 'Menu',
  data() {
    return {
      lang: this.$i18n.locale,
      langOptions: [],
    };
  },
  watch: {
    lang(lang) {
      this.$i18n.locale = lang;
      localStorage.setItem('lang', lang);
      import(
        /* webpackInclude: /(en-us|vi)\.js$/ */
      'quasar/lang/' + lang
        ).then(lang => {
        this.$q.lang.set(lang.default);
      });
    }
  },
  created() {
    this.langOptions = appLanguages.map(lang => ({
      label: lang.nativeName, value: lang.isoName
    }));
  },
};
</script>
