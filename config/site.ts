export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "BuyData",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
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
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
