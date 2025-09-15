import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []

    return (
      <footer class={`${displayClass ?? ""}`}>
        <span>
          <a href="https://notes.somedott.space">Zametki</a> © {year}{" "}
          <a href="https://somedott.space">Dott</a>, лицензия{" "}
          <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0*</a>
          <img
            src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"
            alt="Creative Commons CC Icon"
            width="20"
            height="20"
            style={{ verticalAlign: "middle", display: "inline-block", marginLeft: "0.2em" }}
          />
          <img
            src="https://mirrors.creativecommons.org/presskit/icons/by.svg"
            alt="Creative Commons BY Icon"
            width="20"
            height="20"
            style={{ verticalAlign: "middle", display: "inline-block", marginLeft: "0.2em" }}
          />c
        </span>
        <span style={{ color: "gray" }}>
          *если не указано иное (или указан иной источник и его лицензия, проще говоря: Если есть источник, то ищите лицензию там)..
        </span>        
        <span style={{ color: "gray" }}>
          Пожалуйста, указывайте авторство, если это возможно. Если оно опущено без необходимости — я могу связаться для уточнения.
        </span>
        <p style={{ fontSize: "0.8em", marginTop: "0.5em" }}>
          Сайт построен с использованием <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a>
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li key={text}>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
