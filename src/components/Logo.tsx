/* eslint max-len: 0 */
// external
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h, JSX } from 'preact';

// global
import { useConfig, useEmotion } from '../hooks';

// eslint-disable-next-line jsdoc/require-returns
/**
 * The Transcend square logo
 * Not a full SVG, just the inner elements
 */
export function Logomark(): JSX.Element {
  return (
    <g>
      <path d="M1.10204 9.20907C1.09113 9.14909 1.08568 9.09456 1.07477 9.03459C1.03658 8.7565 0.774751 8.56021 0.496555 8.59837C0.218358 8.63654 0.0219839 8.89827 0.0601677 9.17635C0.0710774 9.24179 0.0819871 9.31267 0.0928967 9.3781C0.229268 10.1796 0.4911 10.9485 0.862029 11.6573C0.954761 11.8318 1.12932 11.9299 1.31478 11.9299C1.3966 11.9299 1.47842 11.9136 1.55479 11.87C1.80572 11.7391 1.9039 11.4283 1.76753 11.1775C1.4457 10.5722 1.22205 9.90701 1.10204 9.20907V9.20907Z" />
      <path d="M2.53659 3.59285C2.66751 3.59285 2.80388 3.53832 2.90207 3.44017C3.43664 2.89491 4.04758 2.44779 4.72944 2.10973C4.98581 1.98432 5.08946 1.67897 4.96399 1.4227C4.83853 1.16642 4.53306 1.06282 4.27668 1.18823C3.49119 1.57537 2.78206 2.09337 2.16566 2.72043C1.96929 2.92217 1.97474 3.24933 2.17657 3.44563C2.28021 3.54377 2.41113 3.59285 2.53659 3.59285V3.59285Z" />
      <path d="M6.54038 1.5263L6.56765 1.52085C7.31496 1.39544 8.07319 1.39544 8.80959 1.5263C8.83686 1.53175 8.86959 1.53175 8.89687 1.53175C9.14233 1.53175 9.36053 1.35727 9.40417 1.10645C9.45326 0.828361 9.2678 0.561182 8.98414 0.512108C8.12773 0.364887 7.24405 0.364887 6.38219 0.506655L6.36582 0.512108C6.09308 0.566634 5.91307 0.822908 5.95671 1.09554C6.00035 1.37908 6.26218 1.56992 6.54038 1.5263V1.5263Z" />
      <path d="M1.56557 4.29079C1.31464 4.15993 1.00372 4.25262 0.872801 4.50344C0.458234 5.28317 0.185492 6.11742 0.0600303 6.98439C0.0163916 7.26248 0.212766 7.5242 0.490963 7.56782C0.518237 7.57328 0.540056 7.57328 0.56733 7.57328C0.818253 7.57328 1.03645 7.38789 1.07463 7.13707C1.18373 6.3846 1.42374 5.66485 1.7783 4.98873C1.91468 4.73245 1.81649 4.42165 1.56557 4.29079V4.29079Z" />
      <path d="M14.2481 6.97349C14.259 7.02802 14.2645 7.088 14.2754 7.14252C14.3136 7.3988 14.5318 7.58419 14.7827 7.58419C14.8045 7.58419 14.8318 7.58419 14.8591 7.57873C15.1373 7.54057 15.3336 7.27884 15.2955 7.00075C15.2845 6.93532 15.2736 6.86989 15.2627 6.80446C15.1264 6.00292 14.8645 5.2341 14.4881 4.5198C14.3572 4.26898 14.0463 4.17083 13.7954 4.30715C13.5445 4.43801 13.4463 4.74881 13.5826 4.99963C13.899 5.61033 14.1281 6.27555 14.2481 6.97349Z" />
      <path d="M12.4479 12.7369C11.9133 13.2822 11.3024 13.7293 10.6205 14.0674C10.3642 14.1928 10.2605 14.4981 10.386 14.7544C10.4733 14.9343 10.6587 15.0379 10.8442 15.0379C10.9206 15.0379 10.9969 15.0216 11.0678 14.9834C11.8533 14.5963 12.5625 14.0783 13.1789 13.4458C13.3752 13.244 13.3698 12.9169 13.1679 12.7206C12.9661 12.5297 12.6443 12.5352 12.4479 12.7369Z" />
      <path d="M11.0789 1.19914C10.8225 1.07373 10.5171 1.17733 10.3916 1.43361C10.2661 1.68988 10.3698 1.99523 10.6262 2.12064C11.308 2.4587 11.9244 2.90582 12.459 3.45108C12.5572 3.55468 12.6935 3.60376 12.8245 3.60376C12.9554 3.60376 13.0808 3.55468 13.1845 3.45654C13.3863 3.26024 13.3918 2.93308 13.1954 2.73133C12.5735 2.10428 11.8644 1.58628 11.0789 1.19914V1.19914Z" />
      <path d="M8.79322 14.6617C8.04045 14.7871 7.27132 14.7871 6.52946 14.6563C6.25126 14.6072 5.98397 14.7926 5.93488 15.0707C5.88579 15.3487 6.07125 15.6159 6.34945 15.665C6.78038 15.7413 7.22222 15.7795 7.66406 15.7795C8.095 15.7795 8.53138 15.7413 8.95686 15.6704L8.97868 15.665C9.25688 15.6159 9.43689 15.3542 9.39325 15.0707C9.34415 14.798 9.07141 14.6126 8.79322 14.6617Z" />
      <path d="M4.71845 14.0619C4.0366 13.7239 3.4202 13.2767 2.89108 12.7315C2.69471 12.5297 2.36742 12.5243 2.16559 12.7206C1.96376 12.9169 1.9583 13.244 2.15468 13.4458C2.76562 14.0728 3.47475 14.5908 4.2657 14.9834C4.33661 15.0216 4.41843 15.0379 4.4948 15.0379C4.68572 15.0379 4.86573 14.9343 4.95301 14.7544C5.07847 14.4927 4.97483 14.1873 4.71845 14.0619V14.0619Z" />
      <path d="M14.8537 8.61473C14.5755 8.57111 14.3136 8.7674 14.27 9.04549C14.1609 9.79795 13.9263 10.5177 13.5663 11.1938C13.4354 11.4447 13.5281 11.7555 13.7791 11.8863C13.8554 11.9245 13.9372 11.9463 14.0191 11.9463C14.2045 11.9463 14.3791 11.8481 14.4718 11.6737C14.8809 10.8939 15.1537 10.0597 15.2846 9.19271C15.3282 8.91463 15.1319 8.6529 14.8537 8.61473V8.61473Z" />
      <path d="M4.55482 4.68883C5.28032 4.02361 6.17491 3.61466 7.15133 3.50561C7.49498 3.46744 7.84954 3.46744 8.18774 3.50561C8.4714 3.53832 8.72232 3.33657 8.75505 3.05304C8.78778 2.7695 8.58595 2.51868 8.3023 2.48596C7.88773 2.43689 7.4568 2.43689 7.03677 2.48596C5.84216 2.62228 4.74574 3.12392 3.86206 3.93637C3.65477 4.12721 3.63841 4.45437 3.82933 4.66157C3.93297 4.77062 4.06934 4.82515 4.20571 4.82515C4.33663 4.82515 4.45664 4.78152 4.55482 4.68883V4.68883Z" />
      <path d="M7.66945 13.7293C7.88219 13.7293 8.09492 13.7184 8.30766 13.6911H8.31857C8.60222 13.6584 8.80405 13.4022 8.76587 13.1241C8.73314 12.8405 8.47676 12.6442 8.19857 12.6769H8.19311C8.01856 12.6988 7.844 12.7042 7.66945 12.7042C6.51848 12.7042 5.41115 12.2735 4.56019 11.4883C4.35291 11.2974 4.02562 11.3138 3.8347 11.521C3.64378 11.7282 3.66015 12.0553 3.86743 12.2462C4.9093 13.2059 6.2621 13.7293 7.66945 13.7293V13.7293Z" />
      <path d="M9.9441 4.07814C11.1114 4.73791 11.9297 5.8666 12.1969 7.16433C12.246 7.4097 12.4588 7.57328 12.6988 7.57328C12.7315 7.57328 12.7697 7.56782 12.8024 7.56237C13.0806 7.50784 13.2606 7.23521 13.2006 6.95713C12.8733 5.36496 11.8697 3.99089 10.4514 3.1839C10.2059 3.04214 9.88955 3.12938 9.75318 3.37475C9.61135 3.62557 9.69863 3.93637 9.9441 4.07814Z" />
      <path d="M3.21845 5.50128C2.96207 5.38132 2.6566 5.49583 2.5366 5.7521C2.1984 6.48821 2.0293 7.27339 2.0293 8.08038C2.0293 8.29303 2.04021 8.50568 2.06748 8.71834C2.13294 9.31267 2.29113 9.8852 2.5366 10.4196C2.62387 10.6104 2.80934 10.7195 3.00571 10.7195C3.07663 10.7195 3.14754 10.7031 3.21845 10.6704C3.47483 10.5504 3.58938 10.2505 3.47483 9.9888C3.273 9.54714 3.14208 9.07821 3.08753 8.59838C3.06572 8.42389 3.06026 8.24941 3.06026 8.07493C3.06026 7.41516 3.20209 6.77175 3.47483 6.17196C3.58938 5.92659 3.48028 5.62124 3.21845 5.50128V5.50128Z" />
      <path d="M13.2008 9.20907C13.2553 8.93099 13.0753 8.65836 12.8026 8.60383C12.5244 8.54931 12.2517 8.72924 12.1971 9.00187C11.9298 10.3105 11.1116 11.4392 9.94971 12.099C9.70424 12.2407 9.61697 12.5515 9.75879 12.7969C9.85152 12.9605 10.0261 13.0532 10.2061 13.0532C10.2934 13.0532 10.3806 13.0314 10.457 12.9878C11.8807 12.1862 12.879 10.8067 13.2008 9.20907Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.2715 5.61577C10.9316 6.30826 11.2861 7.21885 11.2643 8.17306C11.2425 9.13272 10.8443 10.0215 10.1625 10.6813C9.48605 11.3247 8.61328 11.6737 7.68596 11.6737H7.59868C5.61857 11.63 4.04758 9.98334 4.09122 8.00403C4.11304 7.04982 4.51124 6.15559 5.20401 5.49582C5.89677 4.83605 6.80227 4.48163 7.76232 4.50344C8.71692 4.52525 9.61151 4.92329 10.2715 5.61577ZM5.11116 8.0313C5.07844 9.44353 6.20213 10.6213 7.61493 10.654C9.02774 10.6867 10.206 9.56349 10.2387 8.15126C10.2551 7.46968 10.0042 6.82081 9.52958 6.32462C9.05501 5.82843 8.41679 5.54489 7.73494 5.52854C7.05309 5.51218 6.40396 5.763 5.90757 6.23738C5.41118 6.71176 5.12753 7.34972 5.11116 8.0313Z"
      />
    </g>
  );
}

// eslint-disable-next-line jsdoc/require-returns
/**
 * The Transcend logo rendered as SVG.
 * On Desktop, hovering shows wordmark. On Mobile, only square logo is visible
 */
export function FullLogo(): JSX.Element {
  const { config } = useConfig();
  const { css, cx } = useEmotion();

  const logoContainerStyle = css`
    width: 17px;
    height: 17px;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    left: 0;

    @media (min-width: ${config.breakpoints.tablet}) {
      width: 64px;
    }
  `;

  const fullLogoSVGStyle = css`
    width: 64px;
    height: 17px;

    path {
      fill: ${config.theme.fontColor};
      transition: fill 150ms;
    }

    .wordmark {
      fill-opacity: 0;
      transition: fill 150ms, fill-opacity 150ms;
    }

    @media (min-width: ${config.breakpoints.tablet}) {
      &:hover .wordmark,
      &:focus .wordmark {
        fill-opacity: 1;
      }

      &:hover path {
        fill: ${config.theme.primaryColor};
      }
    }
  `;

  return (
    <a
      className={cx(logoContainerStyle)}
      href="https://transcend.io/"
      target="_blank"
      rel="noopener noreferrer"
      title="Powered by Transcend"
      aria-label="Powered by Transcend"
    >
      <svg
        className={cx(fullLogoSVGStyle)}
        viewBox="0 0 64 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Logomark />
        <g className="wordmark" fill={config.theme.fontColor}>
          <path d="M17.3591 4.46346H23.1514V5.6923H20.9856V11.6658H19.5284V5.6923H17.3591V4.46346Z" />
          <path d="M24.0778 7.32484H24.1084C24.4203 6.73632 24.7734 6.43852 25.3772 6.43852C25.4863 6.43201 25.5956 6.44557 25.6997 6.47854V7.67678H25.6691C24.7734 7.58615 24.1284 8.05933 24.1284 9.1481V11.6658H22.7583V6.49855H24.0778V7.32484Z" />
          <path d="M29.3862 11.0914H29.365C29.1025 11.4846 28.7306 11.7871 27.8443 11.7871C26.7849 11.7871 26.041 11.2327 26.041 10.2051C26.041 9.06689 26.9674 8.70436 28.1162 8.5431C28.9719 8.4254 29.365 8.35242 29.365 7.95458C29.365 7.58145 29.0731 7.34016 28.4987 7.34016C27.8537 7.34016 27.5418 7.57557 27.5017 8.06522H26.2835C26.3235 7.15889 26.9991 6.3632 28.5093 6.3632C30.0606 6.3632 30.6857 7.05767 30.6857 8.2665V10.9019C30.6857 11.2939 30.7457 11.5258 30.8669 11.6164V11.667H29.5474C29.4662 11.5646 29.4156 11.3233 29.3862 11.0914ZM29.3956 9.84257V9.06689C29.1543 9.20814 28.7812 9.28818 28.4387 9.36939C27.7242 9.53065 27.3711 9.69191 27.3711 10.1757C27.3711 10.6594 27.6936 10.8301 28.1774 10.8301C28.9625 10.8301 29.3956 10.3463 29.3956 9.84257Z" />
          <path d="M32.9693 7.2036H32.9987C33.3519 6.64921 33.8227 6.3573 34.5289 6.3573C35.5965 6.3573 36.3121 7.16358 36.3121 8.2912V11.6658H34.9432V8.48776C34.9432 7.93455 34.6207 7.54612 34.0463 7.54612C33.4425 7.54612 32.9987 8.02989 32.9987 8.73494V11.6658H31.6287V6.49855H32.9693V7.2036Z" />
          <path d="M36.9995 9.99322H38.2696C38.3602 10.5876 38.7827 10.8501 39.3972 10.8501C40.0116 10.8501 40.3388 10.6147 40.3388 10.2557C40.3388 9.76252 39.6844 9.7119 38.9793 9.57066C38.053 9.38939 37.1466 9.1375 37.1466 8.00989C37.1466 6.88227 38.073 6.36201 39.2512 6.36201C40.6119 6.36201 41.3699 7.03764 41.4676 8.07462H40.2329C40.1728 7.52023 39.8209 7.31896 39.2359 7.31896C38.7027 7.31896 38.3496 7.52023 38.3496 7.89336C38.3496 8.33711 39.0346 8.37713 39.7703 8.52779C40.6366 8.70906 41.5935 8.95153 41.5935 10.1592C41.5935 11.1973 40.7072 11.8212 39.4172 11.8212C37.9164 11.8165 37.0807 11.0914 36.9995 9.99322Z" />
          <path d="M42.1055 9.08688C42.1055 7.54612 43.113 6.3573 44.6844 6.3573C46.0239 6.3573 46.8502 7.13298 47.0314 8.25117H45.6908C45.6557 8.0275 45.5412 7.82395 45.3683 7.67782C45.1953 7.53168 44.9755 7.45275 44.7491 7.45549C43.9252 7.45549 43.5003 8.08992 43.5003 9.08688C43.5003 10.0638 43.8934 10.7195 44.7291 10.7195C45.2835 10.7195 45.6708 10.4264 45.7661 9.84255H47.0856C46.9949 10.9407 46.1439 11.8165 44.7597 11.8165C43.1224 11.8165 42.1055 10.6288 42.1055 9.08688Z" />
          <path d="M47.5918 9.07746C47.5918 7.5473 48.6288 6.3573 50.1401 6.3573C51.8021 6.3573 52.6884 7.62616 52.6884 9.4706H48.9407C49.0419 10.2663 49.4857 10.7595 50.2602 10.7595C50.7946 10.7595 51.1065 10.517 51.2583 10.125H52.6072C52.4165 11.0408 51.6008 11.8165 50.2708 11.8165C48.5582 11.8165 47.5918 10.6182 47.5918 9.07746ZM48.9619 8.52307H51.2583C51.2171 7.86863 50.7875 7.41547 50.1601 7.41547C49.4351 7.41547 49.0819 7.84862 48.9619 8.52307Z" />
          <path d="M54.7 7.2036H54.7295C55.0826 6.64921 55.5534 6.3573 56.2596 6.3573C57.3272 6.3573 58.0429 7.16358 58.0429 8.2912V11.6658H56.6728V8.48776C56.6728 7.93455 56.3503 7.54612 55.7759 7.54612C55.172 7.54612 54.7283 8.02989 54.7283 8.73494V11.6658H53.3594V6.49855H54.7V7.2036Z" />
          <path d="M58.7019 9.08691C58.7019 7.47553 59.6188 6.35733 60.9077 6.35733C61.1972 6.3446 61.4848 6.4088 61.7414 6.5434C61.998 6.678 62.2144 6.87819 62.3684 7.12359H62.399V4.46346H63.7691V11.6658H62.4496V10.9914H62.4284C62.1271 11.4846 61.6127 11.8153 60.8877 11.8153C59.5882 11.8165 58.7019 10.7595 58.7019 9.08691ZM62.4284 9.11751C62.4284 8.12997 62.1071 7.46964 61.2302 7.46964C60.4745 7.46964 60.092 8.1335 60.092 9.09044C60.092 10.0886 60.4851 10.6724 61.1902 10.6724C62.0059 10.6665 62.4284 10.0639 62.4284 9.11751Z" />
        </g>
      </svg>
    </a>
  );
}
