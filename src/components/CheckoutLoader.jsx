import React from 'react';
import { createPortal } from 'react-dom';

export default function CheckoutLoader() {
  if (typeof document === 'undefined') return null;

  return createPortal(
    <div className={`J_modal-overlay is-open`} aria-hidden={false}>
      <div className="J_modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="J_checkoutModal" role="status" aria-live="polite">
          <div className="floatingBarsG">
            <div className="blockG rotateG_01" />
            <div className="blockG rotateG_02" />
            <div className="blockG rotateG_03" />
            <div className="blockG rotateG_04" />
            <div className="blockG rotateG_05" />
            <div className="blockG rotateG_06" />
            <div className="blockG rotateG_07" />
            <div className="blockG rotateG_08" />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
