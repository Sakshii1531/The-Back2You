import React, { useMemo, useRef, useState } from "react";
import { QRCodeCanvas, QRCodeSVG } from "qrcode.react";
import { Download, Copy, Image as ImageIcon, Trash2 } from "lucide-react";

const buildPayload = ({ itemName, ownerName, phone, email, note, returnUrl }) => {
  // Tum apni website ke flow ke hisaab se yaha payload change kar sakti ho
  // JSON + fallback URL, taa ki scanner dono handle kar sake
  const data = {
    type: "BACK2YOU_ITEM",
    itemName,
    ownerName,
    phone,
    email,
    note,
    returnUrl,
    v: 1,
  };
  return JSON.stringify(data);
};

const QRGenerator = () => {
  // form state
  const [itemName, setItemName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("If found, please scan & contact.");
  const [returnUrl, setReturnUrl] = useState("https://back2you.app/return"); // apna real URL daalna
  const [fgColor, setFgColor] = useState("#6366F1"); // indigo-500
  const [bgColor, setBgColor] = useState("#0F1621"); // theme bg (only for preview card)
  const [qrBg, setQrBg] = useState("#00000000"); // transparent QR background
  const [size, setSize] = useState(280);
  const [useSvg, setUseSvg] = useState(false);

  // logo overlay
  const [logo, setLogo] = useState(null);
  const logoInputRef = useRef(null);

  // refs for download
  const canvasRef = useRef(null);
  const svgRef = useRef(null);

  const payload = useMemo(
    () => buildPayload({ itemName, ownerName, phone, email, note, returnUrl }),
    [itemName, ownerName, phone, email, note, returnUrl]
  );

  const canGenerate = itemName.trim().length > 0;

  const handlePickLogo = () => logoInputRef.current?.click();
  const handleLogoFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setLogo(reader.result);
    reader.readAsDataURL(file);
  };
  const removeLogo = () => setLogo(null);

  const downloadPng = () => {
    if (useSvg) {
      // Convert SVG to PNG quickly
      const svgEl = svgRef.current?.querySelector("svg");
      if (!svgEl) return;
      const svgData = new XMLSerializer().serializeToString(svgEl);
      const img = new Image();
      const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
      const url = URL.createObjectURL(svgBlob);
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d");
        // optional white/transparent bg
        ctx.clearRect(0, 0, size, size);
        ctx.drawImage(img, 0, 0, size, size);
        if (logo) {
          const logoImg = new Image();
          logoImg.onload = () => {
            const L = Math.round(size * 0.22);
            const x = (size - L) / 2;
            const y = (size - L) / 2;
            // white badge behind logo for contrast
            ctx.fillStyle = "white";
            ctx.beginPath();
            ctx.arc(size / 2, size / 2, L / 2 + 8, 0, Math.PI * 2);
            ctx.fill();
            ctx.save();
            ctx.beginPath();
            ctx.arc(size / 2, size / 2, L / 2, 0, Math.PI * 2);
            ctx.clip();
            ctx.drawImage(logoImg, x, y, L, L);
            ctx.restore();

            const link = document.createElement("a");
            link.download = `${itemName || "back2you"}-qr.png`;
            link.href = canvas.toDataURL("image/png");
            link.click();
          };
          logoImg.src = logo;
        } else {
          const link = document.createElement("a");
          link.download = `${itemName || "back2you"}-qr.png`;
          link.href = canvas.toDataURL("image/png");
          link.click();
        }
        URL.revokeObjectURL(url);
      };
      img.src = url;
      return;
    }

    // Canvas variant direct
    const canvas = canvasRef.current?.querySelector("canvas");
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `${itemName || "back2you"}-qr.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const downloadSvg = () => {
    const svgEl = svgRef.current?.querySelector("svg");
    if (!svgEl) return;
    const svgData = new XMLSerializer().serializeToString(svgEl);
    const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = `${itemName || "back2you"}-qr.svg`;
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  };

  const copyPayload = async () => {
    try {
      await navigator.clipboard.writeText(payload);
      alert("QR data copied!");
    } catch {
      alert("Copy failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0B0E14] via-[#0F1621] to-[#0B0E14] text-white p-6 flex items-start justify-center">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8">

        {/* Left: Form */}
        <div className="bg-[#0F1621]/80 backdrop-blur-xl rounded-3xl border border-white/10 p-6 shadow-2xl hover:shadow-[0_0_30px_#6366F140] transition">
          <h2 className="text-2xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Generate QR for Lost Item
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="text-sm text-gray-300">Item Name *</label>
              <input
                className="mt-1 w-full rounded-xl bg-gray-800/70 border border-gray-700 p-3 focus:outline-none focus:border-indigo-400"
                placeholder="Wallet / Backpack / Phone…"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Your Name</label>
              <input
                className="mt-1 w-full rounded-xl bg-gray-800/70 border border-gray-700 p-3 focus:outline-none focus:border-indigo-400"
                placeholder="Sakshi / Isha"
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Phone</label>
              <input
                className="mt-1 w-full rounded-xl bg-gray-800/70 border border-gray-700 p-3 focus:outline-none focus:border-indigo-400"
                placeholder="+91 98xxxxxx"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-sm text-gray-300">Email</label>
              <input
                className="mt-1 w-full rounded-xl bg-gray-800/70 border border-gray-700 p-3 focus:outline-none focus:border-indigo-400"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-sm text-gray-300">Return URL</label>
              <input
                className="mt-1 w-full rounded-xl bg-gray-800/70 border border-gray-700 p-3 focus:outline-none focus:border-indigo-400"
                placeholder="https://back2you.app/return?item=..."
                value={returnUrl}
                onChange={(e) => setReturnUrl(e.target.value)}
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-sm text-gray-300">Note</label>
              <textarea
                rows={3}
                className="mt-1 w-full rounded-xl bg-gray-800/70 border border-gray-700 p-3 focus:outline-none focus:border-indigo-400"
                placeholder="If found, please scan & contact."
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </div>
          </div>

          {/* Controls */}
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            <div>
              <label className="text-sm text-gray-300">QR Size</label>
              <input
                type="range"
                min={160}
                max={420}
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className="w-full"
              />
              <div className="text-xs text-gray-400 mt-1">{size}px</div>
            </div>

            <div>
              <label className="text-sm text-gray-300">QR Color</label>
              <input
                type="color"
                className="w-full h-[46px] rounded-xl bg-gray-800/70 border border-gray-700 p-1"
                value={fgColor}
                onChange={(e) => setFgColor(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">QR Background</label>
              <input
                type="color"
                className="w-full h-[46px] rounded-xl bg-gray-800/70 border border-gray-700 p-1"
                value={qrBg}
                onChange={(e) => setQrBg(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => setUseSvg(false)}
              className={`px-4 py-2 rounded-xl border ${
                !useSvg ? "border-indigo-400 text-indigo-300" : "border-gray-700 text-gray-300"
              }`}
            >
              Canvas (PNG)
            </button>
            <button
              onClick={() => setUseSvg(true)}
              className={`px-4 py-2 rounded-xl border ${
                useSvg ? "border-indigo-400 text-indigo-300" : "border-gray-700 text-gray-300"
              }`}
            >
              SVG
            </button>

            <button
              onClick={copyPayload}
              className="px-4 py-2 rounded-xl bg-white/10 border border-white/10 hover:border-indigo-400 hover:shadow-[0_0_20px_#6366F1] transition flex items-center gap-2"
            >
              <Copy size={16} /> Copy QR data
            </button>
          </div>
        </div>

        {/* Right: Preview + Actions */}
        <div className="bg-[#0F1621]/80 backdrop-blur-xl rounded-3xl border border-white/10 p-6 shadow-2xl flex flex-col items-center gap-4">
          <h3 className="text-lg text-gray-300">Live Preview</h3>

          <div
            className="relative rounded-3xl p-6 border border-white/10 shadow-xl"
            style={{ background: bgColor }}
          >
            {/* QR */}
            <div className="relative" ref={useSvg ? svgRef : canvasRef}>
              {useSvg ? (
                <QRCodeSVG
                  value={canGenerate ? payload : "Back2You"}
                  size={size}
                  bgColor={qrBg}
                  fgColor={fgColor}
                  level="M"
                  includeMargin={false}
                />
              ) : (
                <QRCodeCanvas
                  value={canGenerate ? payload : "Back2You"}
                  size={size}
                  bgColor={qrBg}
                  fgColor={fgColor}
                  level="M"
                  includeMargin={false}
                />
              )}

              {/* Center logo overlay */}
              {logo && (
                <div
                  className="absolute rounded-full overflow-hidden ring-4 ring-white"
                  style={{
                    width: Math.round(size * 0.22),
                    height: Math.round(size * 0.22),
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    boxShadow: "0 0 20px rgba(99,102,241,0.5)",
                  }}
                >
                  <img
                    src={logo}
                    alt="logo"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Logo controls */}
          <div className="flex flex-wrap gap-3">
            <input
              ref={logoInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleLogoFile}
            />
            <button
              onClick={handlePickLogo}
              className="px-4 py-2 rounded-xl bg-white/10 border border-white/10 hover:border-indigo-400 hover:shadow-[0_0_20px_#6366F1] transition flex items-center gap-2"
            >
              <ImageIcon size={16} /> Add center logo
            </button>
            {logo && (
              <button
                onClick={removeLogo}
                className="px-4 py-2 rounded-xl bg-white/10 border border-white/10 hover:border-red-400 hover:shadow-[0_0_20px_#ef4444] transition flex items-center gap-2"
              >
                <Trash2 size={16} /> Remove logo
              </button>
            )}
          </div>

          {/* Download buttons */}
          <div className="mt-2 flex flex-wrap gap-3">
            <button
              onClick={downloadPng}
              disabled={!canGenerate}
              className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 rounded-xl font-semibold flex items-center gap-2 shadow-md hover:shadow-indigo-400/50 transition"
            >
              <Download size={18} /> Download PNG
            </button>

            {useSvg && (
              <button
                onClick={downloadSvg}
                disabled={!canGenerate}
                className="px-5 py-2 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 rounded-xl font-semibold flex items-center gap-2 shadow-md hover:shadow-purple-400/50 transition"
              >
                <Download size={18} /> Download SVG
              </button>
            )}
          </div>

          {/* Small help */}
          <p className="text-xs text-gray-400 mt-2 text-center">
            Tip: Keep the QR contrast high (dark foreground + light/transparent background) for best scan results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QRGenerator;
