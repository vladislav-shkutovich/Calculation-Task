import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
// import Backend from 'i18next-locize-backend'

// ! Using locize for storing and auto-translation is impossible
// ! because of free trial version is only 14 days.
// ! Auto-translation is disabled during trial period.

// Temporarily leaving translations here
// then will move it to public/locales

import translationEN from '../translations/en.json'
import translationRU from '../translations/ru.json'

// todo to helpers
export const i18next = i18n
	.use(initReactI18next)
	.use(LanguageDetector)
	// .use(Backend)
	.init({
		resources: {
			en: { translation: translationEN },
			ru: { translation: translationRU },
		},
		debug: false,
		fallbackLng: 'en',
		interpolation: { escapeValue: false },
		// backend: {
		// 	projectId: '83bf24ab-a863-44f2-add1-8d9be90185c9',
		// 	apiKey: '7773ce28-2e1f-4aaa-b7f5-a812cc2aa0d3',
		// },
		// saveMissing: true,
	})
