export type NavigationItem = {
  label: string;
  href?: string;
  children?: NavigationItem[];
};

export const navigation: NavigationItem[] = [
  {
    label: "Экспорт",
    children: [
      {
        label: "Экспорт из России",
        href: "/export-out-of-russia",
        children: [
          { label: "ЕАЭС", href: "/export-out-of-russia/eaeu" },
          {
            label: "Европейский союз",
            href: "/export-out-of-russia/european-union",
          },
          { label: "Индия", href: "/export-out-of-russia/india" },
          {
            label: "Азербайджан",
            href: "/export-out-of-russia/azerbaijan",
          },
          {
            label: "Таджикистан",
            href: "/export-out-of-russia/tajikistan",
          },
          { label: "Турция", href: "/export-out-of-russia/turkey" },
          { label: "Китай", href: "/export-out-of-russia/china" },
        ],
      },
    ],
  },
  {
    label: "Импорт",
    children: [
      {
        label: "Импорт в Россию",
        href: "/import-in-russia",
        children: [
          {
            label: "Обычный импорт",
            href: "/import-in-russia/ordinary-import",
          },
          {
            label: "Импорт из ЕС и США",
            href: "/import-in-russia/eu-and-usa",
          },
        ],
      },
    ],
  },
  {
    label: "Услуги",
    children: [
      {
        label: "Таможенный представитель",
        href: "/services/customs-representative",
      },
      {
        label: "ВЭД-аутсорсинг",
        href: "/services/foreign-trade-outsourcing",
      },
      {
        label: "Сертификаты СТ-1",
        href: "/services/st-1-certificates",
      },
      {
        label: "Бухгалтерское сопровождение",
        href: "/services/accounting-support",
      },
      {
        label: "Услуги переводчика",
        href: "/services/translation-services",
      },
    ],
  },
  {
    label: "О компании",
    children: [
      {
        label: "О компании",
        href: "/about",
      },
      {
        label: "FAQ",
        href: "/faq",

      },
      {
        label: "Новости",
        href: "/news",
      },
      {
        label: "Контакты",
        href: "/contacts",
      },
    ],
  },
  { label: "Цены", href: "/prices" },
];
