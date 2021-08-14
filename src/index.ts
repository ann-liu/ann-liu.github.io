const animationTimeMs: number = 11500;
const laptopWidth: number = 1440;

document.addEventListener('DOMContentLoaded', () => {
  setInterval(() => {
    const codeSvgs: HTMLElement[] = Array.from(
      document.querySelectorAll('.code')
    );
    codeSvgs.forEach(code => {
      code.parentNode.replaceChild(code.cloneNode(true), code);
    });
  }, animationTimeMs);
});
