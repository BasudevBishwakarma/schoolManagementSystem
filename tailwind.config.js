

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        screens: {
            "2xl": { max: "1980px" },
            "xl": { max: "1680px" },
            "lg": { max: "1440px" },
            "md": { max: "1024px" },
            "sm": { max: "769px" },
            "xs": { max: "480px" },
            "xxs": { max: "379px" }
        },
        extend: {
            height: {
                screen: "100dvh",
            },
            fontFamily: {
                sans: ['"Roboto", sans - serif'],
            },
        },
    },
    plugins: [],
}
