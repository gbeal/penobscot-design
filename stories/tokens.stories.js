export default {
  title: 'Foundation/Tokens',
};

const swatches = [
  ['sea-foam',     '#F2F4F1'],
  ['sea-gray',     '#6B7C72'],
  ['granite',      '#4A4E4B'],
  ['granite-dark', '#252826'],
  ['river',        '#1E3A5F'],
  ['river-light',  '#2E5480'],
  ['pine',         '#2D4A35'],
  ['pine-light',   '#3D6347'],
  ['bark',         '#5C4033'],
];

export const Colors = {
  render: () => {
    const grid = swatches.map(([name, hex]) => `
      <div style="display:flex;align-items:center;gap:16px;margin-bottom:12px">
        <div style="
          width:64px;height:64px;
          background:${hex};
          border:1px solid rgba(0,0,0,0.1);
          border-radius:4px;
          flex-shrink:0
        "></div>
        <div>
          <div style="font-family:monospace;font-weight:700">--color-${name}</div>
          <div style="color:#6B7C72;font-family:monospace;font-size:14px">${hex}</div>
        </div>
      </div>
    `).join('');

    return `<div style="padding:32px;max-width:480px">${grid}</div>`;
  },
};

export const Typography = {
  render: () => `
    <div style="padding:32px;max-width:720px">
      <p style="font-size:12px;color:#6B7C72;letter-spacing:.08em;text-transform:uppercase;margin-bottom:24px">Display / Headings — Barlow Condensed</p>
      <h1 style="font-family:'Barlow Condensed',Georgia,serif;font-weight:700;font-size:3rem;line-height:1.15;margin-bottom:8px">The Penobscot River</h1>
      <h2 style="font-family:'Barlow Condensed',Georgia,serif;font-weight:700;font-size:2.25rem;line-height:1.15;margin-bottom:8px">Granite Shores</h2>
      <h3 style="font-family:'Barlow Condensed',Georgia,serif;font-weight:700;font-size:1.875rem;line-height:1.15;margin-bottom:32px">Pine Forest Light</h3>

      <p style="font-size:12px;color:#6B7C72;letter-spacing:.08em;text-transform:uppercase;margin-bottom:16px">Body — DM Sans</p>
      <p style="font-size:1rem;line-height:1.55;margin-bottom:8px">The coast of Maine is built from old stone and cold water. A working landscape, unhurried and sure of itself.</p>
      <p style="font-size:0.875rem;color:#6B7C72;line-height:1.55">Small text at 14px — secondary labels, captions, metadata.</p>
    </div>
  `,
};
