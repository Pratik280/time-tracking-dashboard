module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      colors: {
        "clr-blue": "hsl(246, 80%, 60%)", // jeremy

        "clr-light-red-work": "hsl(15, 100%, 70%)",
        "clr-soft-blue-play": "hsl(195, 74%, 62%)",
        "clr-light-red-study": "hsl(348, 100%, 68%)",
        "clr-lime-green-exercise": "hsl(145, 58%, 55%)",
        "clr-violet-social": "hsl(264, 64%, 52%)",
        "clr-soft-orange-self-care": "hsl(43, 84%, 65%)",

        "clr-very-dark-blue": "hsl(226, 43%, 10%)", // bg
        "clr-dark-blue": "hsl(235, 46%, 20%)", // hover accent
        "clr-desaturated-blue": "hsl(235, 45%, 61%)", // text
        "clr-pale-blue": "hsl(236, 100%, 87%)", // text main
      },
    },
  },
  plugins: [],
};
