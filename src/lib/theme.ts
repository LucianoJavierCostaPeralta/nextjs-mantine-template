const theme = {
  colorScheme: "light",
  colors: {},
  components: {
    Container: {
      defaultProps: {
        sizes: {
          xs: 540,
          sm: 720,
          md: 960,
          lg: 1140,
          xl: 1320,
          xxl: 1560,
        },
      },
    },
  },
  defaultGradient: { deg: 90, from: "#0400F5", to: "#7D49F2" },
  fontSizes: {
    body: ["16px", "18px"],
    legal: ["10px"],
    title: ["14px", "20px", "30px"],
    h1: ["50px", "34px"],
    h2: ["42px", "28px"],
    h3: ["35px", "22px"],
    h4: ["30px", "20px"],
    h5: ["24px", "17px"],
    h6: ["20px", "17px"],
  },
  globalStyles: (theme: any) => ({}),
  other: {},
  spacing: {
    tiny: 8,
    xxxs: 12,
    xxs: 16,
    xs: 24,
    sm: 32,
    md: 40,
    lg: 48,
    xl: 64,
    paddingContainer: 82,
    xxl: 96,
    xxxl: 128,
  },
};

export default theme;
