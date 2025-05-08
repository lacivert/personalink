import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50"
      width="120"
      height="30"
      aria-label="PersonaLink Logo"
      {...props}
    >
      <style>
        {`
          .logo-text {
            font-family: var(--font-geist-sans, Arial, sans-serif);
            font-size: 30px;
            font-weight: 600;
            fill: hsl(var(--primary));
          }
          .logo-dot {
            fill: hsl(var(--accent));
          }
          @media (prefers-color-scheme: dark) {
            .logo-text { fill: hsl(var(--primary)); }
            .logo-dot { fill: hsl(var(--accent)); }
          }
        `}
      </style>
      <text x="5" y="35" className="logo-text">
        Persona
        <tspan className="logo-dot">.</tspan>
        Link
      </text>
    </svg>
  );
}
