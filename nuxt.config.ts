// const config =  require("./developer.json");
const config = JSON.parse(JSON.stringify(require("./developer.json").default));
const siteTitle = `${config.name} | ${config.role}`;

/*
 * Nuxt 3 Config File
 Usage: https://nuxt.com/docs/api/configuration/nuxt-config
 */
export default defineNuxtConfig({
  /**
   * * Compatibility Date
   * Set compatibility date for consistent behavior
   */
  compatibilityDate: "2024-04-03",

  /**
   * * Development Config
   * Configure HMR and development server
   */
  devtools: { enabled: true },

  /**
   * * SSR Config
   * Configure Server-Side Rendering
   */
  ssr: true,

  /**
   * * Vite Config for HMR
   * Configure Vite dev server for Hot Module Replacement
   */
  vite: {
    server: {
      hmr: {
        port: 24678,
        host: "localhost",
      },
      watch: {
        usePolling: false,
      },
    },
    optimizeDeps: {
      include: ["vue", "@vue/runtime-core"],
    },
  },

  /**
   * * App Config
   * app config: https://nuxt.com/docs/api/configuration/nuxt-config#app
   * head config: https://nuxt.com/docs/api/configuration/nuxt-config#head
   * meta config: https://nuxt.com/docs/getting-started/seo-meta
   * pageTransition config: https://nuxt.com/docs/getting-started/transitions#transitions
   * TODO: Add more meta tags for SEO
   * TODO: Add tags for social media sharing
   * TODO: Migrate apple-touch-icon config to manifest.json
   */
  app: {
    head: {
      title: siteTitle, // App window nav title
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "A awesome developer portfolio design.",
        },
        { hid: "og:title", property: "og:title", content: siteTitle },
        {
          hid: "og:description",
          property: "og:description",
          content: "A awesome developer portfolio design.",
        },
        { hid: "og:image", property: "og:image", content: "demo-share.jpg" },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://developer-portfolio-v1.netlify.app/",
        },
        { name: "theme-color", content: "#010C15" },
        // ...
      ],
      link: [
        { rel: "manifest", href: "pwa/manifest.json" },
        { rel: "apple-touch-icon", href: "pwa/icons/apple-touch-icon.png" },
      ],
    },
  },

  /**
   * * Nuxt 3 Modules
   * Official modules: https://nuxt.com/modules
   */
  modules: ["@nuxtjs/tailwindcss"],

  components: {
    dirs: ["~/components"],
  },
  tailwindcss: {
    cssPath: ["~/assets/tailwind.css", { injectPosition: 0 }],
    configPath: "tailwind.config",
    exposeConfig: true, // true to resolve the tailwind config in runtime. https://tailwindcss.nuxt.dev/getting-started/options/#exposeconfig
    injectPosition: 0,
    viewer: false,
  },

  /**
   * * Runtime Config (Environment Variables)
   * Usage: https://nuxt.com/docs/guide/going-further/runtime-config
   */
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: "123",
    // Keys within public are also exposed client-side
    dev: config,
    public: {
      apiBase: "/api",
      dev: config,
    },
    smtpHost: process.env.SMTP_HOST,
    smtpPort: process.env.SMTP_PORT,
    smtpUser: process.env.SMTP_USER,
    smtpPass: process.env.SMTP_PASS,
    toEmail: process.env.TO_EMAIL,
  },
});
