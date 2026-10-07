/**
 * Product identity, in one place. Rebrand Ostiary by editing this file (and
 * `public/logo.*` via `pnpm --filter @ostiary/auth brand:assets`).
 *
 * Used where CSS variables can't reach: generated images (favicon, apple-icon,
 * Open Graph cards), emails, the web manifest and the browser `theme-color`.
 * The UI itself is themed by `styles/globals.css`.
 *
 * FAKGROUP: fully monochrome (zinc), no accent hue — motion carries the brand,
 * not color. The mark's chip is always a black tile with a white mark, the
 * authentic FAKGROUP lockup, independent of the light/dark theme.
 */
export const brand = {
  /** Product name: wordmark, page titles, emails, social cards. */
  name: "FAKGROUP",
  /** Headline on the sign-in screens and the social card. */
  tagline: "Securing the Digital Future",
  /** Part of the tagline set in the accent (must appear in `tagline`). */
  taglineAccent: "Digital Future",
  /** One sentence under the headline. */
  description: "One FAKGROUP account for every internal app.",
  /**
   * Apps that sign in through this provider, shown as chips on the sign-in
   * screen and the social card. Leave empty to hide them.
   */
  ecosystem: [] as readonly string[],
  /**
   * Monochrome zinc scale, no accent hue. The UI tokens in styles/globals.css
   * use the same values. `brass` is kept as a key for API compatibility but is
   * now a neutral, not gold.
   */
  colors: {
    /** Primary dark: text, the logo tile, dark-mode ground. */
    ink: "#09090b",
    /** Light-mode ground. */
    bone: "#fafafa",
    paper: "#ffffff",
    /** Accent key (compat): neutral zinc, not gold. */
    brass: "#18181b",
    /** Neutral for text on light grounds. */
    brassDeep: "#3f3f46",
    /** Dark-mode surfaces and text. */
    night: "#09090b",
    nightCard: "#18181b",
    nightLine: "#27272a",
    nightText: "#9f9fa9",
    nightBody: "#fafafa",
    mist: "#f4f4f5",
    graphite: "#71717b",
    line: "#e4e4e7",
  },
} as const;

/** Browser UI color (address bar, PWA title bar) per color scheme. */
export const themeColor = { light: brand.colors.bone, dark: brand.colors.night } as const;

/**
 * The real FAKGROUP mark — traced with potrace from the source brand asset so
 * the favicon, header logo and OG images stay true to the actual logo.
 *
 * A single compound path on potrace's native 3000-unit grid (the holes that
 * make it read as line art come from the path's winding direction, via the
 * default SVG nonzero fill rule). The chip is always a black tile with a white
 * mark, independent of the site's theme.
 */
export const logoMark = {
  viewBox: "0 0 3000 3000",
  /** Group transform potrace emits (Y-flip + unit scale back to the raster). */
  transform: "translate(0,3000) scale(0.1,-0.1)",
  /** Corner radius for the background tile, on the same 3000-unit grid. */
  radius: 660,
  path: "M14620 21654 c-1491 -106 -2783 -616 -3888 -1536 -1351 -1125 -2181 -2709 -2369 -4518 -25 -241 -25 -945 0 -1190 113 -1115 456 -2113 1038 -3022 1611 -2518 4792 -3654 7635 -2727 2449 798 4195 2866 4558 5399 59 412 82 878 52 1059 -153 916 -1367 1720 -3127 2071 l-55 11 -58 89 c-31 49 -76 113 -100 142 -23 29 -87 109 -141 177 -224 280 -467 506 -755 700 -96 65 -183 127 -192 137 -10 11 -33 96 -58 206 -369 1680 -1108 2792 -1978 2979 -96 20 -412 33 -562 23z m480 -579 c554 -174 1085 -980 1400 -2127 24 -87 41 -161 37 -164 -3 -3 -43 7 -89 24 -333 120 -794 207 -1170 219 -373 12 -531 -49 -784 -301 -424 -425 -673 -1125 -781 -2196 -25 -251 -25 -914 0 -1155 44 -410 122 -825 191 -1009 16 -41 26 -89 26 -119 l0 -51 -322 -323 c-177 -178 -326 -323 -329 -323 -14 0 -115 387 -174 665 -321 1506 -275 3217 126 4690 333 1221 910 2064 1499 2191 100 21 265 12 370 -21z m-1608 -233 c-841 -1105 -1286 -3277 -1116 -5457 46 -597 134 -1149 266 -1670 89 -354 223 -773 260 -812 41 -44 629 -223 1023 -312 1640 -369 3608 -330 5175 105 718 199 1285 457 1727 785 51 38 93 63 93 55 0 -22 -106 -383 -149 -506 -796 -2296 -2797 -3863 -5241 -4102 -214 -21 -922 -18 -1130 5 -2899 317 -5129 2517 -5454 5382 -56 492 -47 1088 25 1585 318 2210 1901 4126 4012 4856 170 58 519 162 550 163 13 1 3 -18 -41 -77z m2103 -2217 c1284 -169 2381 -1024 2852 -2225 123 -312 189 -577 228 -915 55 -473 -32 -673 -400 -916 -370 -245 -942 -416 -1655 -496 -239 -26 -1019 -26 -1260 0 -317 35 -697 107 -941 178 l-107 31 -31 107 c-198 690 -264 1581 -170 2321 123 980 498 1781 892 1909 34 11 76 22 92 25 58 9 382 -3 500 -19z m3403 -2140 c1091 -309 1878 -822 2063 -1344 115 -324 24 -627 -281 -945 -945 -981 -3485 -1515 -5800 -1220 -383 49 -761 121 -1126 214 -242 62 -304 80 -304 88 0 16 617 622 642 631 21 8 45 5 110 -15 879 -264 1933 -305 2928 -113 1045 202 1741 673 1841 1244 51 294 -87 1073 -266 1499 -7 15 -4 17 11 13 10 -3 92 -27 182 -52z",
} as const;

/** Standalone SVG markup of the mark, for image routes and exported files. */
export function logoMarkSvg({
  background = brand.colors.ink,
  foreground = brand.colors.paper,
  size = 32,
  radius = logoMark.radius,
}: {
  background?: string;
  foreground?: string;
  size?: number;
  /** Corner radius on the 3000-unit grid; 0 for platforms that mask icons (iOS). */
  radius?: number;
} = {}) {
  const m = logoMark;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="${m.viewBox}"><rect width="3000" height="3000" rx="${radius}" fill="${background}"/><g transform="${m.transform}"><path d="${m.path}" fill="${foreground}"/></g></svg>`;
}
