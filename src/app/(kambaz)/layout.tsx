// app/(Kambaz)/layout.tsx
import { ReactNode } from "react";
import KambazNavigation from "./Navigation";
import "./styles.css"; // keep it, but we won't rely on the .wd-main-content-offset rule

export default function KambazLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-kambaz">
    
      <style>{`
        /* default: no left padding (mobile hides the sidebar) */
        #wd-kambaz .wd-content {
          padding-left: 0;
        }
        /* desktop/tablet: offset by the sidebar width (~110px) + a small gutter */
        @media (min-width: 768px) {
          #wd-kambaz .wd-content {
            padding-left: 120px; /* 110 sidebar + ~10px breathing room */
          }
        }
      `}</style>

      <div className="d-flex">
        <div>
          <KambazNavigation />
        </div>

        
        <div className="wd-content p-3 flex-fill">{children}</div>
      </div>
    </div>
  );
}
