import AuthLogo from "./extensions/login-logo.png";
import MenuLogo from "./extensions/logo.svg";
// import favicon from "./extensions/favicon.ico";

export default {
  config: {
    // Replace the Strapi logo in auth (login) views
    auth: {
      logo: AuthLogo,
    },
    // Replace the favicon
    // head: {
    //   favicon: favicon,
    // },
    // Add a new locale, other than 'en'
    locales: ["ru"],
    // Replace the Strapi logo in the main navigation
    title: "Прометей",
    menu: {
      logo: MenuLogo,
      title: "Прометей",
    },
    // Override or extend the theme
    theme: {
      colors: {
        primary100: "#EFEFEF",
        primary200: "#F1F1F1",
        primary500: "#4f7ff8",
        primary600: "#4f7ff8",
        primary700: "#4f7ff8",
        danger700: "#ff4206",
      },
    },
    // Extend the translations
    // translations: {
    //   fr: {
    //     "Auth.form.email.label": "test",
    //     Users: "Utilisateurs",
    //     City: "CITY (FRENCH)",
    //     // Customize the label of the Content Manager table.
    //     Id: "ID french",
    //   },
    // },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { release: false },
  },

  bootstrap() {},
};
