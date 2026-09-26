# molgga UI guidelines

This document is the shared implementation template for new and updated pages. Keep page layouts consistent by using the existing classes in `assets/css/styles.css`; add a new component only when the current patterns do not fit.

## Starting templates

- For a standard informational or form page, follow the structure in `ko/contact.html` or `ko/about.html`.
- For a multi-question quiz with one question shown at a time, follow `ko/mbti.html` and its shared behavior in `assets/js/app.js`.
- For a choice-based personality result, follow `ko/spending-habits-test.html` and the result-card renderer in `assets/js/archetype-test.js`.
- For a tournament, follow `ko/worldcup.html` or `ko/late-night-worldcup.html` and reuse `assets/js/worldcup.js`.
- Build the Korean structure first, then keep the same component order and class names in `en/`, `ja/`, and `zh/`. Add each page to the sitemap and the relevant navigation/content list when appropriate.
- Prefer these existing templates over copying markup from a screenshot or introducing page-specific inline CSS.

## Page structure

- Use the shared header, centered `.wrap`, `.page-main`, `.article`, breadcrumb, `.article-header`, content panels, and footer used by the localized pages.
- Keep the main reading column between roughly 790 and 860 px on desktop. Let it shrink fluidly on smaller screens with a consistent 20–24 px side gutter.
- Use `.article-header` for a page title and short introduction, `.content-panel` for an interactive block, and `.info-card` for supporting explanations.
- Keep headings, panels, controls, and footer content inside the same centered content column. Do not set page-specific fixed widths for common components.

## Type and spacing

- Body copy uses the shared 16 px base size, muted body color, and comfortable line height from the global stylesheet.
- Use the existing responsive `clamp()` scales for headings. Long Korean headings should wrap at word boundaries; avoid oversized fixed font sizes.
- Use one clear title per page. Use the small uppercase/letter-spaced `.eyebrow-text` only for short category metadata.
- Use consistent panel padding and radii from `.article-header`, `.content-panel`, and `.info-card`. Reduce spacing at the existing 600 px breakpoint rather than adding one-off mobile dimensions.
- Text inside buttons and other controls must be vertically centered, readable, and short enough to scan. Avoid explanatory counts or sentences in choice labels when a short action label works.

## Controls and selection states

- Every button must use `.button`, `.choice-button`, `.quiz-step-choice`, or `.worldcup-bracket-choice`; do not leave native default button appearance in the UI.
- Primary actions use `.button`. Secondary actions use `.button.button-quiet`.
- Mutually exclusive choices must visibly show the selected state and set `aria-pressed` or the checked form state. Keep focus-visible outlines and a comfortable tap target (at least 44 px for actions; compact header controls follow the shared header sizing).
- Center short bracket labels in `.worldcup-bracket-choice`; use one column on narrow phones and two columns when space allows.
- Quiz answer labels use `.quiz-step-choice`: radio/checkbox indicator and label text align on the vertical center, multi-line text remains left-aligned, and the full card is clickable.

## Responsive behavior

- Check layouts at narrow phone widths, typical phone widths, tablet widths, and desktop widths.
- Avoid horizontal scrolling, clipped labels, stretched controls, and text touching panel edges. Use `minmax(0, 1fr)`, `min-width: 0`, and wrapping where needed.
- Keep button labels and navigation controls on screen; allow action groups to wrap or stack on small screens.
- Preserve content hierarchy on mobile. Reduce type and padding modestly; do not simply scale the entire desktop page down.

## Localization and cache updates

- Keep structure and component classes the same across `ko/`, `en/`, `ja/`, and `zh/` pages. Translate visible labels through the existing dictionaries when shared scripts provide translations.
- When changing shared CSS, update the `styles.css?v=...` cache token in all HTML pages that load it. When changing a shared script whose URL is versioned, update its token in all relevant pages.
- Compare corresponding language pages for matching sections, controls, and accessible labels before publishing.

## Review checklist for each page change

1. Confirm all panels and controls align to the shared content column.
2. Confirm buttons have a designed shape, centered label, visible hover/focus/selected/disabled state, and no browser-default rendering.
3. Check heading scale, line breaks, and body readability at phone and desktop widths.
4. Check form labels, radio/checkbox alignment, tap target size, and error-state spacing.
5. Check translated pages use the same component structure and fit their longer/shorter labels.
6. Check cache tokens for changed CSS/JS and inspect `git diff --check` before commit.
