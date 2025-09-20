export default function Modules() {
  return (
    <div>
      <ul id="wd-modules">
        {/* Week 1 */}
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">
                  Learn what is Web Development
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lab: Introduction to HTML &amp; the DOM (MDN)
                  </a>
                </li>
                <li className="wd-content-item">
                  <a
                    href="https://nextjs.org/docs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Next.js Docs (overview)
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Use headings &amp; paragraphs to structure content
                </li>
                <li className="wd-content-item">
                  Create ordered/unordered lists and simple tables
                </li>
                <li className="wd-content-item">
                  Embed images from the web (HTML-only)
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lab: Headings &amp; Paragraphs (Headings on MDN)
                  </a>
                  {" · "}
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    &lt;p&gt; (MDN)
                  </a>
                </li>
                <li className="wd-content-item">
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lab: Lists (Ordered/Unordered) (MDN)
                  </a>
                </li>
                <li className="wd-content-item">
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lab: Tables (MDN)
                  </a>
                </li>
                <li className="wd-content-item">
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lab: Images (&lt;img&gt; on MDN)
                  </a>
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">ASSIGNMENTS</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Update your <a href="/Labs/Lab1/">Lab 1 landing</a> with links to
                  all exercises
                </li>
                <li className="wd-content-item">
                  Ensure Kambaz home (<a href="/">/</a>) links back to{" "}
                  <a href="/Labs">Labs</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="wd-module">
          <div className="wd-title">Week 3</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Build forms with inputs, textareas, and buttons
                </li>
                <li className="wd-content-item">
                  Use radios, checkboxes, and dropdowns (single &amp; multiple)
                </li>
                <li className="wd-content-item">
                  Practice anchors and single-page navigation
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Learn/Forms"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lab: Forms (MDN Web Forms Guide)
                  </a>
                </li>
                <li className="wd-content-item">
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lab: Anchor Tag (&lt;a&gt; on MDN)
                  </a>
                </li>
                <li className="wd-content-item">
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Glossary/SPA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lab: Single Page Navigation (SPA Glossary on MDN)
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
