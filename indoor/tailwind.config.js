/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        'bg-BlackBlue': '#1F212C',
        'bg-boxGray': '#525569 ',
        'boxTable': '#373A49 ',
        'shelf': '#292B36 ',
        'lineMap': '#2FDAFF ',
        'pointGreen': '#52FF6E ',
        'pointRed': '#FF5151 '
      }
    },
    screens: {
      'ipadHori': '1366px',
      'ipadVertical': '1024px',
      'iphone': '390px'
    }
    // zIndex: {
    //   '100': '100',
    //   '200': '200',
    //   // Add more as needed
    // }
  },
  plugins: [],
}

