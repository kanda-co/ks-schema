import { Icon, Text } from "@kanda-libs/ks-design-library";
import React, { type FunctionComponent } from "react";
import MarkdownDisplay from "../MarkdownDisplay";

export interface NotesDisplayProps {
  note: string;
  compact?: boolean;
}

const NotesDisplay: FunctionComponent<NotesDisplayProps> = function ({
  note,
  compact = false,
}) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row mb-4">
        <Icon
          icon="paper"
          size={20}
          className="my-auto mr-3"
          stroke="neutral-500"
        />
        {!compact && (
          <Text text="Note" className="text-14-22-em text-neutral-500" />
        )}
        {compact && (
          <Text
            text={<MarkdownDisplay>{note}</MarkdownDisplay>}
            className="text-14-22 text-neutral-700"
          />
        )}
      </div>
      {!compact && (
        <Text
          text={<MarkdownDisplay>{note}</MarkdownDisplay>}
          className="text-16-24 text-neutral-700"
        />
      )}
    </div>
  );
};

export default NotesDisplay;
