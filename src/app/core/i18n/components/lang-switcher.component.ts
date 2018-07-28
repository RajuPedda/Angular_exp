// libs
import { Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

// app
import { Config, ILang, LogService } from '../../index';
import { IAppState } from '../../ngrx/index';
/* import { ElectronEventService } from '../../electron/index'; */
import * as multilingual from '../actions/index';
import { MultilingualService, Languages, LanguageViewHelper } from '../services/index';

@Component({
  moduleId: module.id,
  selector: 'fc-lang-switcher',
  templateUrl: 'lang-switcher.component.html',
  styleUrls: ['lang-switcher.component.scss'],
})
export class LangSwitcherComponent implements OnInit {

  public lang: string;
  public supportedLanguages: Array<ILang>;

  constructor(
    private store: Store<IAppState>,
    private log: LogService,
    @Inject(Languages) private languages,
    @Inject(LanguageViewHelper) private viewHelper
  ) {
    store.take(1).subscribe((s: any) => {
      // s && s.18n - ensures testing works in all cases (since some tests dont use i18n state)
      this.lang = s && s.i18n ? s.i18n.lang : '';
    });

    // for desktop we need to have different

  }

  changeLang(e: any) {
    let lang = this.supportedLanguages[0].code; // fallback to default 'en'

    if (Config.IS_MOBILE_NATIVE()) {
      if (e) {
        lang = this.supportedLanguages[e.newIndex].code;
      }
    } else if (e && e.target) {
      lang = e.target.value;
    }
    this.log.debug(`Language change: ${lang}`);
    this.store.dispatch(new multilingual.ChangeAction(lang));
  }

  ngOnInit() {
    this.supportedLanguages = this.languages;
    if (Config.IS_MOBILE_NATIVE() && this.viewHelper) {
      // {N} 3.0 requires SegmentedBarItem class for items
      // when binding to SegmentedBar
      this.supportedLanguages = this.viewHelper;
    }
  }
}
