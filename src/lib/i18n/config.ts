import i18next from 'i18next';
import i18nextBrowserLanguageDetector from 'i18next-browser-languagedetector'
import i18nextHttpBackend from 'i18next-http-backend'
import * as i18nextReact from 'react-i18next';

import { resources } from './resources';

export const supportedLanguages: { id: string; name: string }[] = [
  { id: 'af-ZA', name: 'common:languages.afZA' },
  { id: 'ar-SA', name: 'common:languages.arSA' },
  { id: 'ca-ES', name: 'common:languages.caES' },
  { id: 'cs-CZ', name: 'common:languages.csCZ' },
  { id: 'da-DK', name: 'common:languages.daDK' },
  { id: 'de-DE', name: 'common:languages.deDE' },
  { id: 'el-GR', name: 'common:languages.elGR' },
  { id: 'en-US', name: 'common:languages.enUS' },
  { id: 'es-ES', name: 'common:languages.esES' },
  { id: 'fi-FI', name: 'common:languages.fiFI' },
  { id: 'fr-FR', name: 'common:languages.frFR' },
  { id: 'he-IL', name: 'common:languages.heIL' },
  { id: 'hu-HU', name: 'common:languages.huHU' },
  { id: 'it-IT', name: 'common:languages.itIT' },
  { id: 'ja-JP', name: 'common:languages.jaJP' },
  { id: 'ko-KR', name: 'common:languages.koKR' },
  { id: 'nl-NL', name: 'common:languages.nlNL' },
  { id: 'no-NO', name: 'common:languages.noNO' },
  { id: 'pl-PL', name: 'common:languages.plPL' },
  { id: 'pt-BR', name: 'common:languages.ptBR' },
  { id: 'pt-PT', name: 'common:languages.ptPT' },
  { id: 'ro-RO', name: 'common:languages.roRO' },
  { id: 'ru-RU', name: 'common:languages.ruRU' },
  { id: 'sr-SP', name: 'common:languages.srSP' },
  { id: 'sv-SE', name: 'common:languages.svSE' },
  { id: 'tr-TR', name: 'common:languages.trTR' },
  { id: 'uk-UA', name: 'common:languages.ukUA' },
  { id: 'vi-VN', name: 'common:languages.viVN' },
  { id: 'zh-CN', name: 'common:languages.zhCN' },
  { id: 'zh-TW', name: 'common:languages.zhTW' },
]

export const LANGUAGE_TOKEN = '@trackgeek/language';

export const DEFAULT_LANGUAGE = supportedLanguages[0].id;

i18next
  .use(i18nextHttpBackend)
  .use(i18nextBrowserLanguageDetector)
  .use(i18nextReact.initReactI18next)
  .init({
    resources,
    supportedLngs: supportedLanguages.map(lang => lang.id),
    lng: window.localStorage.getItem(LANGUAGE_TOKEN) ?? DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;