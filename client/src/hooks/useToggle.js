import { useState, useCallback } from "react";

const useToggle = (initial) => {  
  const [open, setOpen] = useState(initial);   
  const onToggle = useCallback(() => setOpen( status => !status))
  return {open, onToggle};
};

export default useToggle;