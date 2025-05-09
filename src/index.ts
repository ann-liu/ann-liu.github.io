const animationTimeMs: number = 11500;
setInterval(() => {
  const codeSvgs: HTMLElement[] = Array.from(
    document.querySelectorAll('.code > circle')
  );
  codeSvgs.forEach(code => {
    code.parentNode?.replaceChild(code.cloneNode(true), code);
  });
}, animationTimeMs);
