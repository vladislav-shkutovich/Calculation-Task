import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
// import Backend from 'i18next-locize-backend'

// ! Using locize for storing and auto-translation is impossible
// ! because of free trial version is only 14 days.
// ! Auto-translation is disabled during trial period.

// Temporarily leaving translations here
// then will move it to public/locales
const translationEn = {
	calculator_app: 'Home(FC)',
	home_fc: 'Home(FC)',
	home_сс: 'Home(СC)',
	settings: 'Settings',
}
const translationRu = {
	home_fc: 'Домой(ФК)',
	home_сс: 'Домой(ФК)',
	settings: 'Настройки',
}

export default i18n
	.use(initReactI18next)
	.use(LanguageDetector)
	// .use(Backend)
	.init({
		resources: {
			en: { translation: translationEn },
			ru: { translation: translationRu },
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
