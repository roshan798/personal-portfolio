/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ['./index.html', './src/**/*.{jsx,js,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                "primary": 'var(--primary-color)',
                "secondary": 'var(--secondary-color)',

            },
            fontFamily: {
                'sans': ['Rubik', 'sans-serif'],
            },
        },
    },
    plugins: [],
    safelist: [''] // dynamic tailwind classes list
}
