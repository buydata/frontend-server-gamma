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
      title: "Каталог",
      href: "/catalog",
    },
  ],
  links: {
    twitter: "",
    github: "https://github.com/buydata",
    docs: "https://ui.shadcn.com",
  },
}
