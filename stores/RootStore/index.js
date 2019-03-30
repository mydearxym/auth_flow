/*
 * rootStore store
 *
 */

import { types as t } from 'mobx-state-tree'
import R from 'ramda'

import {
  makeDebugger,
  markStates,
  toast,
  toastBarColor,
  themeSkins,
  dispatchEvent,
  EVENT,
} from 'utils'

import {
  // domain
  RouteStore,
  AccountStore,
  BodylayoutStore,
  HeaderStore,
  ContentStore,
  ViewingStore,
  ThemeStore,
  ThemeDefaults,

  // banners
  BannerStore,
  // content
  // footer
  FooterStore,

  // toolbox
  PreviewStore,
} from '../index'

/* eslint-disable-next-line */
const debug = makeDebugger('S:rootStore')

const rootStore = t
  .model({
    // domain stores
    account: t.optional(AccountStore, {}),
    route: t.optional(RouteStore, {}),
    viewing: t.optional(ViewingStore, {}),
    theme: t.optional(ThemeStore, ThemeDefaults),
    appLocale: t.optional(t.enumeration('locale', ['zh', 'en']), 'zh'),
    appLangs: t.map(t.frozen),
    // domain end

    // toolbox
    preview: t.optional(PreviewStore, { visible: false }),
    // toolbox end

    // layouts > xxx > papers
    // layouts
    bodylayout: t.optional(BodylayoutStore, {}),
    header: t.optional(HeaderStore, {}),
    content: t.optional(ContentStore, {}),
    // layouts end

    // banners
    banner: t.optional(BannerStore, {}),

    // content

    // content end

    // footer
    footer: t.optional(FooterStore, {}),
  })
  .views(self => ({
    get locale() {
      return self.appLocale
    },
    get langs() {
      return self.appLangs
    },
    get langMessages() {
      // TODO: try - catch
      // return self.langs.toJSON()[self.appLocale]
      return self.langs.get(self.locale)
    },
    get doraemonVisible() {
      // TODO self.doraemon.visible
      return self.doraemon.visible
    },
    get viewingData() {
      return self.viewing.viewingData
    },
    get curRoute() {
      return self.route.curRoute
    },
    get accountInfo() {
      return self.account.accountInfo
    },
  }))
  .actions(self => ({
    afterCreate() {
      // self.communities.load()
    },
    markRoute(query) {
      self.route.markRoute(query)
    },
    setHeaderFix(fix) {
      self.header.setFix(fix)
    },
    openDoraemon() {
      self.doraemon.open()
    },
    closePreview() {
      self.preview.close()
    },
    changeTheme(name) {
      self.theme.changeTheme(name)
    },
    changeLocale(locale) {
      self.appLocale = locale
    },
    setLangMessages(key, val) {
      // self.appLangs.set({ en: { fic: 2 } })
      self.appLangs.set(key, val)
    },
    isLocaleExist(locale) {
      return !!self.langs.get(locale)
    },
    setViewing(sobj) {
      self.viewing.setViewing(sobj)
    },
    updateViewingIfNeed(type, sobj) {
      self.viewing.updateViewingIfNeed(type, sobj)
    },
    upgradeHepler() {
      self.upgradePackges.upgradeHepler()
    },
    sponsorHepler() {
      self.footer.sponsorHepler()
    },
    cashierHelper(opt) {
      self.upgradePackges.close()
      self.footer.closeSponsor()
      self.cashier.callCashier(opt)
    },
    toast(type, options = {}) {
      const themeData = themeSkins[self.theme.curTheme]
      const progressBarColor = toastBarColor(type, themeData)

      const toastOpt = R.merge(options, { progressBarColor })
      toast[type](toastOpt)
    },
    authWarning(options = {}) {
      const defaultOpt = {
        position: 'topCenter',
        title: '当前账号未登录',
        msg: '暂不支持匿名操作，请登录后再次尝试.',
      }

      if (options.hideToast && options.hideToast === true) {
        // pass
      } else {
        self.toast('warn', R.merge(defaultOpt, options))
      }

      dispatchEvent(EVENT.LOGIN_PANEL)
      return false
    },
    changesetErr(options) {
      self.toast('error', options)
    },
    callInformer() {
      self.informer.show()
    },
    callGirlVerifier() {
      self.girlVerifier.show()
    },
    updateC11N(options) {
      self.account.updateC11N(options)
    },
    isMemberOf(type) {
      return self.account.isMemberOf(type)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default rootStore
