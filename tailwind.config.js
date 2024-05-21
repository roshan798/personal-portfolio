/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{jsx,js,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: 'var(--primary-color)',
                secondary: 'var(--secondary-color)',
                yellow: 'var(--custom-yellow)',
            },
            fontFamily: {
                sans: ['Rubik', 'sans-serif'],
            },
        },
    },
    plugins: [],
    safelist: [''], // dynamic tailwind classes list
}
