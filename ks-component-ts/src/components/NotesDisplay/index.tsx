import { Icon, Text } from "@kanda-libs/ks-design-library";
import React, { type FunctionComponent } from "react";
import MarkdownDisplay from "../MarkdownDisplay";

export interface NotesDisplayProps {
  note: string;
}

const NotesDisplay: FunctionComponent<NotesDisplayProps> = function ({ note }) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row mb-4">
        <Icon
          icon="paper"
          size={20}
          className="my-auto mr-3"
          stroke="neutral-500"
        />
        <Text text="Note" className="text-14-22-em text-neutral-500" />
      </div>
      <Text
        text={<MarkdownDisplay>{note}</MarkdownDisplay>}
        className="text-16-24 text-neutral-700"
      />
    </div>
  );
};

export default NotesDisplay;
