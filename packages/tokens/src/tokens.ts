// Mozaic Design System tokens adapted for Leroy Merlin Portugal
// Source: @mozaic-ds/tokens (https://github.com/adeo/mozaic-design-system)

// ─── Colors ───────────────────────────────────────────────────────────────────

/** Leroy Merlin brand primary green — overrides Mozaic default (#007a3e vs #188803) */
export const colorBrand = '#007a3e' as const

/** Primary-01: Mozaic green palette */
export const colorPrimary01 = {
  100: '#ebf5de',
  200: '#c5e39e',
  300: '#9ed05f',
  400: '#78be20',
  500: '#46a610',
  600: '#188803',
  700: '#006902',
  800: '#035010',
  900: '#023618',
} as const

/** Primary-02: Mozaic dark blue-grey palette */
export const colorPrimary02 = {
  100: '#eeeff1',
  200: '#cfd2d8',
  300: '#b3b7c1',
  400: '#8f94a3',
  500: '#6a7081',
  600: '#494f60',
  700: '#343b4c',
  800: '#242938',
  900: '#171b26',
} as const

/** Grey scale */
export const colorGrey = {
  '000': '#ffffff',
  100: '#e6e6e6',
  200: '#cccccc',
  300: '#b3b3b3',
  400: '#999999',
  500: '#808080',
  600: '#666666',
  700: '#4d4d4d',
  800: '#333333',
  900: '#191919',
  999: '#000000',
} as const

/** Secondary blue palette */
export const colorBlue = {
  100: '#daeff7',
  200: '#a7d9ed',
  300: '#73c3e2',
  400: '#3facd7',
  500: '#0b96cc',
  600: '#007bb4',
  700: '#005c91',
  800: '#003a5c',
  900: '#002a41',
} as const

/** Secondary red palette */
export const colorRed = {
  100: '#fdeaea',
  200: '#f8bcbb',
  300: '#f38d8c',
  400: '#ef5f5c',
  500: '#ea302d',
  600: '#c61112',
  700: '#8c0003',
  800: '#530000',
  900: '#2d0000',
} as const

/** Secondary orange palette */
export const colorOrange = {
  100: '#fdf1e8',
  200: '#f8d2b3',
  300: '#f4b27e',
  400: '#ef934a',
  500: '#ea7315',
  600: '#c65200',
  700: '#8c3500',
  800: '#531b00',
  900: '#360e00',
} as const

/** Secondary yellow palette */
export const colorYellow = {
  100: '#fff8e2',
  200: '#ffebaf',
  300: '#fee07d',
  400: '#fcd64c',
  500: '#f8cc1c',
  600: '#c9a21b',
  700: '#9c7b18',
  800: '#705613',
  900: '#46350d',
} as const

/** Secondary green palette */
export const colorGreen = {
  100: '#ebf5de',
  200: '#c5e39e',
  300: '#9ed05f',
  400: '#78be20',
  500: '#46a610',
  600: '#188803',
  700: '#006902',
  800: '#035010',
  900: '#023618',
} as const

/** Semantic danger colors */
export const colorDanger = {
  100: '#fdeaea',
  200: '#f8bcbb',
  300: '#f38d8c',
  400: '#ef5f5c',
  500: '#ea302d',
  600: '#c61112',
  700: '#8c0003',
  800: '#530000',
  900: '#2d0000',
} as const

/** Semantic info colors */
export const colorInfo = {
  100: '#daeff7',
  200: '#a7d9ed',
  300: '#73c3e2',
  400: '#3facd7',
  500: '#0b96cc',
  600: '#007bb4',
  700: '#005c91',
  800: '#003a5c',
  900: '#002a41',
} as const

/** Semantic warning colors */
export const colorWarning = {
  100: '#fdf1e8',
  200: '#f8d2b3',
  300: '#f4b27e',
  400: '#ef934a',
  500: '#ea7315',
  600: '#c65200',
  700: '#8c3500',
  800: '#531b00',
  900: '#360e00',
} as const

/** Semantic success colors */
export const colorSuccess = {
  100: '#ebf5de',
  200: '#c5e39e',
  300: '#9ed05f',
  400: '#78be20',
  500: '#46a610',
  600: '#188803',
  700: '#006902',
  800: '#035010',
  900: '#023618',
} as const

// ─── Typography ───────────────────────────────────────────────────────────────

/** Font sizes from Mozaic type scale (rem values) */
export const fontSize = {
  '01': '0.6875rem', // 11px
  '02': '0.75rem',   // 12px
  '03': '0.8125rem', // 13px
  '04': '0.875rem',  // 14px
  '05': '1rem',      // 16px (base)
  '06': '1.125rem',  // 18px
  '07': '1.4375rem', // 23px
  '08': '1.75rem',   // 28px
  '09': '2.125rem',  // 34px
  '10': '2.5625rem', // 41px
  '11': '3.0625rem', // 49px
  '12': '3.6875rem', // 59px
} as const

/** Font weights */
export const fontWeight = {
  regular: 400,
  semiLight: 300,
  semiBold: 600,
  bold: 700,
} as const

/** Font family */
export const fontFamily = {
  primary: "'LeroyMerlin', 'Helvetica Neue', Arial, sans-serif",
  fallback: "'Helvetica Neue', Arial, sans-serif",
} as const

// ─── Spacing ──────────────────────────────────────────────────────────────────

/** Mozaic 8px base spacing scale */
export const spacing = {
  100: '0.5rem',   // 8px
  200: '1rem',     // 16px
  300: '1.5rem',   // 24px
  400: '2rem',     // 32px
  500: '2.5rem',   // 40px
  600: '3rem',     // 48px
  700: '3.5rem',   // 56px
  800: '4rem',     // 64px
  900: '4.5rem',   // 72px
} as const

// ─── Border Radius ────────────────────────────────────────────────────────────

/** Mozaic border radius tokens (px values as strings) */
export const borderRadius = {
  s: '0.125rem', // 2px
  m: '0.25rem',  // 4px
  l: '0.375rem', // 6px
} as const

// ─── Borders ──────────────────────────────────────────────────────────────────

/** Border widths */
export const borderWidth = {
  s: '1px',
  m: '2px',
  l: '3px',
} as const

// ─── Shadows ──────────────────────────────────────────────────────────────────

/** Box shadows */
export const shadow = {
  s: '0px 1px 5px 0px rgba(0, 0, 0, 0.2)',
  m: '0px 2px 10px 0px rgba(0, 0, 0, 0.2)',
  l: '0px 4px 20px 0px rgba(0, 0, 0, 0.2)',
} as const
