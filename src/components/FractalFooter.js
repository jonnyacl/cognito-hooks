import React from "react";

const FractalFooter = () => {
  return(
    <div>
      <div className="footer copyright">
        &copy; Fractal Labs v1.0.0
      </div>
      <div className="footer links">
        <a href="https://intercom.help/askfractal" target="_blank" rel="noopener noreferrer">Support</a> <a href="https://www.askfractal.com/legal/privacy_policy" target="_blank" rel="noopener noreferrer">Privacy</a> <a href="https://www.askfractal.com/legal/terms_of_use" target="_blank" rel="noopener noreferrer">Terms</a>
      </div>
    </div>
  );  
}

export { FractalFooter };