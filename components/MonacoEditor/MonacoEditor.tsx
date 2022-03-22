import { FC } from "react";
import Editor from "@monaco-editor/react";
import { WindowToolbarIcon } from "../../public/icons/icons";

type Props = {}

const MonacoEditor: FC<Props> = () => {
  return (
    <>
      <WindowToolbarIcon className='w-6 h-6 absolute -top-1 left-4 z-20'/>
      <Editor
        className='pt-4'
        height="100%"
        width="100%"
        options={{
          lineDecorationsWidth: "0",
          lineNumbersMinChars: "3",
          smoothScrolling: true
          
        }}
        defaultLanguage="cpp"
        defaultValue="// some comment"
        theme="vs"
      />
    </>
  );
};

export default MonacoEditor;
