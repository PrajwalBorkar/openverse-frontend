import { expect, Page } from '@playwright/test'

import {
  ALL_MEDIA,
  AUDIO,
  IMAGE,
  MediaType,
  MODEL_3D,
  SearchType,
  VIDEO,
} from '~/constants/media'
import messages from '~/locales/en.json'

const buttonSelectors = {
  filter: '[aria-controls="filters"]',
  contentSwitcher: '[aria-controls="content-switcher-modal"]',
}

export function sleep(ms: number) {
  return new Promise<void>((resolve) =>
    setTimeout(async () => {
      resolve()
    }, ms)
  )
}

export type RenderMode = 'SSR' | 'CSR'
export const searchTypePath = (searchType: SearchType) =>
  searchType === 'all' ? '' : `${searchType}`

export const searchTypeNames = {
  [IMAGE]: messages['search-type'][IMAGE],
  [AUDIO]: messages['search-type'][AUDIO],
  [VIDEO]: messages['search-type'][VIDEO],
  [MODEL_3D]: messages['search-type'][MODEL_3D],
  [ALL_MEDIA]: messages['search-type'][ALL_MEDIA],
}

const isButtonPressed = async (page: Page, buttonSelector: string) => {
  const viewportSize = page.viewportSize()
  if (!viewportSize) {
    return false
  }
  const pageWidth = viewportSize.width
  if (pageWidth > 640) {
    return await page.getAttribute(buttonSelector, 'aria-pressed')
  } else {
    return (await page.locator('button', { hasText: 'Close' }).isVisible())
      ? 'true'
      : 'false'
  }
}

const openMenu = async (page: Page, button: 'filter' | 'contentSwitcher') => {
  const selector = buttonSelectors[button]
  const expectedValue = 'true'
  if ((await isButtonPressed(page, selector)) !== expectedValue) {
    await page.click(selector)
    expect(await isButtonPressed(page, selector)).toEqual(expectedValue)
  }
}

export const openFilters = async (page: Page) => {
  await openMenu(page, 'filter')
}

export const openMobileMenu = async (page: Page) => {
  await openMenu(page, 'contentSwitcher')
}

export const closeMobileMenu = async (page: Page) => {
  await page.click('text=Close')
}

export const assertCheckboxStatus = async (
  page: Page,
  label: string,
  status: 'checked' | 'unchecked' | 'disabled' = 'checked'
) => {
  const checkbox = page.locator(`label:has-text('${label}')`)
  switch (status) {
    case 'checked': {
      await expect(checkbox).not.toBeDisabled()
      await expect(checkbox).toBeChecked()
      break
    }
    case 'unchecked': {
      await expect(checkbox).not.toBeDisabled()
      await expect(checkbox).not.toBeChecked()
      break
    }
    case 'disabled': {
      await expect(checkbox).toBeDisabled()
    }
  }
}

export const changeContentType = async (
  page: Page,
  to: 'Audio' | 'Images' | 'All content'
) => {
  await page.click(
    `button[aria-controls="content-switcher-popover"], button[aria-controls="content-switcher-modal"]`
  )
  // Ensure that the asynchronous navigation is finished before next steps
  await Promise.all([
    page.waitForNavigation(),
    page.locator(`#content-switcher-popover a:has-text("${to}")`).click(),
  ])
}

/**
 * Finds a button with a popup to the left of the filters button which doesn't have a 'menu' label
 * @param page - The current page
 */
export const currentContentType = async (page: Page) => {
  const contentSwitcherButton = await page.locator(
    `button[aria-controls="content-switcher-popover"], button[aria-controls="content-switcher-modal"]`
  )
  return contentSwitcherButton.textContent()
}

export const dismissTranslationBanner = async (page: Page) => {
  await page.locator('[data-testid="banner-translation"] button').click()
}

export const goToSearchTerm = async (
  page: Page,
  term: string,
  searchType: SearchType = ALL_MEDIA,
  options: {
    mode?: RenderMode
    dir?: 'ltr' | 'rtl'
    query?: string // Only for SSR mode
  } = {}
) => {
  const dir = options.dir || 'ltr'
  const mode = options.mode ?? 'SSR'
  const query = options.query ? `&${options.query}` : ''

  const prefix = dir === 'ltr' ? '' : '/ar'
  if (mode === 'SSR') {
    await page.goto(
      `${prefix}/search/${searchTypePath(searchType)}?q=${term}${query}`
    )
    if (dir === 'rtl') {
      await dismissTranslationBanner(page)
    }
  } else {
    await page.goto(`/${prefix}`)
    if (dir === 'rtl') {
      await dismissTranslationBanner(page)
    }
    // Select the search type
    if (searchType !== 'all') {
      await page.click('[aria-label="All content"]')
      await page.click(
        `button[role="radio"]:has-text("${searchTypeNames[searchType]}")`
      )
    }
    // Type search term
    const searchInput = page.locator('main input[type="search"]')
    await searchInput.type(term)
    // Click search button
    // Wait for navigation
    await Promise.all([
      page.click('[aria-label="Search"]'),
      page.waitForNavigation(),
    ])
    await scrollDownAndUp(page)
  }
}

/**
 * Click on the first <mediaType> result: a link that contains
 * /<mediaType>/ in its URL. We cannot use the 'startsWith' `^` matcher
 * because localized routes start with the locale prefix (e.g. /ar/image/).
 * Scroll down and up to load all lazy-loaded content.
 */
export const openFirstResult = async (page: Page, mediaType: MediaType) => {
  await page.locator(`a[href*="/${mediaType}/"]`).first().click()
  await scrollDownAndUp(page)
}

/**
 * Click on the first <mediaType> related result: a link that contains
 * /<mediaType>/ in its URL in the 'aside' element for related media.
 * We cannot use the 'startsWith' `^` matcher because localized routes
 * start with the locale prefix (e.g. /ar/image/).
 * Scroll down and up to load all lazy-loaded content.
 */
export const openFirstRelatedResult = async (
  page: Page,
  mediaType: MediaType
) => {
  await page.locator(`aside a[href*="/${mediaType}/"]`).first().click()
  await scrollDownAndUp(page)
}

export const scrollToBottom = async (page: Page) => {
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight)
  })
  await sleep(300)
}

export const scrollToTop = async (page: Page) => {
  await page.evaluate(() => {
    window.scrollTo(0, 0)
  })
  await sleep(200)
}

/**
 * Used to load all lazy-loaded images in the page.
 */
export const scrollDownAndUp = async (page: Page) => {
  await scrollToBottom(page)
  await scrollToTop(page)
}
