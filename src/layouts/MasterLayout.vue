<template>
  <q-layout view="hHh LpR fFf" class="bg-grey-3">
    <q-header class="text-grey-9" reveal height-hint="60">
      <q-toolbar class="IM__toolbar text-grey-6">
        <q-btn
          v-if="this.$q.platform.is.mobile || !leftDrawerOpen"
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
          class="q-mr-sm"
        />

        <q-toolbar-title v-if="$q.screen.gt.xs" shrink class="row items-center no-wrap">
          <q-img class="IM__logo" src="~assets/icon.png"/>
          <span class="q-ml-sm text-white">{{ $t('title') }}</span>
        </q-toolbar-title>

        <q-space/>

        <div class="IM__toolbar-input-container row no-wrap">
          <q-input dense outlined square v-model="search" :placeholder="$t('toolbar.search')" class="bg-white col"/>
          <q-btn class="IM__toolbar-input-btn" color="secondary" icon="search" unelevated/>
        </div>

        <q-space/>

        <div class="q-pl-md q-gutter-sm row no-wrap items-center">
          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="red" text-color="white" floating>
              {{ notificationCount }}
            </q-badge>
            <q-tooltip>{{ $t('toolbar.notification') }}</q-tooltip>
            <q-menu anchor="bottom right" self="top right">
              <q-list bordered padding style="min-width: 200px">
                <q-item-label header>{{ $t('toolbar.notification') }}</q-item-label>
                <q-item clickable v-close-popup>
                  <q-item-section top avatar>
                    <q-avatar color="primary" text-color="white" icon="campaign"/>
                  </q-item-section>

                  <q-item-section>
                    <q-item-label>This content for important system event</q-item-label>
                    <q-item-label caption lines="2">
                      Lorem ipsum dolor sit amet, consectetur adipiscit elit.
                    </q-item-label>
                  </q-item-section>

                  <q-item-section side top>
                    <q-item-label caption>5 min ago</q-item-label>
                    <q-icon name="notification_important" color="negative"/>
                  </q-item-section>
                </q-item>
                <q-separator spaced inset="item"/>
                <q-item clickable v-close-popup>
                  <q-item-section top avatar>
                    <q-avatar color="primary" text-color="white" icon="campaign"/>
                  </q-item-section>

                  <q-item-section>
                    <q-item-label>This content for information system event</q-item-label>
                    <q-item-label caption lines="2">
                      Lorem ipsum dolor sit amet, consectetur adipiscit elit.
                    </q-item-label>
                  </q-item-section>

                  <q-item-section side top>
                    <q-item-label caption>15 min ago</q-item-label>
                    <q-icon name="notifications_none" color="info"/>
                  </q-item-section>
                </q-item>
                <q-separator spaced inset="item"/>
                <q-item clickable v-close-popup>
                  <q-item-section top avatar>
                    <q-avatar>
                      <q-img class="IM__toolbar-avatar" src="~assets/icon.png"/>
                    </q-avatar>
                  </q-item-section>

                  <q-item-section>
                    <q-item-label>This content for user event</q-item-label>
                    <q-item-label caption lines="2">
                      Lorem ipsum dolor sit amet, consectetur adipiscit elit.
                    </q-item-label>
                  </q-item-section>

                  <q-item-section side top>
                    <q-item-label caption>15 min ago</q-item-label>
                    <q-icon name="star" color="warning"/>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>

          <q-btn round flat>
            <q-avatar size="26px">
              <q-img class="IM__toolbar-avatar" src="~assets/icon.png"/>
            </q-avatar>
            <q-tooltip>{{ $t('defaults.admin') }}</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      :width="250"
      show-if-above
    >
      <Menu/>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import Menu from 'components/Menu';

export default {
  name: 'MasterLayout',
  components: {
    Menu,
  },
  data() {
    return {
      leftDrawerOpen: false,
      search: '',
      notificationCount: 3
    };
  },
};
</script>

<style lang="scss">
.IM {
  &__toolbar {
    height: 60px;
  }

  &__toolbar-avatar {
    background-color: white;
  }

  &__logo {
    width: 39px;
    height: 39px;
  }

  &__toolbar-input-container {
    min-width: 100px;
    width: 55%;
  }

  &__toolbar-input-btn {
    border-radius: 0;
    max-width: 60px;
    width: 100%;
  }

  &__page-with-sticky {
    padding-top: 66px;
  }

  &__sticky {
    min-height: 49px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  }

  &__sticky-button {
    border: 1px solid #cccccc;
  }

  &__product-card-content {
    width: 100%;
  }

  &__product-card-image {
    width: 100%;
    max-width: 500px;
  }
}
</style>
