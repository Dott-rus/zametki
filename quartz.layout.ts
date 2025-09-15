import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [''],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
    children: (
    <>
      <a href="https://notes.somedott.space">Zametki</a> © 2025 <a href="https://somedott.space">Dott</a>. 
      Содержимое доступно по лицензии <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>, если не указано иное (или указан иной источник и его лицензия, проще говоря: Если есть источник, то ищите лицензию там).
      <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="CC" style={{maxWidth: "1em", maxHeight: "1em", marginLeft: ".2em"}} />
      <img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="BY" style={{maxWidth: "1em", maxHeight: "1em", marginLeft: ".2em"}} />
      <br />
      <span style={{color: "gray"}}>
        Пожалуйста, указывайте авторство, если это возможно. Если оно опущено без необходимости — я могу связаться для уточнения.
      </span>
    </>
  ),
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
