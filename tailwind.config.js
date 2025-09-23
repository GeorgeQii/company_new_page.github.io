module.exports = {
  content: ["./*.html"], // 处理根目录所有HTML文件
  theme: {
    extend: {
      colors: {
        primary: '#165DFF',
        secondary: '#36BFFA',
        dark: '#1D2939',
        light: '#F9FAFB',
        accent: '#0284C7'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    }
  },
  plugins: [],
}