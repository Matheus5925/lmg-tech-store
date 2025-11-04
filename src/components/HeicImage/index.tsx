import { useState, useEffect } from "react";
import heic2any from "heic2any";

export function HeicImage({ src, alt, className, onClick }) {
  const [convertedSrc, setConvertedSrc] = useState(null);

  useEffect(() => {
    async function convert() {
      try {
        console.log("Carregando HEIC:", src);

        const res = await fetch(src);
        console.log("Status do fetch:", res.status);

        if (!res.ok) {
          console.error("Falha ao buscar imagem HEIC");
          return;
        }

        const blob = await res.blob();
        console.log("Blob carregado:", blob);

        const convertedBlob = await heic2any({
          blob,
          toType: "image/jpeg",
          quality: 0.9,
        });

        const url = URL.createObjectURL(convertedBlob);
        setConvertedSrc(url);
      } catch (err) {
        console.error("Erro convertendo HEIC:", err);
      }
    }

    convert();
  }, [src]);

  if (!convertedSrc) return <div className="text-center p-4">Carregando imagem HEIC...</div>;

  return <img src={convertedSrc} alt={alt} className={className} onClick={onClick} />;
}
