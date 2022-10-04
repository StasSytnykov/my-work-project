import { useEffect, useState } from "react";

export const useResize = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);

  const onSetIsMobileMenuOpen = (isOpen: boolean) =>
    setIsMobileMenuOpen(isOpen);

  const handleResize = () => {
    if (window.innerWidth > 767) {
      setIsMobileMenuOpen(false);
      setIsShowMobileMenu(false);
    }
    if (window.innerWidth < 767) {
      setIsShowMobileMenu(true);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isMobileMenuOpen,
    isShowMobileMenu,
    onSetIsMobileMenuOpen,
  };
};
