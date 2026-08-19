import { FOOTER_COPY } from "@/constants/footer.constant";
import { backToTopStyles, footerStyles } from "@/styles/styles/footer.styles";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={footerStyles}>
      <span>
        © {currentYear} {FOOTER_COPY.brand}
      </span>
      <a href="#top" className={backToTopStyles}>
        {FOOTER_COPY.backToTopLabel}
      </a>
    </footer>
  );
}
