type WhatsAppIconProps = {
  className?: string;
};

export function WhatsAppIcon({ className }: WhatsAppIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12.04 3.5A8.41 8.41 0 0 0 4.9 16.37L4 20.5l4.23-1.1a8.4 8.4 0 1 0 3.81-15.9Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.4 8.38c-.2-.45-.42-.46-.61-.47h-.52c-.18 0-.47.07-.72.34s-.94.92-.94 2.24 1 2.6 1.13 2.78 1.92 3.07 4.75 4.18c2.36.93 2.84.75 3.35.7.51-.04 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.11-.25-.18-.52-.32s-1.64-.81-1.89-.9c-.25-.09-.44-.13-.62.14-.18.27-.71.9-.87 1.08-.16.18-.32.2-.59.07s-1.16-.43-2.2-1.36c-.81-.72-1.36-1.62-1.52-1.9-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.85-2.02Z"
        fill="currentColor"
      />
    </svg>
  );
}
