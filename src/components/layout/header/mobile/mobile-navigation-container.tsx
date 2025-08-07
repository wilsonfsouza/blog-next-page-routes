"use client";
import { Sheet } from "@/components/ui/sheet";
import { useMediaQuery } from "@/hooks/use-media-query/use-media-query";
import { useCallback, useEffect, useState } from "react";

interface MobileNavigationContainerProps {
  children: React.ReactNode;
}

export const MobileNavigationContainer = ({
  children,
}: MobileNavigationContainerProps) => {
  const [open, setOpen] = useState(false);
  const handleOpenChange = useCallback((open: boolean) => {
    setOpen(open);
  }, []);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (isDesktop) {
      setOpen(false);
    }
  }, [isDesktop]);

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      {children}
    </Sheet>
  );
};
