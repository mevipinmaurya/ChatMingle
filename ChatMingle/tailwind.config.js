/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    // function ({addUtilities}){
    //   const newUtilities = {
    //     ".scrollbar-thin":{
    //       scrollbarWidth : "thin",
    //       scrollbarColor : "rgb(31, 29, 29) white",
    //       borderRadius : "20px"
    //     },
    //     ".scrollbar-webkit":{
    //       "&::-webkit-scrollbar":{
    //         width : "5px",
    //         scrollbarColor : "rgb(31 29 29) white",
    //       },
    //       "&::-webkit-scrollbar-track":{
    //         background : "white",
    //         borderRadius : "20px"
    //       },
    //       "&::-webkit-scrollbar-thumb":{
    //         backgroundColor : "rgb(31 41 55)",
    //         borderRadius : "20px",
    //         border : "1px solid white"
    //       }
    //     }
    //   }

    //   addUtilities(newUtilities, ["responsive", "hover"])
    // }
  ],
  daisyui: {
    themes: [],
  },
}

