"use client";

import { routing, usePathname, useRouter } from "@/i18n/rounting";
import { useLocale, useTranslations } from "next-intl";

const LocaleChangeButton = () => {
  const t = useTranslations("LocaleSwitcher");
  const router = useRouter();
  const pathName = usePathname();
  const currentLocale = useLocale();

  const handleLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    router.replace(`/${pathName}`, { locale: nextLocale });
  };

  return (
    <select
      className="bg-transparent"
      defaultValue={currentLocale}
      onChange={handleLocaleChange}
    >
      {routing.locales.map((cur) => (
        <option key={cur} value={cur} className="text-black">
          {t("locale", { locale: cur })}
        </option>
      ))}
    </select>
  );
};

export default LocaleChangeButton;
