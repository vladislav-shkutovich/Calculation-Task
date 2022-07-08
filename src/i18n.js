import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
// import Backend from 'i18next-locize-backend'

// ! Using locize for storing and auto-translation is impossible
// ! because of free trial version is only 14 days.
// ! Auto-translation is disabled during trial period.

// Temporarily leaving translations here
// then will move it to public/locales

// todo to json
const translationEn = {
	calculator_app: 'Calculator App',
	home_fc: 'Home(FC)',
	home_сс: 'Home(СC)',
	settings: 'Settings',
	history: 'History',
	switch_theme: 'Switch Theme',
	light_theme: 'Light Theme',
	colored_theme: 'Colored Theme',
	dark_theme: 'Dark Theme',
	switch_language: 'Switch Language',
	english: 'English',
	russian: 'Russian',
	clear_history: 'Clear History',
	clear_history_and_result: 'Clear History & Result',
	show_more: 'Show more...',
}
const translationRu = {
	calculator_app: 'Калькулятор',
	home_fc: 'Домой(ФК)',
	home_сс: 'Домой(КК)',
	settings: 'Настройки',
	history: 'История',
	switch_theme: 'Сменить тему',
	light_theme: 'Светлая тема',
	colored_theme: 'Цветная тема',
	dark_theme: 'Темная тема',
	switch_language: 'Сменить язык',
	english: 'Английский',
	russian: 'Русский',
	clear_history: 'Очистить историю',
	clear_history_and_result: 'Очистить историю и результат',
	show_more: 'Показать еще...',
}

// todo to helpers
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
