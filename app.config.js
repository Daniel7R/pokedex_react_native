import "dotenv/config";

export default {
  expo: {
    name: "pokedexNative",
    slug: "pokedexNative",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      firebaseApiKey: process.env.API_KEY,
      firebaseAuthDomain: process.env.AUTH_DOMAIN,
      firebaseProjectId: process.env.PROJECT_ID,
      firebaseStorageBucket: process.env.STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.MESSAGING_SENDER_ID,
      firebaseAppId: process.env.APP_ID,
    },
  },
};