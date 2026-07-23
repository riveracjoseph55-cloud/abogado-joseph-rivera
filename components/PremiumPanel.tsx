import Image from "next/image";

export default function PremiumPanel({
  children,
  bottomRule = false,
  paddingY = "clamp(64px,9vw,120px)",
}: {
  children: React.ReactNode;
  bottomRule?: boolean;
  paddingY?: string;
}) {
  return (
    <div className="rc-premium-panel" style={{ padding: `${paddingY} 0` }}>
      <span className="rc-premium-wave" aria-hidden="true" />
      <span className="rc-premium-r" aria-hidden="true">R</span>

      <div className="rc-wrap" style={{ position: "relative", zIndex: 2 }}>
        <div className="rc-premium-logo" aria-hidden="true">
          <Image src="/images/logo-emblema.png" alt="" width={42} height={42} />
          <div>
            <div className="rc-premium-logo-name">Rivera Cheves &amp; Asociados</div>
            <div className="rc-premium-logo-tag">Derecho Penal</div>
          </div>
        </div>
        {children}
      </div>

      {bottomRule && (
        <div className="rc-premium-rule" aria-hidden="true">
          <span className="rc-premium-rule-line l" />
          <span className="rc-premium-rule-dot">⌄</span>
          <span className="rc-premium-rule-line r" />
        </div>
      )}
    </div>
  );
}
