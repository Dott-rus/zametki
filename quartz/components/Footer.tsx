import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © {year}
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
        <a href="https://notes.somedott.space">Zametki</a> © {year} <a href="https://somedott.space">Dott</a>, лицензия <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
    <img
      src="/static/cc.svg"
      alt="Creative Commons CC Icon"
      width="20"
      height="20"
      style={{ verticalAlign: "middle", display: "inline-block", marginLeft: "0.2em" }}
    />
    <img
      src="/static/by.svg"
      alt="Creative Commons BY Icon"
      width="20"
      height="20"
      style={{ verticalAlign: "middle", display: "inline-block", marginLeft: "0.2em" }}
    />
  </p>
  <span style={{ color: "gray" }}>
    Пожалуйста, указывайте авторство, если это возможно. Если оно опущено без необходимости — я могу связаться для уточнения.
  </span>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
