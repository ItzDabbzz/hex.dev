export default function GlobalStyles() {
  return (
    <style jsx global>{`
      :root {
        --red: 243, 139, 168;
        --lavender: 180, 190, 254;
      }
      
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      html, body {
        height: 100%;
        width: 100%;
      }
      
      body {
        background: #000;
        color: #fff;
        font-family: 'Inter', sans-serif;
        min-height: 100vh;
        overflow-x: hidden;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
      }
      
      body::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at 20% 50%, rgba(96, 40, 74, 0.1) 0%, transparent 50%), 
                    radial-gradient(circle at 80% 20%, rgba(67, 81, 119, 0.1) 0%, transparent 50%), 
                    radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
        z-index: -2;
      }
      
      #__next {
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      @media (max-width: 768px) {
        .portfolio-grid {
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        .portfolio-grid .w-px {
          display: none;
        }
        .font-mono {
          font-size: 0.5em;
        }
        .fixed .text-[28px] {
          font-size: 20px;
          padding: 15px 30px;
        }
        .grid-cols-2 {
          gap: 0.8rem;
        }
        .h-[250px] {
          height: 200px;
        }
      }
      
      @media (max-width: 480px) {
        .font-mono {
          font-size: 0.35em;
        }
        .grid-cols-2 {
          grid-template-columns: 1fr;
          gap: 0.6rem;
        }
        .text-sm {
          font-size: 0.85rem;
          padding: 8px 12px;
        }
      }
    `}</style>
  );
}
