import React from 'react';

function Wrapper({ id, Style, children }) {
  return (
    <section id={id} className={Style}>
      <div className="w-full h-full max-w-[1320px] mx-auto relative">
        {children}
      </div>
    </section>
  );
}

export default Wrapper;
