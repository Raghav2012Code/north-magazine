import { footerNav, issue, social } from "@/data/content";

/**
 * The masthead at scale, closing the page. The wordmark is set in the display
 * serif and tracked to run the full measure of the page — the one place where
 * NORTH is allowed to be as large as the screen allows.
 */
export function Footer() {
  return (
    <footer id="contact" className="bg-ink text-paper">
      <div className="shell">
        {/* Running foot */}
        <div className="flex items-center justify-between gap-6 border-b border-mist/20 py-4">
          <p className="label-xs text-mist-2">Independent since 2009</p>
          <p className="label-xs text-mist-2">
            Issue {issue.number} &nbsp;·&nbsp; {issue.month}
          </p>
        </div>

        {/* Masthead */}
        <p className="font-display mt-8 w-full overflow-hidden text-[min(28.5vw,27rem)] font-medium uppercase leading-[0.8] tracking-[-0.035em]">
          North
        </p>

        <p className="label-xs mt-8 text-mist-2">Culture, in context.</p>

        {/* Columns */}
        <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-10 border-t border-mist/20 pt-10 lg:mt-16">
          <div id="about" className="col-span-12 scroll-mt-28 sm:col-span-6 lg:col-span-4">
            <p className="max-w-[34ch] text-[0.9375rem] leading-[1.65] text-mist">
              NORTH is an independent magazine about the things people make and the
              places they make them in. Printed in Lisbon, read everywhere.
            </p>
            <address className="label-xs mt-6 not-italic leading-relaxed text-mist-2">
              Rua da Boavista 84
              <br />
              1200-068 Lisboa, Portugal
            </address>
          </div>

          <nav aria-label="Footer" className="col-span-6 sm:col-span-3 lg:col-span-2">
            <p className="label-xs text-mist-2">Sections</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {footerNav.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="link-rule text-[0.9375rem] text-mist transition-colors duration-300 hover:text-paper"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Recent issues" className="col-span-6 sm:col-span-3 lg:col-span-2">
            <p className="label-xs text-mist-2">Recent issues</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {[issue.number, "017", "016", "015"].map((number, index) => (
                <li key={number}>
                  <a
                    href="#issue"
                    aria-current={index === 0 ? "true" : undefined}
                    className="link-rule tnum text-[0.9375rem] text-mist transition-colors duration-300 hover:text-paper"
                  >
                    No. {number}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            <p className="label-xs text-mist-2">Elsewhere</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {social.map((channel) => (
                <li key={channel.label} className="flex items-baseline justify-between gap-6">
                  <a
                    href={channel.href}
                    className="link-rule text-[0.9375rem] text-mist transition-colors duration-300 hover:text-paper"
                  >
                    {channel.label}
                  </a>
                  <span className="label-xs text-mist-2">{channel.handle}</span>
                </li>
              ))}
            </ul>
            <a
              href="#newsletter"
              className="label link-rule mt-8 inline-block text-paper"
            >
              Get the dispatch
            </a>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-14 flex flex-col gap-3 border-t border-mist/20 py-6 sm:flex-row sm:items-center sm:justify-between lg:mt-20">
          <p className="label-xs text-mist-2">&copy; 2026 NORTH Magazine</p>
          <p className="label-xs text-mist-2">
            Printed on uncoated stock. Set in Fraunces and Archivo.
          </p>
          <a
            href="#cover-story"
            className="label link-rule text-paper"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
