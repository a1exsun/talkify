import { useState } from 'react';
export function useDisclose(initState) {
  const [isOpen, setIsOpen] = useState(initState || false);
  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  const onToggle = () => {
    setIsOpen(!isOpen);
  };
  return {
    isOpen,
    onOpen,
    onClose,
    onToggle
  };
}
//# sourceMappingURL=index.js.map