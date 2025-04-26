import { useCallback, useState } from "react"

export const useToggleDisabledState = (): [boolean, () => void] => {
  const [isDisabled, setIsDisabled] = useState(false);

  const toggleIsDisabled = useCallback(() => {
    setIsDisabled((currentState) => !currentState);
  }, []);

  return [
    isDisabled,
    toggleIsDisabled,
  ]
}