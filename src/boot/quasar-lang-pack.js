import Quasar from 'quasar';

export default async () => {
  const defaultLocale = Quasar.lang.getLocale();
  const userLocale = localStorage.getItem('lang');
  const langIso = userLocale || defaultLocale;

  try {
    await import(
      /* webpackInclude: /(en-us|vi)\.js$/ */
    'quasar/lang/' + langIso
      )
      .then(lang => {
        Quasar.lang.set(lang.default);
      });
  } catch (err) {
    // Requested Quasar Language Pack does not exist,
    // let's not break the app, so catching error
  }
}
