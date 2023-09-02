export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "BuyData",
  description:
    "Мы любим данные",
  mainNav: [
    {
      title: "Главная",
      href: "/",
    },
    {
      title: "Войти",
      href: "/authentication",
    },
  ],
  links: {
    twitter: "https://twitter.com/",
    github: "https://github.com/buydata",
    docs: "https://ui.shadcn.com",
  },
}
