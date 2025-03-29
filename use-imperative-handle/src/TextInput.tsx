import { forwardRef, Ref, useImperativeHandle, useRef } from "react";

interface TextInputProps {
  placeholder: string;
}

/**
 * this is the type for the ref that we will be passing back to the parent.
 */
export type TextInputRef = {
  reset: () => void;
};

/**
 *
 * @param props // placeholder prop
 * @param ref // this is the ref coming form the parent
 * @returns // a component with forward ref, so that we can access the ref from the parent.
 */
function TextInput(props: TextInputProps, ref: Ref<TextInputRef>) {
  //   This is a local ref to manage the local input form this component.
  const localRef = useRef<HTMLInputElement>(null);

  //   We return an object with attached methods.
  useImperativeHandle(ref, () => ({
    reset: () => {
      if (!localRef.current) return;
      localRef.current.value = "";
      localRef.current.focus();
    },
  }));

  //   JSX
  return <input type="text" ref={localRef} placeholder={props.placeholder} />;
}

export default forwardRef(TextInput);
