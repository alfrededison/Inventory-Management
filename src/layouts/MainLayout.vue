<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          aria-label="Menu"
          dense
          flat
          icon="menu"
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
      </q-toolbar>
      <div class="q-px-lg q-pt-xl q-mb-md">
        <div class="text-h3">{{ $t('title') }}</div>
        <div class="text-subtitle1">{{ this.todayDate }}</div>
      </div>
      <q-img class="header-image absolute-top" src="~assets/images/storage.jpg"/>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="600"
      :width="250"
      show-if-above
    >
      <q-scroll-area style="height: calc(100% - 192px); margin-top: 192px; border-right: 1px solid #ddd">
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

          <q-item v-ripple clickable exact to="/help">
            <q-item-section avatar>
              <q-icon name="help"/>
            </q-item-section>

            <q-item-section>
              {{ $t('pages.help') }}
            </q-item-section>
          </q-item>

        </q-list>
      </q-scroll-area>

      <q-img class="absolute-top" src="~assets/images/storage.jpg" style="height: 192px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar class="q-mb-sm" size="56px">
            <q-img class="avatar" src="~assets/icon.png"/>
          </q-avatar>
          <div class="text-weight-bold text-shadowed">{{ $t('defaults.admin') }}</div>
          <div class="text-shadowed">@admin</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import {date} from 'quasar';
import languages from 'quasar/lang/index.json';

const appLanguages = languages.filter(lang =>
  ['en-us', 'vi'].includes(lang.isoName)
);

export default {
  name: 'MainLayout',
  data() {
    return {
      leftDrawerOpen: false,
      lang: this.$i18n.locale,
      langOptions: [],
    };
  },
  computed: {
    todayDate() {
      this.$q.lang; // a hack for force rerender component when quasar lang pack changed
      let timestamp = Date.now();
      return date.formatDate(timestamp, 'dddd, D MMMM YYYY');
    }
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

<style lang="scss">
.header-image {
  height: 100%;
  z-index: -1;
  opacity: 0.2;
  filter: grayscale(100%)
}

.avatar {
  background-color: $primary;
}

.text-shadowed {
  text-shadow: 0 0 5px $primary, 0 0 7px $accent;
}
</style>
