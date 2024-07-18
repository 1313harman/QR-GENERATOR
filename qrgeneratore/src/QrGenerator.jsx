import React, { useState } from 'react';
import { RiAiGenerate } from 'react-icons/ri';
import QRCode from 'qrcode.react';

function QrGenerator() {
  const [inputValue, setInputValue] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  const handleDownload = () => {
    const qrCode = document.getElementById('qr-code');
    const canvas = qrCode.querySelector('canvas');
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      setQrCodeUrl(url);
      const a = document.createElement('a');
      a.href = url;
      a.download = `qr-code-${inputValue}.png`;
      a.click();
    });
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-gray-700 mb-4 text-center">QR Code Generator</h1>
        <form className="flex flex-col items-center">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-indigo-500"
            placeholder="Enter text to generate QR"
          />
          <button
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleDownload}
          >
            Download QR Code
          </button>
        </form>
        <div className="mt-8 flex justify-center">
          <QRCode id="qr-code" value={inputValue} size={256} />
        </div>
      </div>
    </div>
  );
}

export default QrGenerator;