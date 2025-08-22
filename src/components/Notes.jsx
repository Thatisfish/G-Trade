import React from "react";

export default function Notes() {
  return (
    <div className="J_notes">
      <label htmlFor="notes">備註</label>
      <textarea id="notes" placeholder="給賣家的話"></textarea>
    </div>
  );
}