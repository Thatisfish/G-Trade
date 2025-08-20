import React from "react";

export default function Notes() {
  return (
    <div className="notes">
      <label htmlFor="notes">備註</label>
      <textarea id="notes" placeholder="輸入您的備註"></textarea>
    </div>
  );
}